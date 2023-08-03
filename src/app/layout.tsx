import { Metadata } from "next";
import Nav from "~/components/Nav";

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
    <html lang="en" className="min-h-screen w-screen scroll-smooth">
      <body className="h-full w-full bg-aktiga-gradient bg-fixed">
        {children}
        <Nav />
      </body>
    </html>
  );
}
