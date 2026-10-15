import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
export const metadata: Metadata = { title: { default: 'Dangi Solar Solutions | Rooftop Solar in Panipat', template: '%s | Dangi Solar Solutions' }, description: 'Explore rooftop solar, residential and commercial solar systems, solar pumps and street lighting with Dangi Solar Solutions in Israna, Panipat, Haryana.', metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'), openGraph: { type: 'website', title: 'Dangi Solar Solutions', description: 'Thoughtful solar solutions for homes, businesses and agricultural applications.' }, robots: { index: true, follow: true } };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Header/><main>{children}</main><Footer/><WhatsAppFloat/></body></html> }
