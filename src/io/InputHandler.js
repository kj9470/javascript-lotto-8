import { Console } from "@woowacourse/mission-utils";

export async function amountInput() {
  Console.print("구입금액을 입력해 주세요.");
  const amountLine = await Console.readLineAsync("");
  return amountLine;
}
