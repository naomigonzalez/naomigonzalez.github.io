let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year

let last_update = new Date(document.lastModified);
document.getElementById("last_update").innerHTML = `<p>Last Updated: ${last_update} </p>`

const d = new Date();
document.getElementById("current_date").innerHTML = d.toDateString();

/*Button css*/
function toggleMenu() {
  console.log("It worked!");
  document.querySelector("#primarynav").classList.toggle("open");
  document.querySelector("#hamburgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerbtn");
x.onclick = toggleMenu;

