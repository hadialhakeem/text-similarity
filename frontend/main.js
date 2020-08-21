let addTextButton = document.getElementById("addtextfield");
let textForm = document.getElementById('textForm');
let submitButton = document.getElementById('generateHeatmap');

let textFieldNum = 0;


textForm.addEventListener('submit', function(e){
    e.preventDefault();


    submitButton.setAttribute('disabled', 'disabled');
    submitButton.innerHTML = "<span class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"width: 1.5rem; height: 1.5rem;\" aria-hidden=\"true\"></span>\n" +
                             "&nbsp; Generating...";

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
            submitButton.innerHTML = "Generate Heatmap!";
            submitButton.removeAttribute('disabled');
            let JsonResult = JSON.parse(text);
            let imgHTML = JsonResult['img'];
            let imgDiv = 'heatmap_image';
            updateImg(imgDiv, imgHTML);
        })
})


addTextButton.addEventListener('click', function(){
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

function updateImg(divID, img) {
    let div = document.getElementById(divID);
    div.innerHTML = img;
}

createTextField();
createTextField();