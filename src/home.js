import "././style.css"
import fbIcon from "./icons/facebook_4494479.png"
import igIcon from "./icons/instagram_2111463.png"
import twitterIcon from "./icons/twitter_4494477.png"

export default function renderHome() {
    const nav = document.createElement("nav");
    const main = document.createElement("main");
    const icons = document.createElement("div");
    
    
   let items = ['Home', 'Menu', 'Reservation', 'Contact'];

    // Loop through the array and create an li element for each item
    items.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("li")
        li.id = item
        nav.appendChild(li);
    });

    const section = document.createElement("section")
    const restName = document.createElement("h4");
    const description = document.createElement("div");
    const h4 = document.createElement("h3")
    restName.textContent = "Welcome to Fentale Restaurant";
    description.textContent = "We serve delicious Ethiopian and international cuisine made with fresh, locally-sourced ingredientsis.";
    h4.textContent = "Join Us and discover the true essence of Ethiopian cuisine.";
    description.classList.add("description")
    section.appendChild(restName);
    section.appendChild(description);
    section.appendChild(h4)
    main.appendChild(section)


    let fb = document.createElement("img");
    let ig = document.createElement("img");
    let twitter = document.createElement("img")
    fb.src = fbIcon;
    ig.src = igIcon;
    twitter.src = twitterIcon;

    icons.appendChild(fb);
    icons.appendChild(ig);
    icons.appendChild(twitter);
    icons.classList.add('icons')

    main.appendChild(icons)

    return { nav, main}

}

