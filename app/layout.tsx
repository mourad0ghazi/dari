import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARENA — Personal Performance OS",
  description: "Your daily arena for meaningful progress.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
