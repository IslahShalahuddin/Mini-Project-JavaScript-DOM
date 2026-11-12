# Assignment 6 – Day 22
## Building Interactivity Website with JavaScript

### 1. Deskripsi Project

Project ini merupakan pengerjaan Assignment Day 22 yang bertujuan untuk menambahkan interaksi pada website menggunakan JavaScript, khususnya DOM Manipulation.

Pada assignment ini, saya melanjutkan Study Case Phase 1 dengan mengembangkan halaman detail produk yang menggunakan data hardcoded.

Produk yang digunakan adalah **Ultimate Bison Boot Sock – Imperfect Packaging** dari United By Blue.

Pengembangan difokuskan pada interaksi pengguna ketika melihat gambar produk, memilih warna dan ukuran, mengatur jumlah produk, serta melakukan simulasi penambahan produk ke keranjang.

### 2. Tujuan Pengerjaan

Tujuan dari project ini adalah:

- Memahami cara mengambil dan memanipulasi element HTML menggunakan JavaScript.
- Mengimplementasikan Event Listener untuk menangani interaksi pengguna.
- Membuat fitur interaktif pada halaman detail produk.
- Memperbarui informasi produk berdasarkan pilihan pengguna.
- Menghitung subtotal berdasarkan harga dan jumlah produk.
- Memberikan feedback kepada pengguna setelah melakukan interaksi.

### 3. Fitur yang Diimplementasikan

Berikut fitur yang terdapat pada halaman produk:

**1. Product Gallery**
- Menampilkan gambar utama produk.
- Mengubah gambar utama ketika pengguna memilih thumbnail.
- Memperbarui nomor dan keterangan gambar yang sedang ditampilkan.
- Memberikan penanda pada thumbnail yang aktif.

**2. Color Selection**
- Pengguna dapat memilih warna produk.
- Gambar utama berubah mengikuti warna yang dipilih.
- Informasi warna terpilih diperbarui secara otomatis.

**3. Size Selection**
- Pengguna dapat memilih ukuran S/M atau M/L.
- Informasi ukuran yang dipilih ditampilkan pada halaman.
- Panduan ukuran diperbarui berdasarkan pilihan pengguna.

**4. Quantity Control**
- Tombol (+) digunakan untuk menambah jumlah produk.
- Tombol (-) digunakan untuk mengurangi jumlah produk.
- Jumlah produk tidak dapat dikurangi hingga kurang dari 1.

**5. Subtotal Calculation**
- Menghitung subtotal berdasarkan harga produk dikalikan jumlah produk.
- Memperbarui subtotal secara otomatis ketika quantity berubah.
- Menggunakan format mata uang USD.

**6. Add to Cart**
- Memeriksa apakah warna dan ukuran sudah dipilih.
- Menambahkan jumlah produk ke perhitungan keranjang sementara.
- Menampilkan feedback setelah produk ditambahkan.
- Tidak menggunakan backend atau sistem transaksi sungguhan.

**7. Buy It Now**
- Menampilkan informasi bahwa fitur pembelian hanya berupa simulasi.
- Tidak melakukan checkout atau transaksi sungguhan.

### 4. Teknologi yang Digunakan

- **HTML5** – Membuat struktur halaman website.
- **CSS3** – Mengatur tampilan dan responsivitas halaman.
- **JavaScript (Vanilla JavaScript)** – Mengimplementasikan DOM Manipulation dan Event Handling.
- **Visual Studio Code** – Code editor.
- **Browser** – Menjalankan dan menguji website.

### 5. Konsep JavaScript yang Digunakan

Beberapa konsep JavaScript yang diterapkan dalam project ini:

| Konsep | Penggunaan |
|---|---|
| `querySelector()` | Mengambil element HTML tertentu. |
| `querySelectorAll()` | Mengambil beberapa element HTML. |
| `addEventListener()` | Menangani event click dan change. |
| `forEach()` | Melakukan iterasi pada kumpulan element. |
| `find()` | Mencari thumbnail berdasarkan gambar yang sesuai dengan warna. |
| `textContent` | Memperbarui teks pada halaman. |
| `classList.toggle()` | Mengatur class thumbnail yang aktif. |
| `setAttribute()` | Memperbarui atribut element. |
| `Number()` | Mengubah nilai harga menjadi tipe number. |
| `Intl.NumberFormat()` | Memformat harga ke dalam mata uang USD. |
| Function | Memisahkan proses program menjadi beberapa fungsi. |
| Conditional Statement | Memeriksa kondisi sebelum menjalankan proses tertentu. |

### 6. Struktur Folder

```text
Page1/
│
├── assets/
│   ├── bison-black.png
│   ├── bison-coffee.png
│   ├── bison-red.png
│   ├── bison-wild-green1.png
│   ├── bison-wild-green2.png
│   ├── bison-wild-green3.png
│   └── bison-wild-green4.png
│
├── index.html
├── styles.css
├── product.js
└── README.md
```

### 7. Cara Menjalankan Project

1. Clone repository GitHub atau download project.
2. Buka folder `Page1` menggunakan Visual Studio Code.
3. Pastikan seluruh file HTML, CSS, JavaScript, dan folder assets tersedia.
4. Jalankan file `index.html` menggunakan Live Server.
5. Website akan terbuka melalui browser.
6. Coba seluruh fitur interaktif yang tersedia pada halaman produk.

Project ini tidak membutuhkan instalasi package tambahan atau koneksi backend untuk menjalankan fitur hardcoded.

### 8. Pengujian Fitur

Pengujian dilakukan secara manual melalui browser dengan skenario berikut:

| No. | Skenario Pengujian | Hasil yang Diharapkan |
|---|---|---|
| 1 | Membuka halaman produk | Informasi dan gambar produk tampil. |
| 2 | Mengklik thumbnail | Gambar utama berubah sesuai thumbnail. |
| 3 | Memilih warna | Informasi warna dan gambar produk diperbarui. |
| 4 | Memilih ukuran | Informasi ukuran dan panduan ukuran diperbarui. |
| 5 | Mengklik tombol (+) | Quantity bertambah satu. |
| 6 | Mengklik tombol (-) | Quantity berkurang satu selama nilainya lebih dari 1. |
| 7 | Mengubah quantity | Subtotal dihitung ulang secara otomatis. |
| 8 | Mengklik Add to Cart | Pesan simulasi penambahan produk ditampilkan. |
| 9 | Mengklik Buy It Now | Pesan bahwa pembelian hanya simulasi ditampilkan. |

**Catatan:** Hasil aktual setiap skenario perlu diverifikasi langsung melalui browser sebelum project dikumpulkan.

### 9. Batasan Project

Project ini menggunakan pendekatan hardcoded product detail dengan beberapa batasan:

- Data produk disimpan langsung pada HTML dan JavaScript.
- Tidak menggunakan Fetch API atau integrasi backend.
- Tidak menggunakan database untuk menyimpan keranjang.
- Add to Cart hanya berupa simulasi menggunakan JavaScript.
- Buy It Now tidak melakukan transaksi atau checkout sungguhan.
- Informasi produk dan harga mengikuti data yang telah disediakan pada halaman.

### 10. Penggunaan AI

Dalam pengerjaan assignment ini, AI digunakan sebagai alat bantu belajar dan pendamping pengerjaan, antara lain:

- Membantu memahami konsep DOM Manipulation.
- Membantu menjelaskan fungsi dan alur kerja kode JavaScript.
- Membantu mengidentifikasi kemungkinan kesalahan pada kode.
- Memberikan saran perbaikan dan pengembangan fitur interaktif.

### 11. Kesimpulan

Melalui pengerjaan Assignment Day 22 ini, saya mempelajari bagaimana JavaScript dapat digunakan untuk membuat halaman website menjadi lebih interaktif.

Saya juga memahami bagaimana DOM Selection, Event Listener, Function, Conditional Statement, dan DOM Manipulation bekerja bersama untuk menangani interaksi pengguna serta memperbarui tampilan website secara dinamis.

Project ini menjadi latihan untuk menerapkan JavaScript pada pengembangan fitur interaktif dalam sebuah halaman product detail.

---

**Assignment:** Day 22 – Building Interactivity Website with JavaScript  
**Project:** Ultimate Bison Boot Sock – Hardcoded Product Detail  
**Repository:** https://github.com/IslahShalahuddin/Mini-Project-JavaScript-DOM 
**Last Commit:** feat:Update README.md
