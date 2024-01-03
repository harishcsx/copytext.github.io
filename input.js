const inputValue = () => {
    let userLenn = document.querySelector("#username").value;
    let userLen = Number(userLenn);
    console.log("the input value is : ", userLenn);

    let deafultText = "Exploring the unknown, finding joy in every moment, embracing life's beautiful surprises. ";
    let textLen = deafultText.length;
    let outputText = deafultText.slice(0, userLen);

    if (userLen <= textLen) {
        outputText = '';
    }

    let timesGreater = 2;
    while (true) {
        let newStr = deafultText.repeat(timesGreater);
        if (userLen <= newStr.length) {
            outputText = newStr.slice(0, userLen);
            break;
        } else {
            timesGreater += 1;
        }
    }

    let text = document.querySelector("#content");
    text.innerText = outputText;

    console.log("ln",outputText.length);
};

const reset = () => {
    document.querySelector("#username").value = null;
}

let clicked = document.querySelector("#submitk");
clicked.addEventListener("click", inputValue);

let resetClicked = document.querySelector("#reset");
resetClicked.addEventListener("click",reset)

function copyText() {
    // Select the text to copy
    const textToCopy = document.getElementById('content');
    const textRange = document.createRange();
    textRange.selectNode(textToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textRange);

    // Execute the copy command
    document.execCommand('copy');

    // Clean up the selection
    window.getSelection().removeAllRanges();

    // Optionally, provide feedback to the user
    alert('Text copied to clipboard!');
}


