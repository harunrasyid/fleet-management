/**
 * Checks if the provided value is an empty array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array with length 0, otherwise false.
 */
export const isEmptyList = (value: unknown) => {
  return Array.isArray(value) && value.length === 0;
};

/**
 * Checks if the provided value is an empty string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string with length 0, otherwise false.
 */
export const isEmptyString = (value: unknown): boolean => {
  return typeof value === "string" && value.length === 0;
};
