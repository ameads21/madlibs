//Selecting the items
let genBtn = document.querySelector("#genBtn")

let storyInput = document.querySelector("#storyInput")
let nounInput = document.querySelector("#nounInput")
let verbInput = document.querySelector("#verbInput")
let adjectiveInput = document.querySelector("#adjectiveInput")
let placeInput = document.querySelector("#placeInput")
let checkboxes = document.querySelectorAll("input[name=speech]")


let noun = "noun"
let verb = "verb"
let adjective = "adjective"
let place = "place"



for (test of checkboxes){
  test.addEventListener("click", function(){
    idSet = this.id.replace("Checkbox", "")
    assignedInput = document.querySelector(`#${idSet}Input`)
    if (this.checked){
      assignedInput.style.display = "inline"
    } else {
      assignedInput.style.display = "none"
    }
    console.log(assignedInput)
  })
}



genBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  story = storyInput.value;
  story = story.replace(`${noun}`, `${nounInput.value}`)
  story = story.replace(`${verb}`, `${verbInput.value}`)
  story = story.replace(`${adjective}`, `${adjectiveInput.value}`)
  story = story.replace(`${place}`, `${placeInput.value}`)
  storyInput.value = story

  //Adding the values
  noun = nounInput.value
  verb = verbInput.value
  adjective = adjectiveInput.value
  place = placeInput.value

})