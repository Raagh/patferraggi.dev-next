import React from 'react';
import Navbar from '../components/shared/navbar';
import { Inter } from 'next/font/google';
// import localFont from 'next/font/local';

const interRegular = Inter({ subsets: ['latin'], weight: "400", variable:"--font-family-regular" })
const interMedium = Inter({ subsets: ['latin'], weight: "500", variable:"--font-family-medium" })
// const interRegular = localFont({
//   src: './Inter-Regular.otf',
//   display: 'swap',
//   variable: '--font-family-regular',
// });
//
// const interMedium = localFont({
//   src: './Inter-Medium.otf',
//   display: 'swap',
//   variable: '--font-family-medium',
//   weight: '500',
// });

export default function Layout({ children, removeSidePadding }: { children: any[]; removeSidePadding?: boolean }) {
  return (
    <div className={`${interRegular.variable} ${interMedium.variable} mainContainer`}>
      <Navbar />
      <div className={removeSidePadding ? 'internalContainerWithoutSidePadding' : 'internalContainer'}>{children}</div>
    </div>
  );
}
