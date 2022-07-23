const randomNum = Math.floor(Math.random() * 51);

setInterval(() => {
  let imgs = document.querySelectorAll("img");
  imgs.forEach((val, i) => {
    val.src = `${randomNum}.jpg`;
  });
}, 1000);
