// import { data } from "./getdata";

declare const data : Array<Object>;
let pokemons_data : Array<Object> = data;
pokemons_data.map((value, index) => MakeCard(value, index));

function MakeCard(value : Object, index : number) {
    let card : Element = document.createElement("div");
    card.classList.add('card');
    card.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
    card.addEventListener('click', () => {
        cardClick(index+1, value);
    });

    document.addEventListener('dragstart', (event) => {
        event.preventDefault();
    })

    document.addEventListener('selectstart', (event) => {
        event.preventDefault();
    })

    // 정보 입력하기
    let pokemon : Record<string, any> = value;
    // 이미지 삽입
    let img : Element = document.createElement("img");
    img.setAttribute('src', "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + (String(index+1) as string).padStart(4, "0")+"01.png");
    card.appendChild(img);
    // info wrapper 삽입
    let infoWrapper : Element = document.createElement("div");
    infoWrapper.className = "info-wrapper";
    outer : for (const key in pokemon) {
        if (Object.prototype.hasOwnProperty.call(pokemon, key)) {
            const element : any = pokemon[key];
            switch (key) {
                case "name":
                    let name : Element = document.createElement("h2");
                    name.innerHTML = element;
                    infoWrapper.appendChild(name);
                    break;
                case "base-Experience":
                    break outer;
                default:
                    let info : Element = document.createElement("p");
                    info.innerHTML = key + ": " + element;
                    infoWrapper.appendChild(info);
                    break;
            }
        }
    }
    card.appendChild(infoWrapper);

    let cardWrapper : Element | null = document.getElementById('card-wrapper');
    cardWrapper?.appendChild(card);
}

function cardClick(number : number, obj : Object) {
    window.localStorage.setItem("pokemon", JSON.stringify(obj));
    window.localStorage.setItem("number", number + "");
    window.location.href = './pokemon/1.html'
}