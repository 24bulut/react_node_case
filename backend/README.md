# Node.js API Server

Router     : router/router.js dosyası içerisinde rotaları tanımladım.

Service    : service/imdbApiService.js dosyasında imdb apileri ile alaklı işlemleri yaptığım sevis sınıfı.

Controller : controller/MovieController.js dosyasında servis katmanından aldığım verileri json olarak istemciye dönüyorum.

Extra zamanım olsaydı : 
- service/imdbApiService.js içerisinde catch içerisinde hata fırlatıyorum. bunu yapmazdım. hatalar global biryerden handle edilip özelleştirilmeli.
- DTO kullanırdım.

## API Endpoint'leri

### `/api/search`

- **Yöntem:** GET
- **URL:** `http://localhost:3010/api/search?keyword=Hababam Sınıfı`
- **Açıklama:** Bu endpoint, sağlanan anahtar kelime (`keyword`) ile dış bir API'dan veri araması yapar. Arama sonuçları 20 sonuçla sınırlıdır ve önbelleğe alınır.
- **Sorgu Parametreleri:**
  - `keyword` (string): Arama yapılacak anahtar kelime. Örneğin: `Hababam Sınıfı`
- **Yanıt:**
  - **Başarı Durumunda:**
    - **HTTP Durum Kodu:** 200 OK
    - **Yanıt Formatı:** JSON
    - **Örnek Yanıt:**
      ```json
      [
        { "id": 1, "title": "Hababam Sınıfı 1" },
        { "id": 2, "title": "Hababam Sınıfı 2" }
      ]
      ```


### `/api/clear`

- **Yöntem:** GET
- **Açıklama:** Bu endpoint, tüm önbelleği temizler.
- **Yanıt:**
  - **Başarı Durumunda:**
    - **HTTP Durum Kodu:** 204 OK
    - **Yanıt Formatı:** JSON
    - **Örnek Yanıt:**
      ```json
      {  }
      ```
