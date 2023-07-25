import { Metadata } from "next";

import "../styles/globals.css";

const metadata: Metadata = {
  title: "SPA Scroll",
  description: "An exercise in advanced CSS",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
