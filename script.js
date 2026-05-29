async function fetchData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

async function init() {
  const data = await fetchData();
  console.log(data);
}

init();
