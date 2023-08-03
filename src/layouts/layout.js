import React from 'react';
import Navbar from '../components/shared/navbar';

import { Inter } from 'next/font/google';

const interRegular = Inter({ subsets: ['latin'], weight: "400", variable:"--inter-regular", display: "swap" })
const interMedium = Inter({ subsets: ['latin'], weight: "500", variable:"--inter-medium" , display: "swap"})

export default function Layout({ children }) {
  return (
    <div className={`${interRegular.className} ${interMedium.className} mainContainer`}>
      <Navbar />
      <div className="internalContainer">{children}</div>
    </div>
  );
}
