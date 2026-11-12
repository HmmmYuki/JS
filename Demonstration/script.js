alert("Je suis script.js") ;
let maDiv1 ;
maDiv1 = document.getElementById ('test');
maDiv1.innerHTML = "Je suis la div modifiée par script.js";
maDiv1.classList.add('test');

let maListeDivUn = document.getElementsByClassName('un');
//on peut utiliser getElementsByTagName('div') pour récupérer toutes les divs de la page

maListeDivUn.forEach(function(element){
    element.classList.add('test');
});

for(let i=0; i<maListeDivUn.length; i++){
    maListeDivUn[i].classList.add('test');
}