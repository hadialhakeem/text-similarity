let addTextButton = document.getElementById("addtextfield")
let heatmapButton = document.getElementById("generateHeatmap")

let textFieldNum = 2;

addTextButton.addEventListener('click', function(event){
    textFieldNum += 1;
    console.log("added")

    // 1. Create <div> element
    let div = document.createElement('div');
    let textField = document.getElementById("textField");

    div.className = 'form-group';

    // 3. Fill it with the content
        div.innerHTML = "<label>" + 'String ' + textFieldNum.toString() + "</label>" +
            "<textarea class='form-control' rows='4'></textarea>" +
            "<button type='button' class='btn btn-danger mt-1'> Remove </button>";

    textField.append(div)

})

heatmapButton.addEventListener('submit', function(event){
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