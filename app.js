const menuHamburger = document.querySelector(".burger")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


let form = document.getElementById("form");
let card = document.getElementById("card");
let arrStuData = [];
if (localStorage.stuData != null) {
    arrStuData = JSON.parse(localStorage.stuData);
    render();
}


form.addEventListener("submit", function (e) {
    let fname = e.target.fname.value;
    let birth = e.target.birth.value;
    let gender = e.target.gender.value;
    let major = e.target.major.value;
    let number = e.target.number.value;
    let img = e.target.img.value;
    console.log(fname, birth, gender, major, number, img);

    function Student(fname, birth, gender, major, number, img) {
        this.fname = fname;
        this.birth = birth;
        this.gender = gender;
        this.major = major;
        this.number = number;
        this.img = img;
    }
    let studentObject = new Student(fname, birth, gender, major, number, img);
    arrStuData.push(studentObject)
    localStorage.setItem("stuData", JSON.stringify(arrStuData))

    render();
    form.reset();
    console.log(arrStuData);
})


function render() {
    for (let i = 0; i < arrStuData.length; i++) {

        let imgStu = document.createElement("img")
        imgStu.src = `${arrStuData[i].img}`
        card.appendChild(imgStu)

        let div = document.createElement("div");
        div.className = "container"

        let h3 = document.createElement("h3");
        h3.textContent = `${arrStuData[i].fname}`;
        div.appendChild(h3);

        let pbirth = document.createElement("p");
        pbirth.textContent = `${arrStuData[i].birth}`;
        div.appendChild(pbirth);

        let pgender = document.createElement("p");
        pgender.textContent = `${arrStuData[i].gender}`;
        div.appendChild(pgender);

        let pmajor = document.createElement("p");
        pmajor.textContent = `${arrStuData[i].major}`;
        div.appendChild(pmajor);

        let pnumber = document.createElement("p");
        pnumber.textContent = `${arrStuData[i].number}`;
        div.appendChild(pnumber);

        card.appendChild(div);
    }
}
