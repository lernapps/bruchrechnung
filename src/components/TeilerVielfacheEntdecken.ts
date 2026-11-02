export function grouping(amount: number, size: number): { groups: number; rest: number } {
  return { groups: Math.floor(amount / size), rest: amount % size };
}
export function fitsPartition(original: number, parts: number): boolean {
  return parts >= original && parts % original === 0;
}
