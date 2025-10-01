import { extractHotPepperData } from "./hotpepper";
import { extractTabelogData } from "./tabelog";
import { extractGurunaviData } from "./gurunavi";
import { ExtractedData } from "./hotpepper";

export function getDomainAdapter(domain: string): ((html: string) => ExtractedData) | null {
  if (domain.includes("hotpepper.jp")) return extractHotPepperData;
  if (domain.includes("tabelog.com")) return extractTabelogData;
  if (domain.includes("gurunavi.com")) return extractGurunaviData;
  return null;
}

export type { ExtractedData };
