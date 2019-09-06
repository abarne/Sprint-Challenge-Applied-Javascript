// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');

function newCard(obj) {
	//create elements
	let newCard = document.createElement('div'),
		newHeadline = document.createElement('div'),
		newAuthor = document.createElement('div'),
		imgContainer = document.createElement('div'),
		newImg = document.createElement('img'),
		authorsName = document.createElement('span');

	//set classes
	newCard.classList.add('card');
	newHeadline.classList.add('headline');
	newAuthor.classList.add('author');
	imgContainer.classList.add('img-container');

	//append children
	newCard.appendChild(newHeadline);
	newCard.appendChild(newAuthor);
	newAuthor.appendChild(imgContainer);
	imgContainer.appendChild(newImg);
	newAuthor.appendChild(authorsName);

	//set content
	newHeadline.textContent = obj.headline;
	newImg.src = obj.authorPhoto;
	authorsName.textContent = obj.authorName;

	return newCard;
}

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then((response) => {
		console.log(response);
		//console.log(Object.values(response.data.articles));
		Object.values(response.data.articles).map((item) => {
			item.map((item2) => {
				//console.log(item2);
				cardContainer.appendChild(newCard(item2));
			});
		});
	})
	.catch((error) => {
		console.log('The data was not returned', error);
	});
