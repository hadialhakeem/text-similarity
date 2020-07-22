let addTextButton = document.getElementById("addtextfield")

var textDiv = " <div class=\"form-group\" id=\"last\">\n" +
    "                    <label>String 2</label>\n" +
    "                      <textarea class=\"form-control\" rows=\"4\"></textarea>\n" +
    "                  </div>"

addTextButton.addEventListener('click', function(event){
    // 1. Create <div> element
    let div = document.createElement('div');
    let textField = document.getElementById("textField");

    // 3. Fill it with the content
        div.innerHTML = textDiv;

    textField.append(div)
})