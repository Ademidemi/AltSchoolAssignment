//An array of objects containing image and title data for the cards
const gridAssets = [
    {
        image: './assets/images/Vol-.Thoren.svg', 
        title: 'Val Thorens'
    },
 
    {
        image: './assets/images/Restauurant.svg', 
        title: 'Restaurant Terrace'
    },

    {
        image: './assets/pexels-kassandre-pedro-8639743 1 (2).svg', 
        title: 'An Outdoor Cafe'
    },

    {
        image: './assets/images/Long-Bridg.svg', 
        title: 'A Very Long Bridge Over the Forest'
    },

    {
        image: './assets/images/Tunnel-.svg', 
        title: 'Tunnel with Morning Light'
    },

    {
        image: './assets/images/Mountain-House.svg', 
        title: 'Mountain House'
    },
]

//Function to display the cards on the page
function displayCards () {
    const cardContainer = document.getElementById('card-container')

    //Iterate over the gridAssets array and create a card for each item
    gridAssets.forEach((data) => {
        // Create a new div element for the card
        const card = document.createElement('div')
        // Add the 'card' class to the div
        card.classList.add('card')

        // Create an img element for the card image
        const img = document.createElement('img')
        // Set the image source
        img.src = data.image  
        // Set the image alt text
        img.alt = data.title
        img.classList.add('card-img')

        const label = document.createElement('div');
        label.classList.add('card-label');

        const title = document.createElement('p')
        title.textContent = data.title
        
        // Create an i element for the heart icon
        const heartIcon = document.createElement('i')
        // Set the aria-label attribute
        heartIcon.setAttribute('aria-label', 'Like button')
        heartIcon.className = 'fa-regular fa-heart like-btn'
        // Add an event listener for the heart icon 
        heartIcon.addEventListener('click', () => toggleHeart(heartIcon))

        // Append the title and heart icon to the label div
        label.appendChild(title)
        label.appendChild(heartIcon)
        // Append the img and label to the card div
        card.appendChild(img)
        card.appendChild(label)
        // Append the card to the container
        cardContainer.appendChild(card)
    })
}

// Function to toggle the heart icon on click
function toggleHeart(icon) {
  //Toggle the 'fa-regular' and 'fa-solid' classes
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');

   //Change the color of the heart icon based on the class
   if (icon.classList.contains('fa-solid')) {
    icon.style.color = 'red'       
  } else {
    icon.style.color = ''
  }
}

// Event listener to call the displayCards function
document.addEventListener('DOMContentLoaded', displayCards)


