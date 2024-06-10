import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './_components/theme-provider';
import { cn } from '@/lib/utils';


export const metadata: Metadata = {
  title: "CodeBit",
  description: "Free Open Sources for Developers",
  keywords: [
    "OpenSource", 
    "Open Source Code", 
    "Software Development", 
    "OpenSource Projects", 
    "Developer Community", 
    "Developer Resources", 
    "Code Collaboration", 
    "Code Repository", 
    "Free Programming", 
    "Code Library", 
    "Programming Tutorials", 
    "Collaborative Development", 
    "Free Open Source", 
    "Application Development", 
    "Technological Innovation"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased'
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
