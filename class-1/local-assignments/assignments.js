// - 1. Write the program to greet a person given their first and last name.
// - 2. Write a program to greet a person based on their gender.
// - 3. Write a program that counts from 0 - 1000 and prints(for loop)

// - 1. Write the program to greet a person given their first and last name.
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`
}

// - 2. Write a program to greet a person based on their gender.
function greetByGender(gender) {
  let prefix = gender === 'male' ? 'Mr.' : 'Ms.'
  return `Hello ${prefix}.${firstName} ${lastName}. have a nice day`
}

// - 3. Write a program that counts from 0 - 1000 and prints(for loop)
const target = 1000
for (let i = 0; i <= target; i++) {
  console.log(i)
}
