document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || message === "") {
      alert("Please fill out all required fields.");
    } else {
      const responseEl = document.getElementById("response");
      responseEl.innerText = `Thanks, ${name}. We'll get back to you soon!`;
      responseEl.style.color = "green";
  
      e.target.reset(); // optional form reset
    }
  });
  document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
  
      const userList = document.getElementById("userList");
      userList.innerHTML = ""; // Clear any previous data
  
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error("Failed to load users:", err);
      alert("Something went wrong while loading users.");
    }
  });
 // FAQ Toggle
 document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", () => {
      question.nextElementSibling.classList.toggle("visible");
    });
  });    
  // Simple Image Slider that rotates every 5 seconds
let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const totalImages = images.length;

function rotateImages() {
  // Hide all images
  images.forEach((img) => {
    img.style.display = 'none';
  });
  
  // Show the current image
  images[currentIndex].style.display = 'block';
  
  // Update currentIndex for the next image
  currentIndex = (currentIndex + 1) % totalImages;
}

// Initialize the slider by showing the first image
rotateImages();

// Rotate images every 5 seconds
setInterval(rotateImages, 5000);

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
