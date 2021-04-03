let button = document.getElementById('btn');
let result = document.getElementById('result');

button.addEventListener('click', countVowels)

function countVowels(str) {
    
    
    let count = 0;
    let string = document.getElementById('input').value;
    let vowels = "aeiou";
    
    for(i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i].toLowerCase()) > -1) {
            count++;
        }
    }
    result.innerText = `The string "${string}", has ${count} vowels x)`;
}
