const container = document.querySelector(".container");

let items;
let itemIndex = 0;
let interVal = null;
let imgUrl = "Gerdoo Wallpaper (45).jpg";
let itemsPces = 9;
let selectedElement;
let toElement;
function fixImgSize() {
  items.forEach((item) => {
    item.children[0].style.width = item.parentElement.scrollWidth + "px";
    item.children[0].style.height = item.parentElement.scrollHeight + "px";
  });
}
function createItems() {
  for (let index = 0; index < itemsPces; index++) {
    let item = `
        <div class="item indexItem${
          index + 1
        }"><img src="${imgUrl}" alt="" /></div>
        `;
    container.innerHTML += item;
  }
  items = document.querySelectorAll(".item");
}
function animationFun(end = false) {
  if (end) {
    items.forEach((item) => {
      item.classList.remove("hidden");
      item.classList.remove("rtl");
      item.style.transform = `translate(0)`;
      itemIndex = 0;
      console.log(1);
    });
    return;
  }
  console.log(itemIndex);
  items.forEach((item) => {
    if (item.classList.contains("rtl")) {
      item.classList.add("hidden");
    }
  });
  console.log(items[itemIndex + 6]);
  items[itemIndex].classList.add("rtl");
  items[itemIndex].style.transform = `translate(-${Math.round(
    Math.random() * 100
  )}%,-${Math.round(Math.random() * 100)}%)`;
  items[itemIndex + 3].style.transform = `translate(-${Math.round(
    Math.random() * 100
  )}%)`;
  items[itemIndex + 6].style.transform = `translate(-${Math.round(
    Math.random() * 100
  )}%,${Math.round(Math.random() * 100)}%)`;
  items[itemIndex + 3].classList.add("rtl");
  items[itemIndex + 6].classList.add("rtl");
  itemIndex++;
}

createItems();
items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    let element = e.target;
    if (!element.classList.contains("item")) {
      selectedElement = element.parentElement;
    } else {
      selectedElement = element;
    }
  });
  item.addEventListener("dragend", (e) => {});
});
container.addEventListener("mouseup", (e) => {
  toElement = e.toElement;
  if (!toElement.classList.contains("item")) {
    toElement = toElement.parentElement;
  } else {
  }
  container.insertBefore(selectedElement, toElement);
});

interVal = setInterval(() => {
  if (itemIndex >= 3) {
    animationFun(true);
  } else animationFun();
}, 2500);
fixImgSize();
onresize = fixImgSize;
