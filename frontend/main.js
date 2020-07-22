let addTextButton = document.getElementById("addtextfield")
let heatmapButton = document.getElementById("generateHeatmap")

let textFieldNum = 2;

addTextButton.addEventListener('click', function(event){
    createTextField()
})

heatmapButton.addEventListener('click', function(event){
   event.preventDefault()
    const apiUrl = 'http://127.0.0.1:5000/compute'

    console.log("generating...")
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({'string 1': 'text 1'})
    })
        .then(results => results.json())
        .then(console.log)
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
        "<textarea class='form-control' rows='4'></textarea>" +
        "<button type='button' class='btn btn-danger mt-1 remove' onclick='removeDiv(textFieldNum)'> Remove </button>";

    textField.append(div)
}

function removeDiv(num) {
    let div = document.getElementById(num.toString())
    div.remove()
}