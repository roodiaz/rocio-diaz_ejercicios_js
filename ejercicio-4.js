// callback 1
function addNumbers(num1, num2, callback){
  const result = num1 + num2
  callback(result)
}

function response(result) {
  console.log(`The result of the sum is: ${result}`)
}

addNumbers(15, 20, response)


/**********************************************************************/

// callback 2
function addNumbers(num1, num2, callback){
  const result = num1 + num2
  console.log("The sum is", result)
  callback(result, num1, num2)
}

function returnAverage(result, num1, num2 ) {
  const average = result / 2
  console.log(`The average between ${num1} and ${num2} is: ${average}`)
}

addNumbers(10, 20, returnAverage)