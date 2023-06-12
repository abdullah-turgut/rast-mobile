## RAST-MOBILE

#### Proje Kurulumu

Terminalden projenin ana dizinine gidip sırasıyla;

`npm install`

`npm run dev`

komutlarını çalıştırın. Proje default olarak 5173 portunda açılacaktır.

### Proje Açıklaması

Figma tasarımı ve proje ile ilgili iletilen notlara dayanarak hazırlanmıştır. Projenin ana bileşeni bir datagrid olup kullanıcının eklediği sosyal medya ile ilgili bilgileri göstermektedir. Bunun dışında “Navbar, SearchFilter, Pagination, Entry Form” gibi yan bileşenler kullanılmıştır.

Proje **100% responsive** olarak tasarlanmış olup mobil (width \< 1024px) ve desktop (width ≥ 1024px) olacak şekilde 2 farklı media query yazılmıştır.

### Components

**Navbar**

- Her zaman ekranın en tepesinde gözükmesi için fixed özelliği verilmiştir.
- Site içi routing ve sosyal medya ağlarına yönlendirme yapmak için 2 farklı nav etiketi kullanılmıştır.
- Mobil ekranlarda navigation kısmı sayfa dışına taşınmış ve burger menu ile navigation kısmı toggle edilebilmektedir.

**SearchFilter**

- İçinde search input, arama butonu, filtre butonu ve **New Entry componenti** bulundurur.
- Search input alanına girilen string değerine göre data grid sayfasında global filtreleme yapar.
- New Entry componenti Modal Form'u açmak için kullanılır.
- Filtre butonunda herhangi bir fonksiyon yoktur.

**DataGrid**

- Material-react-table kütüphanesi kullanılmıştır.
- Tablonun gövde kısmı ve sort fonksiyonu kütüphaneden alınmış ve stillendirilmiştir.
- Stil dosyasında classların hangi alanları seçtiği ile ilgili yorumlar düşülmüştür.
- Pagination özelliğine stil veremediğim için Pagination kısmı ve fonksiyonları için yeni bir component oluşturulmuştur.
- İlk başta 9 entry olacak şekilde mock data oluşturulmuştur.
- **Eğer kullanıcının localinde data bulunuyorsa, datalar localden alınmaktadır.**

**Pagination**

- Pagination kısmında tabloda gösterilecek satır sayılarını belirleyen ve sayfalar arası geçiş yapılmasını sağlayacak şekilde 2 ana fonksiyon bulunmaktadır.
- Satır sayısı default olarak 9, sayfa numarası default olarak 1 olacak şekilde ayarlanmıştır.
- Sonuncu sayfa numarası satır sayılarında yapılan değişiklik ve data uzunluğuna göre kendini ayarlamaktadır.

**NewEntryModal**

- Kullanıcının yeni bir entry girebilmesi için bir formdur.
- React-hook-form kütüphanesi kullanılmıştır.
- İnput alanları boş bırakılamayacak şekilde tasarlanmış ve boş bırakıldığında hata mesajları göstermektedir.
- **Kullanıcının gönderdiği formlar localstorage'a yazılmaktadır. ("localData")**
- **RESTFUL tasarımlara uygun olması açısından her data girişinde entry içine nanoid ile id basılmaktadır.**
