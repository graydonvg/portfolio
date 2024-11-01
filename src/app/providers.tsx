import { EarthLoadingProvider } from "@/context/earth-loading-context";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  return <EarthLoadingProvider>{children}</EarthLoadingProvider>;
}
