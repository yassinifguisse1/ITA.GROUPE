"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, Loader2, AlertCircle, Search, Clock, FileText, Phone, Rocket } from 'lucide-react';

// Country codes data
const countryCodes = [
  { code: '+1', country: 'US/Canada', flag: '🇺🇸' },
  { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
  { code: '+33', country: 'France', flag: '🇫🇷' },
  { code: '+49', country: 'Germany', flag: '🇩🇪' },
  { code: '+39', country: 'Italy', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', flag: '🇪🇸' },
  { code: '+48', country: 'Poland', flag: '🇵🇱' },
  { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
  { code: '+32', country: 'Belgium', flag: '🇧🇪' },
  { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
  { code: '+43', country: 'Austria', flag: '🇦🇹' },
  { code: '+46', country: 'Sweden', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', flag: '🇳🇴' },
  { code: '+45', country: 'Denmark', flag: '🇩🇰' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+7', country: 'Russia', flag: '🇷🇺' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+82', country: 'South Korea', flag: '🇰🇷' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
  { code: '+55', country: 'Brazil', flag: '🇧🇷' },
  { code: '+52', country: 'Mexico', flag: '🇲🇽' },
  { code: '+54', country: 'Argentina', flag: '🇦🇷' },
  { code: '+56', country: 'Chile', flag: '🇨🇱' },
  { code: '+57', country: 'Colombia', flag: '🇨🇴' },
  { code: '+51', country: 'Peru', flag: '🇵🇪' },
  { code: '+27', country: 'South Africa', flag: '🇿🇦' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+66', country: 'Thailand', flag: '🇹🇭' },
  { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
  { code: '+63', country: 'Philippines', flag: '🇵🇭' },
  { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
  { code: '+212', country: 'Morocco', flag: '🇲🇦' },
  { code: '+213', country: 'Algeria', flag: '🇩🇿' },
  { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
  { code: '+218', country: 'Libya', flag: '🇱🇾' },
  { code: '+249', country: 'Sudan', flag: '🇸🇩' },
  { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
  { code: '+221', country: 'Senegal', flag: '🇸🇳' },
  { code: '+223', country: 'Mali', flag: '🇲🇱' },
  { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+227', country: 'Niger', flag: '🇳🇪' },
  { code: '+228', country: 'Togo', flag: '🇹🇬' },
  { code: '+229', country: 'Benin', flag: '🇧🇯' },
  { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
  { code: '+231', country: 'Liberia', flag: '🇱🇷' },
  { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
  { code: '+235', country: 'Chad', flag: '🇹🇩' },
  { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
  { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
  { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
  { code: '+239', country: 'São Tomé and Príncipe', flag: '🇸🇹' },
  { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: '+241', country: 'Gabon', flag: '🇬🇦' },
  { code: '+242', country: 'Republic of the Congo', flag: '🇨🇬' },
  { code: '+243', country: 'Democratic Republic of the Congo', flag: '🇨🇩' },
  { code: '+244', country: 'Angola', flag: '🇦🇴' },
  { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
  { code: '+246', country: 'British Indian Ocean Territory', flag: '🇮🇴' },
  { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
  { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
  { code: '+252', country: 'Somalia', flag: '🇸🇴' },
  { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+257', country: 'Burundi', flag: '🇧🇮' },
  { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
  { code: '+260', country: 'Zambia', flag: '🇿🇲' },
  { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
  { code: '+262', country: 'Réunion', flag: '🇷🇪' },
  { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+264', country: 'Namibia', flag: '🇳🇦' },
  { code: '+265', country: 'Malawi', flag: '🇲🇼' },
  { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
  { code: '+267', country: 'Botswana', flag: '🇧🇼' },
  { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
  { code: '+269', country: 'Comoros', flag: '🇰🇲' },
  { code: '+290', country: 'Saint Helena', flag: '🇸🇭' },
  { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
  { code: '+297', country: 'Aruba', flag: '🇦🇼' },
  { code: '+298', country: 'Faroe Islands', flag: '🇫🇴' },
  { code: '+299', country: 'Greenland', flag: '🇬🇱' },
  { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
  { code: '+351', country: 'Portugal', flag: '🇵🇹' },
  { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
  { code: '+353', country: 'Ireland', flag: '🇮🇪' },
  { code: '+354', country: 'Iceland', flag: '🇮🇸' },
  { code: '+355', country: 'Albania', flag: '🇦🇱' },
  { code: '+356', country: 'Malta', flag: '🇲🇹' },
  { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
  { code: '+358', country: 'Finland', flag: '🇫🇮' },
  { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
  { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
  { code: '+371', country: 'Latvia', flag: '🇱🇻' },
  { code: '+372', country: 'Estonia', flag: '🇪🇪' },
  { code: '+373', country: 'Moldova', flag: '🇲🇩' },
  { code: '+374', country: 'Armenia', flag: '🇦🇲' },
  { code: '+375', country: 'Belarus', flag: '🇧🇾' },
  { code: '+376', country: 'Andorra', flag: '🇦🇩' },
  { code: '+377', country: 'Monaco', flag: '🇲🇨' },
  { code: '+378', country: 'San Marino', flag: '🇸🇲' },
  { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
  { code: '+381', country: 'Serbia', flag: '🇷🇸' },
  { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
  { code: '+383', country: 'Kosovo', flag: '🇽🇰' },
  { code: '+385', country: 'Croatia', flag: '🇭🇷' },
  { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
  { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+389', country: 'North Macedonia', flag: '🇲🇰' },
  { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
  { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
  { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+500', country: 'Falkland Islands', flag: '🇫🇰' },
  { code: '+501', country: 'Belize', flag: '🇧🇿' },
  { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
  { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
  { code: '+504', country: 'Honduras', flag: '🇭🇳' },
  { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
  { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
  { code: '+507', country: 'Panama', flag: '🇵🇦' },
  { code: '+508', country: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
  { code: '+509', country: 'Haiti', flag: '🇭🇹' },
  { code: '+590', country: 'Guadeloupe', flag: '🇬🇵' },
  { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
  { code: '+592', country: 'Guyana', flag: '🇬🇾' },
  { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
  { code: '+594', country: 'French Guiana', flag: '🇬🇫' },
  { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
  { code: '+596', country: 'Martinique', flag: '🇲🇶' },
  { code: '+597', country: 'Suriname', flag: '🇸🇷' },
  { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
  { code: '+599', country: 'Netherlands Antilles', flag: '🇳🇱' },
  { code: '+670', country: 'East Timor', flag: '🇹🇱' },
  { code: '+672', country: 'Antarctica', flag: '🇦🇶' },
  { code: '+673', country: 'Brunei', flag: '🇧🇳' },
  { code: '+674', country: 'Nauru', flag: '🇳🇷' },
  { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+676', country: 'Tonga', flag: '🇹🇴' },
  { code: '+677', country: 'Solomon Islands', flag: '🇸🇧' },
  { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
  { code: '+679', country: 'Fiji', flag: '🇫🇯' },
  { code: '+680', country: 'Palau', flag: '🇵🇼' },
  { code: '+681', country: 'Wallis and Futuna', flag: '🇼🇫' },
  { code: '+682', country: 'Cook Islands', flag: '🇨🇰' },
  { code: '+683', country: 'Niue', flag: '🇳🇺' },
  { code: '+684', country: 'American Samoa', flag: '🇦🇸' },
  { code: '+685', country: 'Samoa', flag: '🇼🇸' },
  { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
  { code: '+687', country: 'New Caledonia', flag: '🇳🇨' },
  { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
  { code: '+689', country: 'French Polynesia', flag: '🇵🇫' },
  { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
  { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
  { code: '+692', country: 'Marshall Islands', flag: '🇲🇭' },
  { code: '+850', country: 'North Korea', flag: '🇰🇵' },
  { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
  { code: '+853', country: 'Macau', flag: '🇲🇴' },
  { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
  { code: '+856', country: 'Laos', flag: '🇱🇦' },
  { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
  { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
  { code: '+960', country: 'Maldives', flag: '🇲🇻' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+963', country: 'Syria', flag: '🇸🇾' },
  { code: '+964', country: 'Iraq', flag: '🇮🇶' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+967', country: 'Yemen', flag: '🇾🇪' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+970', country: 'Palestine', flag: '🇵🇸' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+972', country: 'Israel', flag: '🇮🇱' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
  { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
  { code: '+977', country: 'Nepal', flag: '🇳🇵' },
  { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
  { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+995', country: 'Georgia', flag: '🇬🇪' },
  { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' }
];

// Zod validation schema
const leadFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  countryCode: z.string()
    .min(1, 'Please select a country code'),
  phoneNumber: z.string()
    .min(5, 'Phone number must be at least 5 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9\s\-\(\)]+$/, 'Please enter a valid phone number'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

type LeadFormData = z.infer<typeof leadFormSchema>;

export default function LeadFormClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountrySelectOpen, setIsCountrySelectOpen] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    setValue,
    watch
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
    fullName: '',
    email: '',
      countryCode: '+1',
      phoneNumber: '',
      message: ''
    }
  });

  // Filter countries based on search
  const filteredCountries = countryCodes.filter(country => 
    country.country.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch) ||
    country.flag.includes(countrySearch)
  );

  const onSubmit = async (data: LeadFormData) => {
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
          phone: `${data.countryCode} ${data.phoneNumber}`,
          message: data.message,
          source: 'Landing Page - Facebook Ads'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const result = await response.json();
      
      if (result.success) {
        setShowConfirmationDialog(true);
        reset();
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again or contact us directly.'
      );
    }
  };


  return (
    <Card className="p-4 sm:p-6 lg:p-8 shadow-2xl">
      <CardHeader className="px-0 pb-4 sm:pb-6">
        <CardTitle className="text-xl sm:text-2xl text-center text-slate-900 mb-2">
          Request Your Quote
        </CardTitle>
        <p className="text-sm sm:text-base text-center text-slate-600">
          Fill out the form below and we'll contact you with a custom proposal
        </p>
      </CardHeader>
      <CardContent className="px-0">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="fullName" className="text-sm font-medium text-slate-700 block mb-2">
                Full Name *
              </Label>
              <Input
                id="fullName"
                type="text"
                {...register('fullName')}
                className={`h-12 text-base ${errors.fullName ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <div className="flex items-center gap-1 mt-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                </div>
              )}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-700 block mb-2">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={`h-12 text-base ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <div className="flex items-center gap-1 mt-2">
                  <AlertCircle className="w-4 h-4 text-red-500" />
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-slate-700 block mb-2">
              Phone Number *
            </Label>
            <div className="flex gap-2 sm:gap-3">
              <Select
                value={watch('countryCode')}
                open={isCountrySelectOpen}
                onOpenChange={(open) => {
                  setIsCountrySelectOpen(open);
                  if (!open) {
                    setCountrySearch(''); // Clear search when closing
                  }
                }}
                onValueChange={(value) => {
                  setValue('countryCode', value);
                  setCountrySearch(''); // Clear search when selection is made
                  setIsCountrySelectOpen(false); // Close the select
                }}
              >
                <SelectTrigger className="w-24 sm:w-32 h-12 text-sm">
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
                          // Keep the select open while typing
                          if (!isCountrySelectOpen) {
                            setIsCountrySelectOpen(true);
                          }
                        }}
                        className="pl-8 h-8 text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation();
                        }}
                        onKeyDown={(e) => {
                          e.stopPropagation();
                          // Prevent select from closing on Escape
                          if (e.key === 'Escape') {
                            e.preventDefault();
                            setCountrySearch('');
                          }
                        }}
                        onFocus={() => {
                          // Ensure select stays open when input is focused
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
              type="tel"
                {...register('phoneNumber')}
                className={`flex-1 h-12 text-base ${errors.phoneNumber ? 'border-red-500 focus:border-red-500' : ''}`}
                placeholder="Phone number"
              />
            </div>
            {errors.countryCode && (
              <div className="flex items-center gap-1 mt-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm">{errors.countryCode.message}</p>
              </div>
            )}
            {errors.phoneNumber && (
              <div className="flex items-center gap-1 mt-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
              </div>
            )}
          </div>
          
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-slate-700 block mb-2">
              Tell us about your project *
            </Label>
            <Textarea
              id="message"
              {...register('message')}
              rows={4}
              className={`text-base resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
              placeholder="Describe your website needs, business type, and any specific requirements..."
            />
            {errors.message && (
              <div className="flex items-center gap-1 mt-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              </div>
            )}
          </div>
          
          
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-red-800 text-sm">{submitError}</p>
              </div>
            </div>
          )}
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg font-semibold disabled:opacity-50 h-14"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              'Get My Free Quote'
            )}
          </Button>
          
          <p className="text-center text-sm text-slate-500 mt-4">
            We'll respond within 24 hours with a detailed proposal
          </p>
        </form>
      </CardContent>
      
      {/* Confirmation Dialog */}
      <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Thank You!</span>
            </DialogTitle>
            <DialogDescription className="text-center text-slate-600 mb-6">
              We've received your request and will contact you within 24 hours with a detailed proposal for your website project.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
              <h4 className="text-emerald-800 font-semibold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                What happens next?
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Review Your Requirements</p>
                    <p className="text-sm text-emerald-700">We'll carefully analyze your project needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Prepare Custom Proposal</p>
                    <p className="text-sm text-emerald-700">Detailed plan tailored to your business</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Schedule Free Consultation</p>
                    <p className="text-sm text-emerald-700">Discuss your project in detail</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-800">Start Building Your Website</p>
                    <p className="text-sm text-emerald-700">Transform your vision into reality</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowConfirmationDialog(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
              >
                Got it!
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
