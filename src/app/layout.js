import"bootstrap/dist/css/bootstrap.css";
import"./custom.scss";

import { Inter, Poppins } from"next/font/google";
import"./globals.css";
import Navbar from"@/components/Navbar";
import ClientSIdeBootstrap from"@/components/ClientSIdeBootstrap";

import Footer from"@/components/Footer";

import ScrollToTopComponent from"@/components/ScrollToTopComponent";

const poppins = Poppins({
  weight: ["300","400","500","600","700"], // Specify the weights you want to use
  subsets: ["latin"],
});

export const metadata = {
  title:"Task 1",
  description:"",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <ClientSIdeBootstrap />
        <Navbar />
        {children}
        <div className="d-none d-md-block">
          <ScrollToTopComponent />
        </div>
        <Footer />
      </body>
    </html>
  );
}
