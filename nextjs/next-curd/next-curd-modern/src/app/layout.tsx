import "./globals.css";
import StoreProvider from "@/redux/storeProvider";
import Wrapper from "@/components/Wrapper";

export const metadata = {
  title: "Next CRUD (App Router + MUI)",
  description: "A modern Next.js CRUD with MUI, Redux Toolkit and json-server",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Wrapper>{children}</Wrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
