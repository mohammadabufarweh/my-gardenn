'use stickt'

let theForm = document.getElementById('theForm');
let mainRemder = document.getElementById('mainRemder');


let imgArray = [
    'Alstroemerias',
    'Gardenias',
    'Orchids',
    'Roses',
    'Sunflowers',
    'Tulips',
    'Peonies'
]
function Roses(image, name, season) {
    this.image = `./img/${image}.jpeg`;
    this.name = name;
    this.season = season;

    Roses.all.push(this);

}

Roses.all = [];
console.log(Roses.all);

for (let i = 0; i < imgArray.length; i++) {
    new Roses(imgArray[i]);
}



console.log(Roses.all.name);



// let th1Ele = document.createElement('th');
// th1Ele.textContent = `name`
// tr1Ele.appendChild(th1Ele);

// let th2Ele = document.createElement('th');
// th2Ele.textContent = `image`
// tr1Ele.appendChild(th2Ele);

// let th3Ele = document.createElement('th');
// th3Ele.textContent = `season`
// tr1Ele.appendChild(th3Ele);
Roses.prototype.render = function () {
    let tableEle = document.createElement('table');
    mainRemder.appendChild(tableEle);
    
    let tr1Ele = document.createElement('tr');
    // tableEle.appendChild(tr1Ele);
    //    let tableEle =document.createElement('table');
    //    mainRemder.appendChild(tableEle);

    //    let tr1Ele =document.createElement('tr');
    //    tableEle.appendChild(tr1Ele);

    // let th1Ele=document.createElement('th');
    // th1Ele.textContent=`name`
    // tr1Ele.appendChild(th1Ele);
let mainImg = document.getElementById('mainImg')


    let tr2Ele = document.createElement('tr');
    tableEle.appendChild(tr2Ele);

    let td1 = document.createElement('td');
    mainImg.src=this.image;
    td1.textContent = this.image;
    tr2Ele.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = this.name;
    tr2Ele.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = this.season;
    tr2Ele.appendChild(td3);

}

theForm.addEventListener('submit', handler)

function handler(evt) {

    evt.preventDefault();
    console.log(evt.target);
    const image = evt.target.image.value;
    const name = evt.target.name.value;
    const season = evt.target.season.value;

    let nwerose = new Roses(image, name, season)
    nwerose.render();
    saveItem()
}
function saveItem(){
    let data = JSON.stringify(Roses.all)
localStorage.setItem('allRoses',data)

}
function getLocal(){
let data =localStorage.getItem('allRoses');
if (data){
    Roses.all=JSON.parse(data);
}
}
getLocal();
