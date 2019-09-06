/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let carouselContainer = document.querySelector('.carousel-container');
let currentIndex = 1;

function slideShow() {
	//create elements
	let newCarousel = document.createElement('div'),
		leftButton = document.createElement('div'),
		img1 = document.createElement('img'),
		img2 = document.createElement('img'),
		img3 = document.createElement('img'),
		img4 = document.createElement('img'),
		rightButton = document.createElement('div');

	//assign classes
	newCarousel.classList.add('carousel');
	leftButton.classList.add('left-button');
	rightButton.classList.add('right-button');
	img1.classList.add('img1');

	//append children
	newCarousel.appendChild(leftButton);
	newCarousel.appendChild(img1);
	newCarousel.appendChild(img2);
	newCarousel.appendChild(img3);
	newCarousel.appendChild(img4);
	newCarousel.appendChild(rightButton);

	//add content
	leftButton.textContent = '<';
	rightButton.textContent = '>';
	img1.src = './assets/carousel/mountains.jpeg';
	img2.src = './assets/carousel/computer.jpeg';
	img3.src = './assets/carousel/trees.jpeg';
	img4.src = './assets/carousel/turntable.jpeg';

	//add event listeners

	img1.style.display = 'block';

	leftButton.addEventListener('click', (e) => {
		if (currentIndex === 1) {
			currentIndex = 4;
		} else {
			currentIndex--;
		}
		let o = 1;
		//set all images to no display
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';

		switch (currentIndex) {
			case 1:
				img1.style.display = 'block';
				break;
			case 2:
				img2.style.display = 'block';
				break;
			case 3:
				img3.style.display = 'block';
				break;
			case 4:
				img4.style.display = 'block';
				break;
		}
	});

	rightButton.addEventListener('click', (e) => {
		if (currentIndex === 4) {
			currentIndex = 1;
		} else {
			currentIndex++;
		}
		//set all images to no display
		img1.style.display = 'none';
		img2.style.display = 'none';
		img3.style.display = 'none';
		img4.style.display = 'none';

		switch (currentIndex) {
			case 1:
				img1.style.display = 'block';
				break;
			case 2:
				img2.style.display = 'block';
				break;
			case 3:
				img3.style.display = 'block';
				break;
			case 4:
				img4.style.display = 'block';
				break;
		}
	});

	return newCarousel;
}

carouselContainer.appendChild(slideShow());
