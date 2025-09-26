import type { Metadata } from "next";
    import "./globals.css";
    import ThemeToggle from "@/components/ThemeToggle";

    export const metadata: Metadata = {
      title: "Parco Auto",
      description: "Gestione parco auto da corsa",
    };

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="it" suppressHydrationWarning>
          <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <header className="p-4 border-b flex justify-between">
              <h1 className="text-xl font-bold">Parco Auto</h1>
              <ThemeToggle />
            </header>
            <main className="p-4">{children}</main>
          </body>
        </html>
      );
    }
  