const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUppercase = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));

const symbols = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~$€£¥R$+-*/=≠><≥≤±%√';
const generateSymbols = () => symbols[rand(0, symbols.length)];

export default function generatePassword(quantity, uppercase, lowercase, numbers, includeSymbols) {
  const passwordArray = [];
  const generators = [];
  
  if (uppercase) generators.push(generateUppercase);
  if (lowercase) generators.push(generateLowercase);
  if (numbers) generators.push(generateNumber);
  if (includeSymbols) generators.push(generateSymbols);

  if (generators.length === 0) return '';

  for (let i = 0; i <= quantity; i++) {
    const randomGenerator = generators[rand(0, generators.length)];
    passwordArray.push(randomGenerator());
  }

  return passwordArray.join('');
}
