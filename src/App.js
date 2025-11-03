import {
  amountInput,
  numbersInput,
  bonusNumberInput,
} from "./io/inputHandler.js";
import { printError, printNumber } from "./io/outputHandler.js";
import {
  validationAmount,
  validationBonusNumber,
  validationLottoNumbers,
} from "./lotto/Validator.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./lotto/Lotto.js";
import { parseNumbersInput } from "./lotto/Parser.js";
import { evaluateAll } from "./lotto/Evaluate.js";
import Winning from "./lotto/Winning.js";

class App {
  async run() {
    try {
      const amountLine = await amountInput();
      const amount = validationAmount(amountLine);
      const tickets = this.#issueTickets(amount);
      printNumber(tickets.length, tickets);
      const winningLine = await numbersInput();
      const winningNumbers = parseNumbersInput(winningLine);
      validationLottoNumbers(winningNumbers);
      const bonusLine = await bonusNumberInput();
      const bonusNumber = validationBonusNumber(bonusLine, winningNumbers);
      const winning = new Winning(winningNumbers, bonusNumber);
      const result = evaluateAll(tickets, winning);
    } catch (error) {
      printError(error);
    }
  }

  #issueTickets(money) {
    const count = money / 1000;
    const make = () => {
      const nums = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      return new Lotto(nums);
    };
    return Array.from({ length: count }, make);
  }
}

export default App;
