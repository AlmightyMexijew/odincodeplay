let counterOne = 0

function finalTask(){
    let mydiv = document.createElement('div');
    mydiv.style.background = 'pink';
    mydiv.style.border = 'black solid 2px';
    mydiv.style.width = '300px';
    document.getElementById('testcontainer').appendChild(mydiv);
    let myh1 = document.createElement('h1');
    myh1.textContent = "I'm in a div";
    mydiv.appendChild(myh1);
    let myP = document.createElement('p');
    myP.textContent = 'ME TOO!';
    mydiv.appendChild(myP);
}




/*function addParagraph(text,color){
    let mytext = document.createElement('p');
    mytext.textContent = text;
    let mycolor = color;
    mytext.style.color = mycolor;
    counterOne++;
    mytext.setAttribute('id',counterOne);
}

function addH3(text,color,node){
    let mytext = document.createElement('h3');
    mytext.textContent = text;
    let mycolor = color;
    mytext.style.color = mycolor;
    let mynode = node;
    counterOne++;
    mytext.setAttribute('id',counterOne);
    mytext.appendChild(mynode);
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
*/