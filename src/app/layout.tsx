import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Initialize query client for `React Query`
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable}`}
    >
      <QueryClientProvider client={queryClient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
