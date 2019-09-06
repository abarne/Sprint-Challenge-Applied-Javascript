// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//var todaysDate = new Date();

let headerContainer = document.querySelector('.header-container');

function Header() {
	//create elements
	let newHeader = document.createElement('div'),
		spanDate = document.createElement('span'),
		lambdaTimes = document.createElement('h1'),
		spanTemp = document.createElement('span');

	//add classes
	newHeader.classList.add('header');
	spanDate.classList.add('date');
	spanTemp.classList.add('temp');

	//append children
	newHeader.appendChild(spanDate);
	newHeader.appendChild(lambdaTimes);
	newHeader.appendChild(spanTemp);

	//add content
	spanDate.textContent = 'Today';
	lambdaTimes.textContent = 'Lambda Times';
	spanTemp.textContent = '98\xB0';

	return newHeader;
}

headerContainer.appendChild(Header());
