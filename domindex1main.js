let counterOne = 0

function addParagraph(text,color){
    let mytext = document.createElement('p');
    mytext.textContent = text;
    let mycolor = color;
    mytext.style.color = mycolor;
    counterOne++;
    mytext.setAttribute('id',counterOne);
}

function addH3(text,color){
    let mytext = document.createElement('h3');
    mytext.textContent = text;
    let mycolor = color;
    mytext.style.color = mycolor;
    counterOne++;
    mytext.setAttribute('id',counterOne);
}

function addDiv1(text,color){
    let mydiv = document.createElement('div');
    document.getElementById('testcontainer').appendChild(mydiv);
    let mytext = text;
    let mycolor = color;
    mydiv.textContent = mytext;
    mydiv.style.color = mycolor;
    counterOne++;
    mydiv.setAttribute('id',counterOne);
}
