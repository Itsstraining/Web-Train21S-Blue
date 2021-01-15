let cart = 
[
{name : "Cây 1",gia:"10,000,000 vnđ"},
{name : "Cây 2",gia:"20,000,000 vnđ"},
{name : "Cây 3",gia:"30,000,000 vnđ"},
{name : "Cây 4",gia:"40,000,000 vnđ"},
{name : "Cây 5",gia:"50,000,000 vnđ"},
{name : "Cây 6",gia:"60,000,000 vnđ"},
];

let cartBorder = document.getElementById("cartBorder");

for(let i of cart)
{
    let li= document.createElement("li");
    let name = document.createElement("p");


    let price = document.createElement("p");
    let btnAdd= document.createElement("button");
    
    let br = document.createElement("br");

    name.innerHTML= i.name;
    price.innerHTML= i.gia;
    btnAdd.innerHTML= "Mua";
    li.appendChild(name);
    
    li.appendChild(price);
    li.appendChild(btnAdd);
    li.appendChild(br);

    cartBorder.appendChild(li);

    li.className="cartList";
}