/**
 * Check if the object is empty
 * @param {Object} obj - Object to check
 * @returns {Boolean} true if the object is empty (no keys)
 */
export const objectIsEmpty = (obj: object): boolean => {
  for (const key in obj) return false
  return true
}

/**
 * Compare two objects of values
 * @param {Object} obj1 - Object 1 to compare
 * @param {Object} obj2 - Object 2 to compare
 * @returns {Boolean} true if the two objects are equal (same keys and values)
 */
export const compareObjects = (obj1: any, obj2: any): boolean => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false
  if (Array.isArray(obj1) || Array.isArray(obj2)) return false
  if (objectIsEmpty(obj1) && objectIsEmpty(obj2)) return true
  for (const key in obj1) {
    const value1 = obj1[key]
    const value2 = obj2[key]

    if (value1 !== value2) return false
    if (
      !Array.isArray(value1) &&
      !Array.isArray(value2) &&
      typeof value1 === "object"
    )
      return compareObjects(value1, value2)
    if (Array.isArray(value1) && Array.isArray(value2))
      return compareArrays(value1, value2)
  }
  return true
}

/**
 * Compare two arrays of values or arrays of objects
 * @param {Array} arr1 - Array 1 to compare
 * @param {Array} arr2 - Array 2 to compare
 * @returns {Boolean} true if the two arrays are equal (same values or objects)
 */
export const compareArrays = (arr1: any, arr2: any): boolean => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if (arr1.length === 0 && arr2.length === 0) return true
  if (arr1.length !== arr2.length) return false
  for (const [key1, value1] of arr1.entries()) {
    const value2 = arr2[key1]

    if (value1 !== value2) return false
    if (
      !Array.isArray(value1) &&
      !Array.isArray(value2) &&
      typeof value1 === "object"
    )
      return compareObjects(value1, value2)
    if (Array.isArray(value1) && Array.isArray(value2))
      return compareArrays(value1, value2)
  }
  return true
}
