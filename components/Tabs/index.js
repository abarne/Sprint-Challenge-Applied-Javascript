// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topicContainer = document.querySelector('.topics');

function tabComponent(arrItem) {
	//create elements
	let topic = document.createElement('div');

	//add classes
	topic.classList.add('tab');

	//add content
	topic.textContent = arrItem;

	return topic;
}

axios
	.get('https://lambda-times-backend.herokuapp.com/topics')
	.then((response) => {
		//console.log(response);
		response.data.topics.map((item) => {
			topicContainer.appendChild(tabComponent(item));
		});
	})
	.catch((error) => {
		console.log('The data was not returned, ', error);
	});
