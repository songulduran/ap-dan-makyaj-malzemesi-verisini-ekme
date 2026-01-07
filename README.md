🌐 Kullanılan API
Makyaj Malzemesi API
https://dummyjson.com/products
🚀 Uygulamanın Çalışma Prensibi
Bu proje, tek sayfa bir uygulama (SPA) olarak geliştirilmiştir ve API’den veri çekip kullanıcıya dinamik olarak sunar.

1-Sayfa açıldığında fetch() ile API’den ürün verileri çekilir. 📦

2-Ürünler kartlar halinde liste halinde gösterilir ve her kartta başlık, fiyat ve kategori gibi bilgiler bulunur. 💳

3-Kullanıcı arama kutusunu kullanarak ürünleri isim veya kategoriye göre filtreleyebilir. 🔍

4-Kartlardan birine tıklandığında detay alanı açılır ve ürünün açıklaması, fiyatı, kategorisi ve puanı gösterilir. 📝

5-Bonus olarak Dark/Light tema değişimi ile görünüm değiştirilebilir. 🌙☀️

6-Ürün detayı kapatıldığında sayfa üst kısmına scroll yapılır, böylece kullanıcı başa döner. ⬆️

💻 Kullanılan JavaScript Konuları
fetch() ile API’den veri çekme ve try/catch ile hata kontrolü. ⚡
addEventListener ile buton ve kart tıklama olayları. 🖱️
Fonksiyonlar:
fetchProducts → API’den ürünleri çeker.
createCategories → Kategorileri select içine ekler.
displayProducts → Ürünleri ekrana basar ve return kullanır.
showDetail → Seçilen ürünün detayını gösterir.
Dizi metotları: map, filter
Parametre alan ve return döndüren fonksiyon (displayProducts). 🔁
If/else kontrol yapısı ve koşullu filtreleme. ❓
DOM manipülasyonu ile kartların ve detay alanının dinamik oluşturulması. 🏗️
✨ Bonus Özellikler
Dark/Light tema desteği, tercihe göre renkler değişir. 🌓
A-Z Z-A listeleme yöntemi yapar.
