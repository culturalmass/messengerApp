import type { Metadata } from "next";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import ActiveStatus from "./components/ActiveStatus";

const chakra_Petch = Chakra_Petch({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "MessengerApp",
  description: "MessengerApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chakra_Petch.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
