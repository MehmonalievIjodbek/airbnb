import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
          {/* <Modal actionLabel="Submit" title="Hello World" isOpen /> */}
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
