import {
  amountInput,
  numbersInput,
  bonusNumberInput,
} from "./io/InputHandler.js";
import {
  printError,
  printNumber,
  printWinningStatistics,
} from "./io/OutputHandler.js";
import {
  validationAmount,
  validationBonusNumber,
  validationLottoNumbers,
} from "./lotto/Validator.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { parseNumbersInput } from "./lotto/Parser.js";
import { evaluateAll } from "./lotto/Evaluate.js";
import Winning from "./lotto/Winning.js";
import { profitRate } from "./lotto/Profit.js";

const PRICE_PER_TICKET = 1000;

class App {
  async run() {
    try {
      const amount = await this.#readAmount();
      const tickets = this.#issueTickets(amount);
      printNumber(tickets.length, tickets);

      const winning = await this.#readWinning();
      const result = evaluateAll(tickets, winning);
      const rate = profitRate(result.totalPrize, amount);
      this.#printStats(result.counts, rate);
    } catch (error) {
      printError(error);
    }
  }

  async #readAmount() {
    const amountLine = await amountInput();
    const amount = validationAmount(amountLine);
    return amount;
  }

  async #readWinning() {
    const winningLine = await numbersInput();
    const winningNumbers = parseNumbersInput(winningLine);
    validationLottoNumbers(winningNumbers);

    const bonusLine = await bonusNumberInput();
    const bonusNumber = validationBonusNumber(bonusLine, winningNumbers);

    return new Winning(winningNumbers, bonusNumber);
  }

  #issueTickets(money) {
    const count = money / PRICE_PER_TICKET;
    const make = () => {
      const nums = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      return new Lotto(nums);
    };
    return Array.from({ length: count }, make);
  }

  #printStats(counts, rate) {
    const counter = Array.from(counts.entries()).filter(([rank]) => rank.label);
    printWinningStatistics(counter, rate);
  }
}

export default App;
