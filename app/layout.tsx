import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stella Match',
  description: 'AI-powered skill exchange for engineering students',
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
