"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, Loader2, AlertCircle, Search } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";
import { getYourWebsiteTranslations } from "@/i18n/page-translations";
import { countryCodes } from "@/app/build-your-website/LeadFormClient";

// Form validation schema - only name, email, and phone
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  countryCode: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string().min(5, 'Phone number must be at least 5 digits').max(15, 'Phone number must be less than 15 digits').regex(/^[0-9\s\-\(\)]+$/, 'Phone number can only contain numbers and spaces'),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadFormClient() {
  const { language } = useLanguage();
  const t = getYourWebsiteTranslations[language];
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      countryCode: '+1',
      phoneNumber: '',
    }
  });

  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country => 
    country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.flag.includes(countrySearch)
  );

  const onSubmit = async (data: FormData) => {
    setSubmitError('');

    try {
      const response = await fetch('/api/get-your-website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          phoneNumber: `${data.countryCode} ${data.phoneNumber}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      setShowConfirmationDialog(true);
      reset();
      setCountrySearch('');
      setIsCountrySelectOpen(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit your information. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            <div className="flex-1 p-3 rounded-lg text-center font-semibold bg-emerald-600 text-white">
              {t.form.step1}<br />{t.form.step1Subtitle}
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-4">{t.form.mandatoryFields}</p>

          <div>
            <Label htmlFor="fullName" className="text-slate-700">
              {t.form.fullName} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              {...register('fullName')}
              placeholder={`${t.form.fullName}...`}
              className="mt-1 text-slate-900 placeholder:text-slate-400"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-slate-700">
              {t.form.email} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder={`${t.form.email}...`}
              className="mt-1 text-slate-900 placeholder:text-slate-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-slate-700">
              {t.form.phoneNumber} <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2 mt-1">
              <Select
                value={watch('countryCode')}
                open={isCountrySelectOpen}
                onOpenChange={(open) => {
                  setIsCountrySelectOpen(open);
                  if (!open) {
                    setCountrySearch('');
                  }
                }}
                onValueChange={(value) => {
                  setValue('countryCode', value);
                  setCountrySearch('');
                  setIsCountrySelectOpen(false);
                }}
              >
                <SelectTrigger className="w-32 h-10 text-sm text-slate-900">
                  <SelectValue placeholder="Country">
                    {watch('countryCode') && (
                      <span className="flex items-center gap-1">
                        <span className="text-sm">{countryCodes.find(c => c.code === watch('countryCode'))?.flag}</span>
                        <span className="text-sm">{watch('countryCode')}</span>
                      </span>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {/* Search Input */}
                  <div className="p-2 border-b">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search country..."
                        value={countrySearch}
                        onChange={(e) => {
                          setCountrySearch(e.target.value);
                          if (!isCountrySelectOpen) {
                            setIsCountrySelectOpen(true);
                          }
                        }}
                        className="pl-8 h-8 text-sm text-slate-900 placeholder:text-slate-400"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                        }}
                        onKeyDown={(e) => {
                          e.stopPropagation();
                          if (e.key === 'Escape') {
                            e.preventDefault();
                            setCountrySearch('');
                          }
                        }}
                        onFocus={() => {
                          setIsCountrySelectOpen(true);
                        }}
                        autoFocus
                      />
                    </div>
                  </div>
                  
                  {/* Country List */}
                  <div className="max-h-48 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <span className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span className="font-medium">{country.code}</span>
                            <span className="text-sm text-gray-600">{country.country}</span>
                          </span>
                        </SelectItem>
                      ))
                    ) : (
                      <div className="p-2 text-sm text-gray-500 text-center">
                        No countries found
                      </div>
                    )}
                  </div>
                </SelectContent>
              </Select>
              <Input
                id="phoneNumber"
                {...register('phoneNumber')}
                placeholder={`${t.form.phoneNumber}...`}
                className="flex-1 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            {errors.countryCode && (
              <p className="text-red-500 text-xs mt-1">{errors.countryCode.message}</p>
            )}
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-sm text-red-600">{submitError}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              t.form.submitButton
            )}
          </Button>

          <p className="text-xs text-center text-slate-600">{t.form.privacy}</p>
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">{t.form.confirmation.title}</DialogTitle>
            <DialogDescription className="text-center pt-2">
              {t.form.confirmation.message}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-3">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h4 className="font-semibold text-emerald-900 mb-2">{t.form.confirmation.nextSteps}</h4>
              <ul className="space-y-2 text-sm text-emerald-700">
                {t.form.confirmation.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => setShowConfirmationDialog(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              {t.form.confirmation.gotIt}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

