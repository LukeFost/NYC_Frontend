import NavBar from "../components/NavBar";
import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "NYC Uniswap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base-200">
        <Providers>
          <div className="flex flex-col h-screen">
            <div className="flex">
              <NavBar />
            </div>
            <div className="flex flex-1">{children}</div>
            <div className="flex"></div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
