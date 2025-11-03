import { Console } from "@woowacourse/mission-utils";

/**
 * @param {Number} ticketCount
 * @param {Lotto[]} tickets
 */
export function printNumber(ticketCount, tickets) {
  Console.print(`${ticketCount}개를 구매했습니다.`);
  tickets.forEach((number) => {
    Console.print(`[${number.getNumbers().join(", ")}]`);
  });
}

export function printWinningStatistics(counter, rate) {
  Console.print("당첨 통계");
  Console.print("---");
  counter.forEach(([rank, count]) => {
    Console.print(`${rank.label} - ${count}개`);
  });
  Console.print(`총 수익률은 ${rate}%입니다.`);
}

export function printError(error) {
  Console.print(error.message);
}
