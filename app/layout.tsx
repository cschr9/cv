import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Sidebar from "../components/sidebar";
import ClientSection from "@/components/sections/client-section";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <div
          className="flex flex-col space-y-8 items-center justify-center p-4 md:p-24 w-full
    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-100 to-slate-500  dark:from-slate-950 dark:to-slate-800 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] overflow-x-hidden"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col w-full rounded-xl justify-start lg:max-w-7xl px-8 py-8 md:py-24 shadow-xl bg-white bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 dark:bg-black  dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-2xl dark:bg-opacity-40">
              <div className="flex w-full justify-between mb-4">
                <Image
                  src="/image/cs-logo.svg"
                  width={64}
                  height={64}
                  alt="Christian Schröder"
                  className="dark:invert"
                />
                <ModeToggle />
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
                <Sidebar className="grid grid-cols-1 md:grid-cols-2 w-full lg:flex lg:w-1/4 flex-row  lg:flex-col space-y-8" />
                <main className="lg:w-3/4 ">{children}</main>
              </div>
            </div>
            <ClientSection />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
