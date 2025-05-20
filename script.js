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

function displayCards () {
    const cardContainer = document.getElementById('card-container')

    gridAssets.forEach((data) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = data.image
        img.alt = data.title
        img.classList.add('card-img')

        const label = document.createElement('div');
        label.classList.add('card-label');

        const title = document.createElement('p')
        title.textContent = data.title
        
        const heartIcon = document.createElement('i')
        heartIcon.setAttribute('aria-label', 'Like button')
        heartIcon.className = 'fa-regular fa-heart like-btn'
        heartIcon.addEventListener('click', () => toggleHeart(heartIcon))

        label.appendChild(title)
        label.appendChild(heartIcon)
        card.appendChild(img)
        card.appendChild(label)
        cardContainer.appendChild(card)
    })
}

function toggleHeart(icon) {
  icon.classList.toggle('fa-regular');
  icon.classList.toggle('fa-solid');

   if (icon.classList.contains('fa-solid')) {
    icon.style.color = 'red'       
  } else {
    icon.style.color = 'transparent'
  }
}


document.addEventListener('DOMContentLoaded', displayCards)


