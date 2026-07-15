import "./globals.css";

export const metadata = {
  title: "SAFARI AI V2",
  description: "Created by ICEBACK MASTER TECH",
};

export default function RootLayout({
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
