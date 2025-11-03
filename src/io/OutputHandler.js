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
