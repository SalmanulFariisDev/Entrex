'use client'; 

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

interface Props {
  children: React.ReactNode;
}

export default function withAuth(Component: React.FC) {
  return function ProtectedComponent(props: any) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('user');
      if (!token) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
}
