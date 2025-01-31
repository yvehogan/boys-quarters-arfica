"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function VolunteerRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('path') === '/volunteer') {
      router.replace('https://docs.google.com/forms/d/e/1FAIpQLSdK_W2b5zHQauGG4FV6ZcT0vP57EgjvzGAEJZ0l3PCRQA6aTg/viewform');
    }
  }, [router, searchParams]);

  return null;
}