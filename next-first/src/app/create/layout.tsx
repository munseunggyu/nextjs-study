import { AppProps } from "next/app";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <h2>
      CreateLayout
      {children}
    </h2>
  )
}
