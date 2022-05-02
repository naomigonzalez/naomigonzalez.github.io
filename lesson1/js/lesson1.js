let year = new Date().getFullYear();
document.getElementById("year").innerHTML = year

let last_update = new Date(document.lastModified);
document.getElementById("last_update").innerHTML = `<p>Last Updated: ${last_update} </p>`
