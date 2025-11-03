/**
 * @param {string} nameLine
 * @returns {number[]}
 */

export function parseNumbersInput(numbersLine) {
  return numbersLine
    .split(",")
    .map((n) => n.trim())
    .filter((n) => n !== "")
    .map((n) => Number(n))
    .filter((n) => !Number.isNaN(n));
}
