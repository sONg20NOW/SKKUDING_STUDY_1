// import { data } from "./getdata";
var pokemons_data = data;
pokemons_data.map(function (value, index) { return MakeCard(value, index); });
function MakeCard(value, index) {
    var card = document.createElement("div");
    card.classList.add('card');
    card.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    card.addEventListener('click', function () {
        cardClick(index + 1, value);
    });
    document.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
    document.addEventListener('selectstart', function (event) {
        event.preventDefault();
    });
    // 정보 입력하기
    var pokemon = value;
    // 이미지 삽입
    var img = document.createElement("img");
    img.setAttribute('src', "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(index + 1).padStart(4, "0") + "01.png");
    card.appendChild(img);
    // info wrapper 삽입
    var infoWrapper = document.createElement("div");
    infoWrapper.className = "info-wrapper";
    outer: for (var key in pokemon) {
        if (Object.prototype.hasOwnProperty.call(pokemon, key)) {
            var element = pokemon[key];
            switch (key) {
                case "name":
                    var name_1 = document.createElement("h2");
                    name_1.innerHTML = element;
                    infoWrapper.appendChild(name_1);
                    break;
                case "base-Experience":
                    break outer;
                default:
                    var info = document.createElement("p");
                    info.innerHTML = key + ": " + element;
                    infoWrapper.appendChild(info);
                    break;
            }
        }
    }
    card.appendChild(infoWrapper);
    var cardWrapper = document.getElementById('card-wrapper');
    cardWrapper === null || cardWrapper === void 0 ? void 0 : cardWrapper.appendChild(card);
}
function cardClick(number, obj) {
    window.localStorage.setItem("pokemon", JSON.stringify(obj));
    window.localStorage.setItem("number", number + "");
    window.location.href = './pokemon/1.html';
}
