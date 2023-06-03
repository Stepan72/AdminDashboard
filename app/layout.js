import ContextProvider from "@context/ContextProvider";
import "./styles/globals.css";
import NavSideBarWrapper from "@components/NavSidebarWrapper";

export const metadata = {
  title: "Admin Dashboard",
  description: "Website where you can control everything!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        <ContextProvider>
          <NavSideBarWrapper>{children}</NavSideBarWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
