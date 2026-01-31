const btn = document.getElementById('btn-change');
const colorText = document.getElementById('color-code');

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click', () =>{
   let hexColor = "#";

   for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()];
   }

   document.body.style.backgroundColor = hexColor;
   colorText.textContent = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

