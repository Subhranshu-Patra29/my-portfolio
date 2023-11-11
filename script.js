
const dynamicText = document.querySelector("section span");
const words = ["Web Developer","Java - Python Programmer","Video Editor"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length)
    {//writing
        charIndex++;
        setTimeout(typeEffect,100);
    }
    else if(isDeleting && charIndex>0)
    {//deleting 
        charIndex--;
        setTimeout(typeEffect,70);
    }
    else
    {//next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(typeEffect,1000);
    }
}

typeEffect();