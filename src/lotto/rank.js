export const Rank = Object.freeze({
  SIX: { prize: 2000000000, label: "6개 일치 (2,000,000,000원)" },
  FIVE_BONUS: {
    prize: 30000000,
    label: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  },
  FIVE: { prize: 1500000, label: "5개 일치 (1,500,000원)" },
  FOUR: { prize: 50000, label: "4개 일치 (50,000원)" },
  THREE: { prize: 5000, label: "3개 일치 (5,000원)" },
  MISS: { prize: 0, label: "" },
});

export function judgeRank(matchCount, bonusMatched) {
  if (matchCount === 6) return Rank.SIX;
  if (matchCount === 5 && bonusMatched) return Rank.FIVE_BONUS;
  if (matchCount === 5) return Rank.FIVE;
  if (matchCount === 4) return Rank.FOUR;
  if (matchCount === 3) return Rank.THREE;
  return Rank.MISS;
}
