var products = [];
var filtered = [];
let yukle = document.getElementById("fetchBtn");
let detay = document.getElementById("detail");
let arama = document.getElementById("search");
let tema = document.getElementById("themeBtn");
let sirala = document.getElementById("sortBtn");
let filtre = document.getElementById("filter");
var body = document.body;

function temaYukle() {
  var tema = localStorage.getItem("tema");
  if (tema === "dark") {
    body.classList.add("dark");
  }
}
yukle.addEventListener("click", function () {
  var status = document.getElementById("status");
  var cardList = document.getElementById("cardList");

  cardList.innerHTML = "";
  status.style.display = "block";
  status.innerHTML = "✓ Yükleniyor...";

  fetch("https://dummyjson.com/products")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      try {
        var allProducts = data.products;
        products = allProducts.filter(function (p) {
          return p.category === "beauty" || p.category === "fragrances";
        });
        filtered = products;

        if (products.length == 0) {
          status.innerHTML = "! Sonuç Yok";
        } else {
          status.style.display = "none";
          gosterKartlar();
        }
      } catch (error) {
        status.innerHTML = "⚠ Hata: " + error.message;
      }
    })
    .catch(function (error) {
      status.innerHTML = "⚠ API Hatası: " + error.message;
    });
});
function gosterKartlar() {
  var cardList = document.getElementById("cardList");

  var html = filtered
    .map(function (p, i) {
      return (
        "<div class='card'>" +
        "<div class='card-title'>KART " +
        p.id +
        "</div>" +
        "<img src='" +
        p.thumbnail +
        "'>" +
        "<div class='card-info'>✓ " +
        p.title +
        "</div>" +
        "<div class='card-info'>✓ $" +
        p.price +
        "</div>" +
        "<button onclick='detayGoster(" +
        i +
        ")'>Detay</button>" +
        "</div>"
      );
    })
    .join("");

  cardList.innerHTML = html;
}

function detayGoster(index) {
  var p = filtered[index];
  var detay = document.getElementById("detail");
  var detailContent = document.getElementById("detailContent");

  detay.style.display = "block";

  detailContent.innerHTML =
    "<img src='" +
    p.thumbnail +
    "'>" +
    "<div class='detail-info'>" +
    "<h4>KART DETAY BAŞLIĞI</h4>" +
    "<p>Ürün: " +
    p.title +
    "</p>" +
    "<p>Fiyat: $" +
    p.price +
    "</p>" +
    "<p>Stok: " +
    (p.stock > 0 ? "Stokta Var" : "Stokta Yok") +
    "</p>" +
    "<p>Açıklama: " +
    p.description +
    "</p>" +
    "<button onclick='detayKapat()'>Geri / Kapat</button>" +
    "</div>";
}

function detayKapat() {
  document.getElementById("detail").style.display = "none";
}

arama.addEventListener("keyup", function () {
  var search = document.getElementById("search");
  var text = search.value.toLowerCase();

  filtered = products.filter(function (p) {
    return p.title.toLowerCase().indexOf(text) > -1;
  });

  gosterKartlar();
});

tema.addEventListener("click", function () {
  var suanki = body.getAttribute("class");
  if (suanki === "dark") {
    body.classList.remove("dark");
    localStorage.setItem("tema", "light");
  } else {
    body.classList.add("dark");
    localStorage.setItem("tema", "dark");
  }
});

sirala.addEventListener("click", function () {
  var btn = document.getElementById("sortBtn");
  var azmi = btn.textContent.indexOf("A-Z") > -1;

  filtered.sort(function (a, b) {
    if (azmi) {
      return a.title > b.title ? 1 : -1;
    } else {
      return a.title < b.title ? 1 : -1;
    }
  });

  btn.textContent = azmi ? "Sırala (Z-A)" : "Sırala (A-Z)";
  gosterKartlar();
});

filtre.addEventListener("change", function () {
  var filterElement = document.getElementById("filter").value;

  if (filterElement === "all") {
    filtered = products;
  } else {
    filtered = products.filter(function (p) {
      return p.category === filterElement;
    });
  }

  gosterKartlar();
});
