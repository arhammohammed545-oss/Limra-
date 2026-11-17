import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Limra — Find a place that feels like yours",
  description: "Exceptional homes. Thoughtful guidance. A more considered way to find your place.",
  applicationName: "Limra"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
