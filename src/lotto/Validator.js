/**
 * @param {string} amountLine
 * @returns {Number}
 */
export function validationAmount(amountLine) {
  const amount = Number(amountLine);
  if (!Number.isInteger(amount) || amount < 0 || amount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.");
  }
  return amount;
}

/**
 * @param {number[]} numbers
 * @returns {Error}
 */
export function validationLottoNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error("[ERROR] 로또 번호는 배열이어야 합니다.");
  }

  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }

  const unique = new Set(numbers);
  if (unique.size !== 6) {
    throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
  }

  numbers.forEach((num) => {
    if (!Number.isInteger(num) || num < 1 || num > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  });
}
