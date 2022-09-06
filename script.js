window.addEventListener('keydown', displayKeyCode);

function displayKeyCode(e){
    const keyCodeDiv = document.getElementById("key-code-div");
    const keyCode = document.getElementById("key-code");
    const keyInfo = document.getElementById("key-code-info");
    const h1 = document.getElementsByTagName("h1")[0];

    h1.style.display = "none";
    keyCodeDiv.style.display = "block";

    keyCode.textContent = e.keyCode;
    keyInfo.textContent = e.key;


}