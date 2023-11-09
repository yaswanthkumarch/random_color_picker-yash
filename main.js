const generateButton = document.querySelector(".btn");

const colorGenerator = () => {
    const header = document.querySelector("body");
    //const colorCode = document.querySelector(".ccode");

    let colorValue = Math.random().toString(16).slice(2, 8);

    //colorCode.innerText = `#${colorValue}`;
    header.style.background = `#${colorValue}`;
};

document.addEventListener("DOMContentLoaded", colorGenerator);
generateButton.addEventListener("click", colorGenerator);