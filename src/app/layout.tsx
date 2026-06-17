import type { Metadata } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import { LenisProvider } from "@/components/LenisProvider";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { ResumeModal } from "@/components/ResumeModal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohamkulkarni.dev"),
  title: "Soham Kulkarni | Full-stack Engineer",
  description: "I'm Soham, a full-stack developer at Winjit Technologies. I build backend systems that don't fall apart — BullMQ pipelines, event-driven architectures, AI integrations.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Soham Kulkarni | Full-stack Engineer",
    description: "Exploring the intersection of software engineering, artificial intelligence, and the endless curiosity that fuels both.",
    url: "https://sohamkulkarni.dev",
    siteName: "Soham Kulkarni Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 565,
        alt: "Soham Kulkarni Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Kulkarni | Full-stack Engineer",
    description: "Exploring the intersection of software engineering, artificial intelligence, and the endless curiosity that fuels both.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>
            <LoadingScreen />
            <Navbar />
            <div className="relative min-h-screen pb-24 pt-16 z-20">
              {children}
            </div>
            <ResumeModal />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
