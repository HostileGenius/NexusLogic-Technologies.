function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function addToCart(productName, price) {
    alert(`Added ${productName} ($${price}) to your cart!`);
  }
  