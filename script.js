document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("blog-container")) loadPosts();
});

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("poss")) || [];
    let container = document.getElementById("blog-container");
    container.innerHTML = posts.map(post => `
        <article>
            <h2>${post.title}</h2>
            <img src="${post.images}" alt="Food Image">
            <p>${post.content}</p>
        </article>
    `).join("");
}

function submitPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let image = document.getElementById("image").files[0];

    if (!title || !content || !image) return alert("All fields required");

    let reader = new FileReader();
    reader.onload = function () {
        let newPost = { title, content, image: reader.result };
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.unshift(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        alert("Recipe posted!");
    };
    reader.readAsDataURL(image);
}

document.addEventListener("DOMContentLoaded", () => {
    preloadPosts();
    loadPosts();
});

// Load default posts if localStorage is empty
function preloadPosts() {
    if (!localStorage.getItem("posts")) {
        let defaultPosts = [];
        for (let i = 1; i <= 10; i++) {
            defaultPosts.push({
                title: `Recipe ${i}`,
                content: `Tasty meal number ${i}. Try this delicious recipe today!`,
                image: `images/${i}.jpg`
            });
        }
        localStorage.setItem("posts", JSON.stringify(defaultPosts));
    }
}

// Load posts from LocalStorage
function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let container = document.getElementById("blog-container");
    container.innerHTML = posts.map(post => `
        <article>
            <h2>${post.title}</h2>
            <img src="${post.image}" class="post-img" onclick="openLightbox('${post.image}')">
            <p>${post.content}</p>
        </article>
    `).join("");
}

// Lightbox Effect
function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Carousel
let currentIndex = 0;

function moveSlide(step) {
    let images = 
document.addEventListener("DOMContentLoaded", () => {
    const recipeItems = document.querySelectorAll('.recipe-item');
    
    recipeItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = "scale(1.05)";
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = "scale(1)";
        });
    });
});

let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll(".gallery-preview img");
    slides.forEach(img => img.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change every 3 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    const editButtons = document.querySelectorAll(".edit-btn");

    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            let recipeText = e.target.previousElementSibling;
            let newText = prompt("Edit Recipe:", recipeText.innerText);
            if (newText) {
                recipeText.innerText = newText;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const editButtons = document.querySelectorAll(".edit-btn");
    const postButtons = document.querySelectorAll(".post-btn");
    const postedRecipesList = document.getElementById("posted-recipes");

    // Load posted recipes from local storage
    function loadPostedRecipes() {
        const recipes = JSON.parse(localStorage.getItem("postedRecipes")) || [];
        postedRecipesList.innerHTML = "";
        recipes.forEach(recipe => {
            const li = document.createElement("li");
            li.innerText = recipe;
            postedRecipesList.appendChild(li);
        });
    }

    // Handle recipe editing
    editButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            let recipeText = e.target.previousElementSibling;
            let newText = prompt("Edit Recipe:", recipeText.innerText);
            if (newText) {
                recipeText.innerText = newText;
            }
        });
    });

    // Handle posting recipes to the front page
    postButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            let recipeText = e.target.previousElementSibling.previousElementSibling.innerText;
            let recipes = JSON.parse(localStorage.getItem("postedRecipes")) || [];

            if (!recipes.includes(recipeText)) {
                recipes.push(recipeText);
                localStorage.setItem("postedRecipes", JSON.stringify(recipes));
                alert("Recipe posted successfully!");
            } else {
                alert("This recipe is already posted.");
            }
        });
    });

    // Load posted recipes if on the cover page
    if (postedRecipesList) {
        loadPostedRecipes();
    }
});

    alert("JavaScript is working!");