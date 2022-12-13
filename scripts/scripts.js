const btn = document.getElementById("btn");
const container = document.getElementById("container");
const desc = document.getElementById("desc");

btn.addEventListener("click", () => {
  window.open("https://api.manoapp.com/apipie");
});

function getProducts() {
  fetch("https://api.manoapp.com/api/v1/users/products/whats_new", {
    method: "GET",
    headers: {
      StoreID: "4",
      Authorization: "f44a4aabfc5992514d262d7f517327e7",
      UserAddressID: "60877",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let item = data.items;
      let naming = item[0].title;
    })
    .catch((err) => console.error(err));
}
