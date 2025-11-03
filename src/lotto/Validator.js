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
