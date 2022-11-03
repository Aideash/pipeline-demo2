//DOM selection
let inputField = document.getElementById("field");
let button = document.getElementById("btn");

let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");

button.addEventListener('click', fetchFunc);

async function fetchFunc(){
  let num = inputField.value;

  let response = await fetch("https://pokeapi.co/api/v2/pokemon/"+num, {method:"GET"});

  if(response.status===200){
    let data = await response.json();
    console.log(data);
    renderData(data);
  }else{
    console.log("It got away!");
  }
}

function renderData(data){
  //DOM manipulation
  let name = data.name;
  name = name.charAt(0).toUpperCase()+name.substr(1);
  pokename.innerText = name;
  pokenum.innerText = data.id;
  poketype.innerText = data.types[0].type.name;
  if(data.types[1]){
    //poketype.innerText = poketype.innerText.concat(`, ${data.types[1].type.name}`);
    poketype.append(`, ${data.types[1].type.name}`);
  }
  pokepic.setAttribute('src', data.sprites.front_default);
}