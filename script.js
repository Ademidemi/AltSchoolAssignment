//An array of objects containing image and title data for the cards
const gridAssets = [
  {
    image: "./assets/images/Vol-.Thoren.svg",
    title: "Val Thorens",
  },

  {
    image: "./assets/images/Restauurant.svg",
    title: "Restaurant Terrace",
  },

  {
    image: "./assets/pexels-kassandre-pedro-8639743 1 (2).svg",
    title: "An Outdoor Cafe",
  },

  {
    image: "./assets/images/Long-Bridg.svg",
    title: "A Very Long Bridge Over the Forest",
  },

  {
    image: "./assets/images/Tunnel-.svg",
    title: "Tunnel with Morning Light",
  },

  {
    image: "./assets/images/Mountain-House.svg",
    title: "Mountain House",
  },
];

//Function to display the cards on the page
function displayCards() {
  const cardContainer = document.getElementById("card-container");

  //Iterate over the gridAssets array and create a card for each item
  gridAssets.forEach((data) => {
    // Create a new div element for the card
    const card = document.createElement("div");
    // Add the 'card' class to the div
    card.classList.add("card");

    // Create an img element for the card image
    const img = document.createElement("img");
    // Set the image source
    img.src = data.image;
    // Set the image alt text
    img.alt = data.title;
    img.classList.add("card-img");
    img.addEventListener("click", () => openImageModal(data.image));

    const label = document.createElement("div");
    label.classList.add("card-label");

    const title = document.createElement("p");
    title.textContent = data.title;

    // Create an i element for the heart icon
    const heartIcon = document.createElement("i");
    // Set the aria-label attribute
    heartIcon.setAttribute("aria-label", "Like button");
    heartIcon.className = "fa-regular fa-heart like-btn";
    // Add an event listener for the heart icon
    heartIcon.addEventListener("click", () => toggleHeart(heartIcon));

    // Append the title and heart icon to the label div
    label.appendChild(title);
    label.appendChild(heartIcon);
    // Append the img and label to the card div
    card.appendChild(img);
    card.appendChild(label);
    // Append the card to the container
    cardContainer.appendChild(card);
  });
}

// Function to toggle the heart icon on click
function toggleHeart(icon) {
  //Toggle the 'fa-regular' and 'fa-solid' classes
  icon.classList.toggle("fa-regular");
  icon.classList.toggle("fa-solid");

  //Change the color of the heart icon based on the class
  if (icon.classList.contains("fa-solid")) {
    icon.style.color = "red";
  } else {
    icon.style.color = "";
  }
}
// function to open the image modal
function openImageModal(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  if (!modal || !modalImg) {
    console.error("Modal or image not found");
    return;
  }

  modalImg.src = src;
  modal.style.display = "flex";
  modal.classList.add("show");
}

//function to close image modal
function closeImageModal(event) {
  if (event.target.id === "image-modal") {
    const modal = document.getElementById("image-modal");
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
}

//event listener for for escape key

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("image-modal");
    const newPostModal = document.getElementById("newPostModal");
    modal.classList.remove("show");
    newPostModal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
      newPostModal.style.display = "none";
    }, 300);
  }
});

// Event listener to call the displayCards function
document.addEventListener("DOMContentLoaded", displayCards);
// Event listener to close modal on click outside the image
document
  .getElementById("image-modal")
  .addEventListener("click", closeImageModal);

// ===============================
// Modal Handling and Event Listeners
// ===============================
// Get DOM elements
const editProfileBtn = document.getElementById("editProfileBtn");
const editProfileModal = document.getElementById("editProfile");
const editProfileForm = document.getElementById("editProfileForm");
const profileNameDisplay = document.querySelector(".bio h2");
const profileTitleDisplay = document.querySelector(".bio .title");
const avatarDisplay = document.querySelector(".avatar");

const newPostBtn = document.querySelector(".new-post");
const newPostModal = document.getElementById("newPostModal");
const newPostForm = document.getElementById("newPostForm");
const cardContainer = document.getElementById("card-container");

// Show modals
editProfileBtn.addEventListener("click", () => {
  editProfileModal.style.display = "block";
});

newPostBtn.addEventListener("click", () => {
  newPostModal.style.display = "block";
});

// Handle Edit Profile submission
editProfileForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = editProfileForm.querySelector('input[type="text"]');
  const bioInput = document.getElementById("profileBio");
  const fileInput = document.getElementById("profilePictureInput");

  const newName = nameInput.value.trim();
  const newBio = bioInput.value.trim();
  const newImageFile = fileInput.files[0];

  if (newName.length >= 2 && newBio.length >= 10) {
    profileNameDisplay.textContent = newName;
    profileTitleDisplay.textContent = newBio;

    if (newImageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        avatarDisplay.src = e.target.result;
      };
      reader.readAsDataURL(newImageFile);
    }

    editProfileForm.reset();
    editProfileModal.style.display = "none";
  } else {
    document.getElementById("profileError").textContent =
      "Name or Bio is too short.";
  }
});

// Handle New Post submission
newPostForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const postImageInput = document.getElementById("postImage");
  const postTitleInput = document.getElementById("postTitle");

  const file = postImageInput.files[0];
  const title = postTitleInput.value.trim();

  if (file && title.length >= 2) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = event.target.result;
      img.alt = title;
      img.classList.add("card-img");
      img.addEventListener("click", () => openImageModal(event.target.result));

      const label = document.createElement("div");
      label.classList.add("card-label");

      const titleElem = document.createElement("p");
      titleElem.textContent = title;

      const heartIcon = document.createElement("i");
      heartIcon.setAttribute("aria-label", "Like button");
      heartIcon.className = "fa-regular fa-heart like-btn";
      heartIcon.addEventListener("click", () => toggleHeart(heartIcon));

      label.appendChild(titleElem);
      label.appendChild(heartIcon);
      card.appendChild(img);
      card.appendChild(label);

      cardContainer.insertBefore(card, cardContainer.firstChild); // Add new post at top

      newPostForm.reset();
      newPostModal.style.display = "none";
    };

    reader.readAsDataURL(file);
  } else {
    document.getElementById("postError").textContent =
      "Please upload an image and enter a valid title.";
  }
});

// The closing buttons
let closeBtn = document.getElementById("closeButton");
closeBtn.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

let closeBtn2 = document.querySelector(".closeButton");
closeBtn2.addEventListener("click", () => {
  newPostModal.style.display = "none";
});

// clicking the outside the modal to exit the editProfilemodal
editProfileModal.addEventListener("click", (event) => {
  if (event.target === editProfileModal) {
    document.querySelector(".modal").style.display = "none";
  }
});
newPostModal.addEventListener("click", (event) => {
  if (event.target === newPostModal) {
    newPostModal.style.display = "none";
  }
});
