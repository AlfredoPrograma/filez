import '~/styles/globals.css';

import { GeistSans } from 'geist/font/sans';
import { Providers } from '~/components/providers';

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
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
