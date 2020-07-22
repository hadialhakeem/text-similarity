let addTextButton = document.getElementById("addtextfield")
let heatmapButton = document.getElementById("generateHeatmap")

let textFieldNum = 2;

const textDiv = "<div class='form-group'>" +
                        "<label>String</label>" +
                          "<textarea class='form-control' rows='4'></textarea>"+
                      "</div>"


addTextButton.addEventListener('click', function(event){
    textFieldNum += 1;
    console.log("added")

    // 1. Create <div> element
    let div = document.createElement('div');
    let textField = document.getElementById("textField");

    // 3. Fill it with the content
        div.innerHTML = textDiv;

    textField.append(div)

})

heatmapButton.addEventListener('click', function(event){
   event.preventDefault()
    console.log("generating...")
    fetch('http://127.0.0.1:5000/compute/', {
        method: 'POST',
        body: JSON.stringify({'string 1': 'text 1'})
    })
        .then(results => results.json())
        .then(console.log)
})