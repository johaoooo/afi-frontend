import React, { ReactNode, Suspense, lazy } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../services/api/queryClient';

interface ProvidersProps {
  children: ReactNode;
}

// Import dynamique des Devtools
const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-query-devtools').then((mod) => ({
      default: mod.ReactQueryDevtools,
    })))
  : null;

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {ReactQueryDevtools && (
        <Suspense fallback={null}>
          <ReactQueryDevtools initialIsOpen={false} />
        </Suspense>
      )}
    </QueryClientProvider>
  );
}
