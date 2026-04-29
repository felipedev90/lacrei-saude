import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Saúde inclusiva para a comunidade LGBTQIAPN+",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={nunito.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
