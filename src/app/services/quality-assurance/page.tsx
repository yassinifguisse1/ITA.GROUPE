import { Suspense } from "react"
import QualityAssurancePageClient from "./QualityAssurancePageClient"
import Image from "next/image"




export default function QualityAssurancePage() {



  return (
  
    <>
      <Suspense fallback={
        <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-600 flex flex-col items-center">
            {/* iTA Groupe Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
              alt="iTA Groupe Logo"
              width={100}
              height={100}
              priority
            />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <QualityAssurancePageClient />
      </Suspense>
    </>
  );
}