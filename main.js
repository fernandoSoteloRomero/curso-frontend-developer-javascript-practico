const $d = document;
const $navbarEmail = $d.querySelector(".navbar-email");
const $desktopMenu = $d.querySelector(".desktop-menu");
const $mobileMenu = $d.querySelector(".mobile-menu");
const $mobileMenuIcon = $d.querySelector(".menu");
const $productDetail = $d.querySelector(".product-detail");
const $cartIcon = $d.querySelector(".navbar-shopping-cart");
const $productList = $d.querySelector(".cards-container");
function toggleDesktopMenu() {
  const isProductDetailClosed = $productDetail.classList.contains("inactive");
  //   $productDetail.classList.toggle("inactive");
  // Si mobileMenu esta open, hay que cerrarlo
  if (!isProductDetailClosed) {
    $productDetail.classList.add("inactive");
  }
  $desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isProductDetailClosed = $productDetail.classList.contains("inactive");
  //   $productDetail.classList.toggle("inactive");
  // Si mobileMenu esta open, hay que cerrarlo
  if (!isProductDetailClosed) {
    $productDetail.classList.add("inactive");
  }
  $mobileMenu.classList.toggle("inactive");
}

function showProductDetail() {
  const isMobileMenuClosed = $mobileMenu.classList.contains("inactive");
  //   $productDetail.classList.toggle("inactive");
  // Si mobileMenu esta open, hay que cerrarlo
  if (!isMobileMenuClosed) {
    $mobileMenu.classList.add("inactive");
  }
  $productDetail.classList.toggle("inactive");
}
$navbarEmail.addEventListener("click", toggleDesktopMenu);
$mobileMenuIcon.addEventListener("click", toggleMobileMenu);
$cartIcon.addEventListener("click", showProductDetail);

const productList = [];
productList.push({
  name: "Bike",
  price: 1000,
  image: "https://picsum.photos/200/300",
});

productList.push({
  name: "Pantalla",
  price: 1200,
  image: "https://picsum.photos/200/300",
});

productList.push({
  name: "PC",
  price: 5000,
  image: "https://picsum.photos/200/300",
});
{
  /* <div class="product-card">
        <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="" />
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
        </div>
    </div>  */
}

function createProductCard(products) {
  products.forEach((product) => {
    const productCard = $d.createElement("div");
    productCard.classList.add("product-card");
    const productImage = $d.createElement("img");
    productImage.src = product.image;
    const productInfo = $d.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoText = $d.createElement("div");
    const productPrice = $d.createElement("p");
    productPrice.textContent = `$${product.price}`;
    const productName = $d.createElement("p");
    productName.textContent = product.name;
    const productInfoFigure = $d.createElement("figure");
    const productInfoFigureImage = $d.createElement("img");
    productInfoFigureImage.src = "./icons/bt_add_to_cart.svg";
    productInfoFigureImage.alt = "Add to cart";
    productInfoFigure.appendChild(productInfoFigureImage);
    productInfoText.appendChild(productPrice);
    productInfoText.appendChild(productName);
    productInfo.appendChild(productInfoText);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    $productList.appendChild(productCard);
  });
}
createProductCard(productList);
