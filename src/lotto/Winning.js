export default class Winning {
  #numbers;
  #bonus;

  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.#bonus = bonus;
  }

  countMatches(ticketNumbers) {
    return ticketNumbers.filter((n) => this.#numbers.includes(n)).length;
  }

  isBonusMatched(ticketNumbers) {
    return ticketNumbers.includes(this.#bonus);
  }
}
