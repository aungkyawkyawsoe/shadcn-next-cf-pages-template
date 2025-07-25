import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Noto_Sans_Myanmar } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const notoSansMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-sans-myanmar",
  subsets: ["myanmar"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShanCN Next CF Pages",
  description: "ShanCN Next CF Pages",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} ${notoSansMyanmar.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
