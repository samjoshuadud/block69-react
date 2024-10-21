import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpButton from "./components/up-button";

export const metadata = {
  title: "Block 69",
  description: "Block 69 Cafe",
  icons: {
    icon: '/images/icons/newlogo-light.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* This creates a column layout due to flex-col specification and will stay at the bottom of the viewport due to min-h-screen (equivalent to 100vh) */}
      <body className="flex flex-col min-h-screen ">
        {/* This will fill up available space on the flex conteiner, pushing the footer down to the viewport when the content is short and it will push it to the bottom if it expands*/}
        <main className="flex-grow">    
          <Header />
          {children}
          
        </main>
        <Footer />
        <UpButton />
      </body>
    </html>
  );
}
