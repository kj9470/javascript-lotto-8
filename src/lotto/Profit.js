export function profitRate(totalPrize, paid) {
  if (paid <= 0) return 0;
  const rate = (totalPrize / paid) * 100;
  return Math.round(rate * 10) / 10;
}
