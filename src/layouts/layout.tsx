import React from 'react';
import Navbar from '../components/shared/navbar';
import { Inter } from 'next/font/google';

const interRegular = Inter({ subsets: ['latin'], weight: "400", variable:"--font-family-regular" })
const interMedium = Inter({ subsets: ['latin'], weight: "500", variable:"--font-family-medium" })

export default function Layout({ children }: { children: any[] }) {
  return (
    <div className={`${interRegular.variable} ${interMedium.variable} mainContainer`}>
      <Navbar />
      <div className="internalContainer">{children}</div>
    </div>
  );
}
