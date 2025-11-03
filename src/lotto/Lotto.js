import { validationLottoNumbers } from "./Validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validationLottoNumbers(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
