"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";
import { getYourWebsiteTranslations } from "@/i18n/page-translations";

// Form validation schema - only name, email, and phone
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadFormClient() {
  const { language } = useLanguage();
  const t = getYourWebsiteTranslations[language];
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phoneNumber,
          message: 'Lead from Get Your Website landing page',
          source: 'get-your-website'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setShowConfirmationDialog(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit your information. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            <div className="flex-1 p-3 rounded-lg text-center font-semibold bg-blue-600 text-white">
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
              className="mt-1"
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
              className="mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-slate-700">
              {t.form.phoneNumber} <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              placeholder={`${t.form.phoneNumber}...`}
              className="mt-1"
            />
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
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
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">{t.form.confirmation.nextSteps}</h4>
              <ul className="space-y-2 text-sm text-blue-700">
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

