import { amountInput } from "./io/inputHandler.js";
import { validationAmount } from "./lotto/Validator.js";

class App {
  async run() {
    const amountLine = amountInput();
    const amount = validationAmount(amountLine);
    const ticketCount = amount / 1000;
  }
}

export default App;
