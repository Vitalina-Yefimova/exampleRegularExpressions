console.log('#11. JavaScript homework example file')

/*
#1 Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
   Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
*/

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

console.log(isValidEmail('example@example.com'))
console.log(isValidEmail('invalid-email'))


/*
#2 Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
   Функція повертає true, якщо URL валідний, і false в іншому випадку.
 */

function isValidUrl(url) {
  const urlRegex = /^(https?:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/
  return urlRegex.test(url)
}

console.log(isValidUrl('https://www.example.com'))
console.log(isValidUrl('invalid-url'))             
