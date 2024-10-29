document.addEventListener("DOMContentLoaded", () => {
  const images = [
      "image1.jfif",
      "image2.jfif",
      "image3.jfif",
      "image4.jfif",
      "image5.jfif"
  ];

  let currentIndex = 0;

  setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("slide").src = images[currentIndex];
  }, 3000); // 3000ms = 3 seconds
});
