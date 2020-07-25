let addTextButton = document.getElementById("addtextfield");
let textForm = document.getElementById('textForm');

let textFieldNum = 0;


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
    //"<img src='MatrixLogos/"+add[3]+"' width='100' height='25'/>";
    div.innerHTML = "<label for='id-" + textFieldNum.toString() + "'><h5>" + 'String ' + textFieldNum.toString() + "</h5></label>" +
        "<textarea class='form-control' rows='4' name='String "+ textFieldNum.toString() + "' id='id-" + textFieldNum.toString() + "'></textarea>"

    if (textFieldNum > 2){
        div.innerHTML += "<button type='button' class='btn btn-danger mt-1' id='"+textFieldNum.toString()+"' onclick='removeDiv(id)'> Remove </button>";
    }


    textField.append(div)
}

function removeDiv(num) {
    let div = document.getElementById(num);
    div.remove();
}

function appendImg(divID, img_src) {
    let div = document.getElementById(divID)
    let new_image = document.createElement('img')
    new_image.src = img_src

    div.append(new_image)
}

createTextField()
createTextField()