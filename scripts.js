/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const Frieren_URL = "https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,width=1200,height=675,fit=contain,quality=85/catalog/crunchyroll/ea075b926e1073f4eb016bff8cdb434c.jpe";
const Chainsaw_Man_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbuemozFRy81JDddZLqG1I9fBMemX5JHBpNdBDws65g&s";
const Corey_Sama_URL = "https://static.wikia.nocookie.net/disney/images/4/49/Watch_Cory_on_Disney.jpg/revision/latest?cb=20180308214353";

// This is an array of strings (TV show titles)
let titles = [
    "Chainsaw Man",
    "Frieren: Beyond Journey's end",
    "Corey in the House"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 0) {
            imageURL = Frieren_URL;
        } else if (i == 1) {
            imageURL = Chainsaw_Man_URL;
        } else if (i == 2) {
            imageURL = Corey_Sama_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}
function Reccomend_anime(){
    console.log("Button Clicked!")
    const Input_price = prompt("How much are ya willing to pay for a monthly anime");

    const price = parseFloat(Input_price);

    if(isNaN(price)){
        alert("https://www.youtube.com/watch?v=i8ju_10NkGY")
        return;
    }
    let reccomendation = "";
    
    if(price <= 7.99){
        reccomendation = "https://www.youtube.com/watch?v=i8ju_10NkGY";
        alert(reccomendation)
    }
    else if(price >= 7.99 && price < 8.99){
        reccomendation = "Get Hulu: https://www.hulu.com/plan-builder"
        alert(reccomendation)
    }else if (price >= 8.99 && price < 14.99){
        reccomendation = "Get Crunchyroll: https://www.crunchyroll.com/premium"
        alert(reccomendation)
    }else{
        reccomendation = "Honestly go with your heart"
        alert(reccomendation)
    }
    console.log(Reccomend_anime(reccomendation));
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Try Clicking on the Bean button for a suprise!!!");
}
//below button made by myself outputs a suprise pic of Makima as a bean
function Makima_Buttoon(){
    console.log("Button Clicked!")
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
