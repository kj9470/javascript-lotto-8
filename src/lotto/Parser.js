/**
 * @param {string} nameLine
 * @returns {number[]}
 */

export function parseNumbersInput(numbersLine) {
  const numbers = numbersLine.split(",").map((n) => Number(n.trim()));
  return numbers;
}
