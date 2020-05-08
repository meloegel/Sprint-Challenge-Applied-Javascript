// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(headerInfo) {
    const {headerDate, headerH1, temps} = headerInfo
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)
    header.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')
    date.textContent = headerDate
    h1.textContent = headerH1
    temp.textContent = temps
    return header
}

addHeader = Header({headerDate:'SMARCH 28, 2019', headerH1:'Lambda Times', temps: '98°'})
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(addHeader)