import React, { Suspense } from 'react';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

const ResetPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-900">
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
};

export default ResetPasswordPage;
