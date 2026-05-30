const config = {
  Work: { color: "hsl(15, 100%, 70%)", icon: "./images/icon-work.svg" },
  Play: { color: "hsl(195, 74%, 62%)", icon: "./images/icon-play.svg" },
  Study: { color: "hsl(348, 100%, 68%)", icon: "./images/icon-study.svg" },
  Exercise: { color: "hsl(145, 58%, 55%)", icon: "./images/icon-exercise.svg" },
  Social: { color: "hsl(264, 64%, 52%)", icon: "./images/icon-social.svg" },
  "Self Care": {
    color: "hsl(43, 84%, 65%)",
    icon: "./images/icon-self-care.svg",
  },
};

async function fetchData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
async function init() {
  const data = await fetchData("./data.json");
  const container = document.querySelector("#cards-container");

  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    const current = item.timeframes.weekly.current;
    const previous = item.timeframes.weekly.previous;
    const color = config[item.title].color;
    const icon = config[item.title].icon;
    const cardHTML = `<article class="card" style="background-color: ${color}"><img src="${icon}" alt=""><div class="card-body"><div class="card-header"><h2>${item.title}</h2><img src="./images/icon-ellipsis.svg" alt=""></div><div class="card-content"><p>${current}hrs</p><p>Last Week - ${previous}hrs</p></div></div></article>`;
    container.innerHTML += cardHTML;
  }

  console.log(data);
}

init();
