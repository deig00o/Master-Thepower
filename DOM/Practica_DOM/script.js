const products = [
    {
      name: 'Portátil Dell Vostro 5490 - Alma Reciclada',
      price: 380,
      stars: 4.1,
      reviews: 120,
      seller: 'Conciencia Cash Converters',
      image: 'https://images.cashconverters.es/productslive/pc-portatil/dell-vostro-5490_CF001_E38529-0_0.jpg?d=small'
    },
    {
      name: 'Portátil ASUS F515J - Renacido con Propósito',
      price: 450,
      stars: 4.3,
      reviews: 180,
      seller: 'Nexus BackMarket',
      image: 'https://images.cashconverters.es/productslive/pc-portatil/asus-f515j_CC090_E251840-0_0.jpg?d=small'
    },
    {
      name: 'Portátil Gaming Gigabyte G5 KD - Espíritu de Batalla Restaurado',
      price: 850,
      stars: 4.7,
      reviews: 300,
      seller: 'Conciencia Cash Converters',
      image: 'https://images.cashconverters.es/productslive/pc-portatil/gigabyte-g5-kd_CC029_E672038-0_0.jpg?d=small'
    },
    {
      name: 'Portátil Gigabyte AX211NGW - Frecuencia Optimizada',
      price: 620,
      stars: 4.5,
      reviews: 95,
      seller: 'Nexus BackMarket',
      image: 'https://images.cashconverters.es/productslive/pc-portatil/gigabyte-ax211ngw_CC066_E437021-0_0.jpg?d=small'
    },
    {
      name: 'Reloj Guess U1258G2 - Portal al Tiempo',
      price: 75,
      stars: 4.0,
      reviews: 50,
      seller: 'Conciencia Cash Converters',
      image: 'https://images.cashconverters.es/productslive/reloj-pulsera-caballero/guess-u1258g2_CF001_E38530-0_0.jpg?d=small'
    },
    {
      name: 'Reloj Timex T2H281 - Medidor de Ciclos',
      price: 45,
      stars: 3.8,
      reviews: 30,
      seller: 'Nexus BackMarket',
      image: 'https://images.cashconverters.es/productslive/reloj-pulsera-caballero/timex-t2h281_CC021_E810084-0_0.jpg?d=small'
    },
    {
      name: 'Reproductor VHS Panasonic - Eco de Memorias',
      price: 60,
      stars: 3.5,
      reviews: 15,
      seller: 'Conciencia Cash Converters',
      image: 'https://images.cashconverters.es/productslive/reproductor-video-vhs/panasonic-nv-sd290_CC013_E1027831-0_0.jpg?d=small'
    },
    {
      name: 'Mini Proyector AKIYO O8 - Ventana a Otras Realidades',
      price: 99,
      stars: 4.2,
      reviews: 70,
      seller: 'Nexus BackMarket',
      image: 'https://images.cashconverters.es/productslive/mini-proyector/akiyo-08_CC094_E73791-0_0.jpg?d=small'
    },
    {
      name: 'Televisor LED Peaq PTV 32H - El Gran Observador',
      price: 150,
      stars: 4.0,
      reviews: 110,
      seller: 'Conciencia Cash Converters',
      image: 'https://images.cashconverters.es/productslive/televisor-led/peaq-ptv-32h-5024c_CC051_E559663-0_0.jpg?d=small'
    },
    {
      name: 'Freidora de Aire Zivama - Transmutador Culinario',
      price: 85,
      stars: 4.6,
      reviews: 200,
      seller: 'Nexus BackMarket',
      image: 'https://images.cashconverters.es/productslive/otros-hogar-cocina/zivama-freidora-de-aire-am403_CC037_E620250-2_0.jpg?d=small'
    }
  ];
  
  const productsContainer = document.querySelector('#products-container');
  
  const productGrid = document.createElement('div');
  productGrid.className = 'reincarnated-grid';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
  
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
  
    const productName = document.createElement('h3');
    productName.textContent = product.name;
  
    const productPrice = document.createElement('p');
    productPrice.className = 'price';
    productPrice.textContent = `${product.price} €`;
  
    const productSeller = document.createElement('p');
    productSeller.className = 'seller';
    productSeller.textContent = `Vendedor: ${product.seller}`;
  
    const productReviews = document.createElement('div');
    productReviews.className = 'reviews';
    productReviews.textContent = `⭐ ${product.stars} (${product.reviews} reseñas)`;
  
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productSeller);
    productCard.appendChild(productReviews);
  
    productGrid.appendChild(productCard);
  });
  
  if (productsContainer) {
    productsContainer.appendChild(productGrid);
  } else {
    console.error('El contenedor #products-container no fue encontrado. La reencarnación no se ha manifestado.');
  }
  
  // Lógica para el rango de precios (ejemplo, puedes expandirlo)
  const priceRangeSlider = document.getElementById('priceRange');
  const currentPriceDisplay = document.getElementById('currentPrice');
  
  if (priceRangeSlider && currentPriceDisplay) {
      currentPriceDisplay.textContent = `€0 - €${priceRangeSlider.value}`;
      priceRangeSlider.oninput = function() {
          currentPriceDisplay.textContent = `€0 - €${this.value}`;
      }
  }