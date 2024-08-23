document.addEventListener('DOMContentLoaded', () => {
  const star = document.querySelector('.right-eye .star');

  function flashStar() {
    const randomTime = Math.random() * 7000 + 3000; // Between 3 and 10 seconds
    setTimeout(() => {
      star.style.opacity = '1';
      setTimeout(() => {
        star.style.opacity = '0';
      }, 100); // Show the star for 0.1 seconds
      flashStar(); // Call the function again to keep the loop going
    }, randomTime);
  }

  flashStar(); // Start the loop
});
