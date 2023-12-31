import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { contentFont } from "@/lib/fonts";
import Transition from "@/components/transition";
import { LayoutTransition } from "@/components/animations/LayoutTransition";


export const metadata = {
  title: "Ricardo | Personal Portfolio",
  description: "Ricardo is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${contentFont.className} home-bg primary-text-color relative dark:bg-gray-900 !overflow-x-hidden`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <LayoutTransition>
              <div className="pt-24">
                {children}
              </div>
            </LayoutTransition>
            {/* <Footer /> */}
            {/* <Toaster position="top-right" /> */}
            {/* <ThemeSwitch /> */}
            <Transition />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
