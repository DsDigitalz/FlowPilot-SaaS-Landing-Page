export function cn(...classes: (string | undefined | null | false | Record<string, boolean>)[]): string {
  const out: string[] = [];
  for (const c of classes) {
    if (!c) continue;
    if (typeof c === "string") out.push(c);
    else if (typeof c === "object") {
      for (const [k, v] of Object.entries(c)) {
        if (v) out.push(k);
      }
    }
  }
  return out.join(" ");
}
