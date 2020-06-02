const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const clickInfo = document.getElementById('clickedInfo');
const hovering = document.getElementById('checkHovered');

button1.addEventListener('click', (event) => {
    clickInfo.innerText = "I'm right";
});

button2.addEventListener('click', (event) => {
    clickInfo.innerText = "No, I'm right";
});

hovering.addEventListener('pointerout', (event) => {
    alert("Hey, I told you not to hover over me!");
});

const loginSubmit = document.getElementById("loginSubmit");
const loginDiv = document.getElementById("login");

loginSubmit.addEventListener("click", (evnet) => {
    event.preventDefault();
    const password = document.getElementById('password').value;
    //console.log(typeof password);
    if(password === '12345678')
        loginDiv.innerHTML = "<h1>Thanks for entering your info</h1>";
    else
        alert(" Password is incorrect")
});

const radius = document.getElementById('radiusSubmit');
const volume = document.getElementById('sphereV');

radius.addEventListener("click", (evnet) => {
    event.preventDefault();
    let radius = parseFloat(document.getElementById('radius').value);
    //console.log(typeof document.getElementById('radius').value);
    let s_volume = (4/3) * Math.PI * Math.pow(radius, 3);
    //s_volume = Math.round(s_volume);
    volume.innerText = "The sphere's volume is " + s_volume;
});
