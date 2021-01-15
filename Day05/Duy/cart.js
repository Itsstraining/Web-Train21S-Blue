let database = [
  {
    itemName: "Glock-18",
    itemPrice: 50000,
    itemDiscount: "50%",
    img: "./glock-18.jpg",
  },
  {
    itemName: "HK416",
    itemPrice: 50000,
    itemDiscount: "50%",
    img: "./HK416.jpg",
  },
  {
    itemName: "Honey Badger",
    itemPrice: 50000,
    itemDiscount: "50%",
    img: "./Honey-Badger.png",
  },
  {
    itemName: "MK14 EBR",
    itemPrice: 50000,
    itemDiscount: "50%",
    img: "./mk14.jpg",
  },
  {
    itemName: "AWP",
    itemPrice: 50000,
    itemDiscount: "50%",
    img: "./AWP.png",
  },
];
let shelf = document.getElementById("shelf");
for (let i of database) {
  let li = document.createElement("li");
  let name = document.createElement("p");
  let img = document.createElement("img");
  let price = document.createElement("p");
  let discount = document.createElement("p");
  let btnAdd = document.createElement("button");
  let listItem = document.createElement("div");
  li.className = "list";
  name.innerText = i.itemName;
  btnAdd.innerHTML = "Mua";
  img.src = i.img;
  price.innerText = i.itemPrice + "VNĐ";
  discount.innerText = i.itemDiscount;
  li.appendChild(img);
  li.appendChild(listItem);
  listItem.appendChild(name);
  listItem.appendChild(price);
  listItem.appendChild(discount);
  listItem.appendChild(btnAdd);
  shelf.appendChild(li);

  listItem.id = "listItem";
}

/**
 * Luu y:
 * File script phai duoc import sau khi cay dom da duoc render
 * script chay truoc khi cay DOM duoc phat sinh => Khong co dua nao la item-name het!!!ok
 **/
