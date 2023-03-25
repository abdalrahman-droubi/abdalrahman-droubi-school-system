const menuHamburger = document.querySelector(".burger")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


let form = document.getElementById("form");
let table = document.getElementById("resultTable");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();
    let row = document.createElement("tr");

    let num = document.createElement("td");
    num.textContent = "*"
    row.appendChild(num);

    let name = document.createElement("td");
    name.textContent = e.target.fname.value;
    row.appendChild(name);

    let date = document.createElement("td");
    date.textContent = e.target.birth.value;
    row.appendChild(date);

    let gender = document.createElement("td");
    gender.textContent = e.target.gender.value;
    row.appendChild(gender);

    let number = document.createElement("td");
    number.textContent = e.target.number.value;
    row.appendChild(number);

    let grade = document.createElement("td");
    grade.textContent = e.target.grade.value;
    row.appendChild(grade);

    table.appendChild(row);
    form.reset();
}
