/**
 * Updates a object using Object.assign syntax.
 *
 * @param {Object} oldObject
 * @param {Object} updatedValues
 */
export const updateObject = (oldObject, updatedValues) => Object.assign({}, oldObject, updatedValues);
