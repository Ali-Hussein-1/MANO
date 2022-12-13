const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  //   window.open("https://api.manoapp.com/apipie");
  getProducts();
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
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
