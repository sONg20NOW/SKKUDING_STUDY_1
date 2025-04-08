"use strict";

let pokemons_data = data;
pokemons_data.map((value, index) => MakeCard(value, index));

function MakeCard(value, index) {
    let card = document.createElement("div");
    card.classList.add('card');
    card.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
    card.addEventListener('click', () => {
        cardClick(index+1, value);
    });

    // 정보 입력하기
    let pokemon = value;
    // 이미지 삽입
    let img = document.createElement("img");
    img.setAttribute('src', "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(index+1).padStart(4, "0")+"01.png");
    card.appendChild(img);
    // info wrapper 삽입
    let infoWrapper = document.createElement("div");
    infoWrapper.className = "info-wrapper";
    outer : for (const key in pokemon) {
        if (Object.prototype.hasOwnProperty.call(pokemon, key)) {
            const element = pokemon[key];
            switch (key) {
                case "name":
                    let name = document.createElement("h2");
                    name.innerHTML = element;
                    infoWrapper.appendChild(name);
                    break;
                case "base-Experience":
                    break outer;
                default:
                    let info = document.createElement("p");
                    info.innerHTML = key + ": " + element;
                    infoWrapper.appendChild(info);
                    break;
            }
        }
    }
    card.appendChild(infoWrapper);

    let cardWrapper = document.getElementById('card-wrapper');
    cardWrapper.appendChild(card);
}

function cardClick(number, obj) {
    window.localStorage.setItem("pokemon", JSON.stringify(obj));
    window.localStorage.setItem("number", number + "");
    window.location.href = './pokemon/1.html'
}