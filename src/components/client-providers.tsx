import type { ReactNode } from "react";
import { LanguageProvider } from "@/context/language-context";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
