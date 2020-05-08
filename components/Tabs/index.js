// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
   tabInfo(response.data.topics)

}).catch(err => {
    console.log(err)
})

let tab = document.querySelector('.topics')

function tabInfo(topics) {
    function tabCreator(tabInfo) {
        const topic = document.createElement('div')
        const links = document.createElement('a')
        topic.classList.add('tab')
        links.classList.add('topics') 
        links.textContent = tabInfo
        topic.appendChild(links)
        return topic
    }
    topics.forEach(tabs => {
        tab.appendChild(tabCreator(tabs))
    })
}
// const [top1, top2, top3, top4, top5] = topics
// const topicOne = document.createElement('div')
// const topicTwo = document.createElement('div')
// const topicThree = document.createElement('div')
// const topicFour = document.createElement('div')
// const topicFive = document.createElement('div')
// topicOne.appendChild(topicTwo)
// topicTwo.appendChild(topicThree)
// topicThree.appendChild(topicFour)
// topicFour.appendChild(topicFive)
// topicOne.classList.add('tab')
// topicTwo.classList.add('tab')
// topicThree.classList.add('tab')
// topicFour.classList.add('tab')
// topicFive.classList.add('tab')
// topicOne.textContent = `${top1}`
// topicTwo.textContent = `${top2}`
// topicThree.textContent = `${top3}`
// topicFour.textContent = `${top4}`
// topicFive.textContent = `${top5}`
// return topicOne
// }


