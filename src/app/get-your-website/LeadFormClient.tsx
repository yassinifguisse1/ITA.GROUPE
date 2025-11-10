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

// Form validation schema - only name, email, and phone
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadFormClient() {
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
              1 START ORDER<br />Name & Email
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-4">* Denotes mandatory fields</p>

          <div>
            <Label htmlFor="fullName" className="text-slate-700">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              {...register('fullName')}
              placeholder="Full Name..."
              className="mt-1"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-slate-700">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="Email Address..."
              className="mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-slate-700">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phoneNumber"
              {...register('phoneNumber')}
              placeholder="Phone Number..."
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
              '→ Choose Your Store Ready For Sales By Tomorrow!'
            )}
          </Button>

          <p className="text-xs text-center text-slate-600">We Respect Your Privacy & Information</p>
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">Thank You!</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Thank you for your interest! We'll review your information and contact you soon to discuss your store requirements.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-3">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>We'll review your information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Contact you to discuss your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Prepare a custom proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Get your store ready for sales</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => setShowConfirmationDialog(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

