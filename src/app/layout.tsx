import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.scss";
import {Toaster} from 'sonner'

const inter =  Inter ({subsets:["latin"]})


export const metadata: Metadata = {
  title: "Cibus GO",
  description: "O melhor restaurante da região",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>

          <Toaster 
          position="top-center"
          toastOptions={
            {
              style:{
                backgroundColor: '#f1f1f1',
                color: '#131313',
                borderColor: 'rgba(255,255,255,0.5)',
              }
            }
          }
          />
   
        {children}
      </body>
    </html>
  );
}
