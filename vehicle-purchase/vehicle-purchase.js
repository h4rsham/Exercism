// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */

// Task 1
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */

// Task 2
export function chooseVehicle(option1, option2) {
  // let choice 
  // if (option1.charAt(0) < option2.charAt(0)){
  //   choice = option1
  // } else {
  //   choice = option2
  // }
  // return choice + ' is clearly the better choice.'
  const choice = option1.charAt(0) < option2.charAt(0) ? option1 : option2;
  return choice + ' is clearly the better choice.'
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */

// Task 3
export function calculateResellPrice(originalPrice, age) {
  if (age < 3){
    return originalPrice*0.8
  } else if (age <= 10){
    return originalPrice*0.7
  } else {
    return originalPrice*0.5
  }
}
