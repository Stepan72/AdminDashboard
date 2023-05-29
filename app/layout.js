import "./styles/globals.css";

export const metadata = {
  title: "Admin Dashboard",
  description: "Website where you can control everything!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
