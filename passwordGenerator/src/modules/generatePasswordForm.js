import generatePassword from "./generators";

const generatedPassword = document.querySelector('.generated-password')
const quantityCharacter = document.querySelector('.quantity-character')
const checkUppercase = document.querySelector('.chk-lowercase')
const checkLowercase = document.querySelector('.chk-uppercase')
const checkNumber = document.querySelector('.chk-number')
const checkSymbol = document.querySelector('.chk-symbol')
const goGeneratePassword = document.querySelector('.generate-password')

export default () => {
   goGeneratePassword.addEventListener('click', () => {
      generatedPassword.innerHTML = generate()
   })
}

function generate() {
   const password = generatePassword(
      quantityCharacter.value,
      checkUppercase.checked,
      checkLowercase.checked,
      checkNumber.checked,
      checkSymbol.checked,
   )

   console.log(password)

   return password || 'Nada selecionado.'
}