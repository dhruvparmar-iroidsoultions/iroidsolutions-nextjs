// import { Open_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/bootstrapClient";
import Header from "@/components/header";
import Footer from "@/components/footer";

// const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Iroid Solutions",
  description: "Iroid Solutions Best Software Solution Company",
  keyword:
    "Software Company,IT Company,India IT Company, Bharat IT Company,Gujarat IT Comany,Surat IT Company,Best Company,Quality Work Company,Best Company in Whole Market,Cheap Price,Quality Work,smart work, before time work,big team,supporters,team worker,Cheap Price and Quality Work,Career Opportunity for Developers,MongoDB,ExpressJS,ReactJS,NodeJS,Laravel,iOS,Flutter,Android,Web Developer,App Development,Software Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <body className={openSans.className}> */}
      <body>
        <Header />
        {children}
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
