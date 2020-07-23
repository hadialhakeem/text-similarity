let addTextButton = document.getElementById("addtextfield");
let textForm = document.getElementById('textForm');

let textFieldNum = 2;


textForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("submit");

    const formData = new FormData(this);
    const apiUrl = 'http://127.0.0.1:5000/compute';

    console.log("generating...")
    fetch(apiUrl, {
        method: 'post',
        body: formData
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            console.log(text)
        })
})


addTextButton.addEventListener('click', function(event){
    createTextField();
})



function createTextField(){
    textFieldNum += 1;
    console.log("added")

    // 1. Create <div> element
    let div = document.createElement('div');
    let textField = document.getElementById("textField");

    // 2. Declare class
    div.className = 'form-group';
    div.id = textFieldNum.toString()

    // 3. Fill it with the content
    div.innerHTML = "<label><h5>" + 'String ' + textFieldNum.toString() + "</h5></label>" +
        "<textarea class='form-control' rows='4'></textarea>" +//script here
        "<button type='button' class='btn btn-danger mt-1' onclick='removeDiv(document.getElementById(textFieldNum).id)'> Remove </button>";

    textField.append(div)
}

function removeDiv(num) {
    let div = document.getElementById(num);
    div.remove();
}