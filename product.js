
(() => {
  // ==========================================
  // 1. MENGAMBIL ELEMENT HTML (DOM SELECTION)
  // ==========================================

  const colorInputs = document.querySelectorAll('input[name="color"]');
  const sizeInputs = document.querySelectorAll('input[name="size"]');
  const thumbnails = document.querySelectorAll(".thumbnail");

  const mainImage = document.querySelector("#main-image");
  const imageCount = document.querySelector("#image-count");
  const galleryCaption = document.querySelector("#gallery-caption");

  const colorLabel = document.querySelector("#selected-color");
  const sizeLabel = document.querySelector("#selected-size");
  const sizeHint = document.querySelector(".size-hint");

  const quantityOutput = document.querySelector("#quantity");
  const subtotalOutput = document.querySelector("#subtotal");
  const priceElement = document.querySelector("#product-price");

  const purchaseMessage = document.querySelector("#purchase-message");

  const decreaseButton = document.querySelector('[data-quantity="-1"]');
  const increaseButton = document.querySelector('[data-quantity="1"]');

  const addToCartButton = document.querySelector('[data-purchase="cart"]');
  const buyNowButton = document.querySelector('[data-purchase="buy"]');


  // ==========================================
  // 2. DATA PRODUK (HARDCODED)
  // ==========================================

  const unitPrice = Number(
    priceElement.textContent.replace("$", "")
  );

  const colorImages = {
    Coffee: "assets/bison-coffee.png",
    "Wild Green": "assets/bison-wild-green1.png",
    Black: "assets/bison-black.png",
    Red: "assets/bison-red.png"
  };

  const sizeGuides = {
    "S/M": "S/M: women’s 6–10, men’s 5–8",
    "M/L": "M/L: women’s 10–13, men’s 8–12"
  };


  // ==========================================
  // 3. STATE / DATA SEMENTARA
  // ==========================================

  let selectedColor = document.querySelector(
    'input[name="color"]:checked'
  )?.value || "";

  let selectedSize = document.querySelector(
    'input[name="size"]:checked'
  )?.value || "";

  let quantity = 1;
  let cartQuantity = 0;


  // ==========================================
  // 4. FORMAT HARGA
  // ==========================================

  function formatPrice(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }


  // ==========================================
  // 5. UPDATE INFORMASI PRODUK
  // ==========================================

  function updateSummary() {

    // Update warna dan ukuran
    colorLabel.textContent = selectedColor || "Choose a color";
    sizeLabel.textContent = selectedSize || "Choose a size";

    // Update panduan ukuran
    sizeHint.textContent = sizeGuides[selectedSize] ||
      "Choose a size to see the size guide.";

    // Update jumlah produk
    quantityOutput.textContent = quantity;

    // Menghitung subtotal
    const subtotal = unitPrice * quantity;

    subtotalOutput.textContent = formatPrice(subtotal);

    // Tombol minus tidak aktif jika quantity = 1
    decreaseButton.disabled = quantity <= 1;

  }


  // ==========================================
  // 6. PRODUCT GALLERY
  // ==========================================

  function showPhoto(thumbnail) {

    const imageIndex = [...thumbnails].indexOf(thumbnail);

    // Mengubah gambar utama
    mainImage.src = thumbnail.dataset.image;
    mainImage.alt = thumbnail.dataset.alt || "";

    // Mengubah thumbnail yang aktif
    thumbnails.forEach((photo, index) => {

      const isActive = index === imageIndex;

      photo.classList.toggle("is-active", isActive);

      photo.setAttribute(
        "aria-pressed",
        String(isActive)
      );

    });

    // Mengubah nomor gambar
    imageCount.textContent =
      `${String(imageIndex + 1).padStart(2, "0")} / ${String(thumbnails.length).padStart(2, "0")}`;

    // Mengubah keterangan gambar
    galleryCaption.textContent =
      thumbnail.dataset.alt || "";

  }


  // Event listener untuk thumbnail
  thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

      showPhoto(thumbnail);

    });

  });


  // ==========================================
  // 7. COLOR SELECTION
  // ==========================================

  colorInputs.forEach((input) => {

    input.addEventListener("change", () => {

      selectedColor = input.value;

      // Mencari gambar berdasarkan warna
      const selectedImage = [...thumbnails].find((thumbnail) => {

        return thumbnail.dataset.image === colorImages[selectedColor];

      });

      // Mengubah gambar utama sesuai warna
      if (selectedImage) {
        showPhoto(selectedImage);
      }

      updateSummary();

      purchaseMessage.textContent =
        "Color updated. Demo only — no order has been submitted.";

    });

  });


  // ==========================================
  // 8. SIZE SELECTION
  // ==========================================

  sizeInputs.forEach((input) => {

    input.addEventListener("change", () => {

      selectedSize = input.value;

      updateSummary();

      purchaseMessage.textContent =
        "Size updated. Demo only — no order has been submitted.";

    });

  });


  // ==========================================
  // 9. QUANTITY CONTROL
  // ==========================================

  // Tombol tambah quantity
  increaseButton.addEventListener("click", () => {

    quantity++;

    updateSummary();

    purchaseMessage.textContent =
      "Quantity updated.";

  });


  // Tombol kurang quantity
  decreaseButton.addEventListener("click", () => {

    if (quantity > 1) {

      quantity--;

      updateSummary();

      purchaseMessage.textContent =
        "Quantity updated.";

    }

  });


  // ==========================================
  // 10. ADD TO CART
  // ==========================================

  addToCartButton.addEventListener("click", () => {

    // Memastikan warna dan ukuran sudah dipilih
    if (!selectedColor || !selectedSize) {

      purchaseMessage.textContent =
        "Please choose a color and size before adding this product to the cart.";

      return;

    }

    // Menambahkan quantity ke cart
    cartQuantity += quantity;

    purchaseMessage.textContent =
      `Added ${quantity} product${quantity === 1 ? "" : "s"} to your demo cart. Total items in cart: ${cartQuantity}. No checkout or backend is connected.`;

  });


  // ==========================================
  // 11. BUY IT NOW
  // ==========================================

  buyNowButton.addEventListener("click", () => {

    purchaseMessage.textContent =
      "Buy it now is a demo only — no checkout or order has been submitted.";

  });


  // ==========================================
  // 12. INITIALIZE / TAMPILAN AWAL
  // ==========================================

  // Menampilkan gambar sesuai warna awal
  const initialImage = [...thumbnails].find((thumbnail) => {

    return thumbnail.dataset.image === colorImages[selectedColor];

  });

  if (initialImage) {
    showPhoto(initialImage);
  }

  // Memperbarui informasi produk saat halaman dibuka
  updateSummary();

})();
