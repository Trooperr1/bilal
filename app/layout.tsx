import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaff Studio - Ultra Modern Creative Studio",
  description: "Award-winning creative studio specializing in cutting-edge design, 3D experiences, and innovative digital solutions.",
  keywords: ["creative studio", "3D design", "web design", "branding", "digital agency"],
  authors: [{ name: "Jaff Studio" }],
  openGraph: {
    title: "Jaff Studio - Ultra Modern Creative Studio",
    description: "Award-winning creative studio specializing in cutting-edge design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <div className="grain" />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
