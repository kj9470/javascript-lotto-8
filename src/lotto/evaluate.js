import { judgeRank, Rank } from "./rank.js";

export function evaluateAll(tickets, winning) {
  const counts = new Map([
    [Rank.THREE, 0],
    [Rank.FOUR, 0],
    [Rank.FIVE, 0],
    [Rank.FIVE_BONUS, 0],
    [Rank.SIX, 0],
  ]);

  let total = 0;
  tickets.forEach((t) => {
    const nums = t.getNumbers();
    const match = winning.countMatches(nums);
    const rank = judgeRank(match, winning.isBonusMatched(nums));
    if (rank !== Rank.MISS) {
      counts.set(rank, counts.get(rank) + 1);
      total += rank.prize;
    }
  });

  return { counts, totalPrize: total };
}
