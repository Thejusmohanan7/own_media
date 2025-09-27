import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav';
import Footer from '@/components/footer';
import { ScrollToTop } from '@/components/scrollup';
import ChatBot from '@/components/ChatBot'; // Import the chatbot component

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Own Media - Premium Photography & Videography Services',
  description: 'Capturing timeless moments through professional photography and videography services. Specializing in weddings, events, and portrait photography.',
  keywords: 'photography, videography, wedding photography, event photography, portraits, Own Media',
  authors: [{ name: 'Own Media Team' }],
  creator: 'Own Media',
  publisher: 'Own Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.ownmedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Own Media - Premium Photography & Videography Services',
    description: 'Capturing timeless moments through professional photography and videography services.',
    url: 'https://www.ownmedia.com',
    siteName: 'Own Media',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Own Media - Professional Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Own Media - Premium Photography & Videography Services',
    description: 'Capturing timeless moments through professional photography and videography services.',
    images: ['/twitter-image.jpg'],
    creator: '@ownmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'photography services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link
          rel="icon"
          href="/logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/logo.png"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="theme-color" content="#C1A35F" />
      </head>
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F3EF' }}>
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <ChatBot /> {/* Add the chatbot component here */}
      </body>
    </html>
  );
}