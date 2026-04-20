import type { ReactNode } from "react";

import { NodaIYauComingSoon } from "./coming-soon";
import { isNodaIYauLive } from "./config";

export default function NodaIYauLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!isNodaIYauLive) {
    return <NodaIYauComingSoon />;
  }

  return children;
}
