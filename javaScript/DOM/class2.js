// const apendChild1 = () => {
//   let tag = document.createElement("h2");
//   let text = document.createTextNode("Zeeshan Khan");
//   let tag1 = document.createElement("div");

//   tag1.appendChild(tag);
//   tag.appendChild(text);

//   document.getElementById("id").appendChild(tag1);
// };

//----------------------------------------
function nameDetails() {
  let div = document.createElement("div");
  let H2 = document.createElement("h2");
  let button = document.createElement("button");
  let buttonTxt = document.createTextNode("for Click ans");
  let question = document.createTextNode("What is Your Name");
  let inputTag = document.createElement("input");
  let btn = document.getElementById("name");
  H2.setAttribute("id", "h2");
  div.setAttribute("class", "secondDiv");
  div.appendChild(H2);
  H2.appendChild(question);
  div.appendChild(button);
  button.appendChild(buttonTxt);
  div.appendChild(inputTag);
  btn.appendChild(div);

  button.addEventListener("click", function () {
    document.getElementById("h2").innerHTML = inputTag.value;
  });
}

const addListNormal = (listName) => {
  const li = document.createElement("li");
  li.innerHTML = listName;
  document.getElementById("ulList").appendChild(li);
};
addListNormal("Java");



const addListOpti = (ListName) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(ListName));
  document.getElementById("ulList").appendChild(li);
};
addListOpti("PHP");
addListOpti("React");
