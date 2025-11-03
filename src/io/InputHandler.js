import { Console } from "@woowacourse/mission-utils";

export async function amountInput() {
  Console.print("구입금액을 입력해 주세요.");
  const amountLine = await Console.readLineAsync("");
  return amountLine;
}

export async function numbersInput() {
  Console.print("당첨 번호를 입력해 주세요.");
  const numbersLine = await Console.readLineAsync("");
  return numbersLine;
}
