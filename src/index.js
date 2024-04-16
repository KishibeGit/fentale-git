import renderHome from "./home";
import { menuComponent } from "./menu";
import { form } from "./reservation";
import { contact } from "./contact";

const app = document.createElement("div");
app.classList.add("app");

function rendernavBar() {
    document.body.appendChild(renderHome().nav);

}

function mainComponent(component) {
    app.appendChild(component);
    document.body.appendChild(app);
}

rendernavBar();
mainComponent(renderHome().main);

const navBar = document.querySelector("nav")

navBar.addEventListener("click", (e) => {
    if (e.target.id === "Home") {
      app.innerHTML = "";
      mainComponent(renderHome().main);
    } else if (e.target.id === "Menu") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', menuComponent);
    } else if (e.target.id === "Reservation") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', form);
    }else if (e.target.id === "Contact") {
        const app = document.querySelector(".app");
        app.innerHTML = "";
        app.insertAdjacentHTML('afterbegin', contact);
      }
  });
