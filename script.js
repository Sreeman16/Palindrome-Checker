
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const palindrome = () => {
  const word = document.querySelector('.input-text').value.trim();

  let len = word.length;

  let first = word.substring(0, Math.floor(len / 2)).toLowerCase();

  let last = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = last.split('').reverse().join('');
  if(word===""){
      result.innerHTML = `😬Type a word`;
  }
  else if (first == flip) {
    result.innerHTML = `${word.toUpperCase()} is a PALINDROME 😀`;
    result.style.color = 'blue';
  } else {
    result.innerHTML = `${word.toUpperCase()} is  not a PALINDROME 😶`;
    result.style.color = 'black';
  }
};
document.addEventListener('keyup', keyevent => {
    if (keyevent.code === 'Enter') {
        palindrome();
    }
  })

btn.addEventListener('click', palindrome);
palindrome();