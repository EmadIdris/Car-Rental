'use strict'

let fromEl = document.getElementById('myForm');
let divEl = document.getElementById('table');
let tableEl = document.createElement('table');
divEl.appendChild(tableEl);

let trEl1= document.createElement('tr');
tableEl.appendChild(trEl1);

let thEl1 = document.createElement('th');
trEl1.appendChild(thEl1);
thEl1.textContent = 'Order Image'
let thEl2 = document.createElement('th');
trEl1.appendChild(thEl2);
thEl2.textContent = 'Car Model'

let car = [];

function Rent(cusName, carModel)
{
    this.cusName = cusName;
    this.carModel = carModel;
    car.push(this);
    saveToLocalStorage()
}

function saveToLocalStorage()
{
    let data = JSON.stringify(car);
    localStorage.setItem('data' , data);
}

function readFromLocalStorage()
{
    let stringObj = localStorage.getItem('data')
    let normaObj = JSON.parse(stringObj);

    if(normaObj)
    {
        for(let i=0; i<normaObj.length;i++)
        {
            let newData =  new Rent(normaObj[i].cusName
                , normaObj[i].carModel);

            newData.render();
        }
    }
}
fromEl.addEventListener('submit' , show)
function show(event)
{
    event.preventDefault();
    let cusName = event.target.name.value;
    let carModel = event.target.model.value;
    let carPrice  = randomNumber();
    let newData =  new Rent (cusName , carModel , carPrice)

    newData.render()
    fromEl.reset();
}

let imageSrc1 =  "image/cars/kia.jpg"
let imageSrc2 = "image/cars/bmw.jpg"
let imageSrc3 = "image/cars/ford.jpg"

let carPrice  = randomNumber();

Rent.prototype.render = function()
{
    let tr2=document.createElement('tr')
    tableEl.appendChild(tr2);

    if(this.carModel === "KIA")
    {
        let td1= document.createElement('td')
        let img = document.createElement('img')
        td1.appendChild(img);
        tr2.appendChild(td1)
        img.setAttribute("src" , imageSrc1) 
    } else if (this.carModel === "BMW")
    {
        let td1= document.createElement('td')
        let img = document.createElement('img')
        td1.appendChild(img);
        tr2.appendChild(td1)
        img.setAttribute("src" , imageSrc2) 
    }
    else
    {
        let td1= document.createElement('td')
        let img = document.createElement('img')
        td1.appendChild(img);
        tr2.appendChild(td1)
        img.setAttribute("src" , imageSrc3) 
    }
    
    let td2= document.createElement('td')
    tr2.appendChild(td2)
    td2.textContent =`Customer Name: ${this.cusName}, \n Car Model: ${this.carModel} , Car Price: ${carPrice}`;
    
}
readFromLocalStorage()
function randomNumber()
{
    let min = Math.ceil(1000);
    let max = Math.floor(10000);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let btn = document.getElementById('btn')
btn.addEventListener('click' , clear)
function clear(event)
{
    localStorage.clear();
    location.reload();
}