// 데이터 가져오기
let pokemon : Record<string, any> = JSON.parse(window.localStorage.getItem("pokemon") as string);
let number = window.localStorage.getItem("number");

// 붙여넣을 main 태그 노드 요소 접근
let main = document.getElementsByTagName('main')[0];

// 이미지
let img = document.createElement("img");
img.src = "https://data1.pokemonkorea.co.kr/newdata/pokedex/full/" + String(number).padStart(4, "0")+"01.png"


// 정보 추가
let table = document.createElement('div');
table.id = 'table';

function addTrToTable(key : string, element : string) {
    // Key 첫 글자를 대문자로
    let tr = document.createElement('div')
    tr.classList.add('tr');
    if (key == 'speed') {
        tr.classList.add('last');
    }

    let title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = key.charAt(0).toUpperCase() + key.slice(1);

    let content = document.createElement('p');
    content.classList.add('content'); 
    content.innerHTML = element + '';

    tr.append(title, content);
    table.appendChild(tr);
}

// id 추가
addTrToTable('id', number + '');

for (const key in pokemon) {
    if (Object.prototype.hasOwnProperty.call(pokemon, key)) {
        const element = pokemon[key];

        addTrToTable(key, element);
    }
}

main.append(img, table);