// ================= Attempt 1 ========================//

// let mainFunction = () => {
//   const list = document.querySelector("#myList"); // 1: get the list
//   const description = document.querySelector("#myItems").value; // 2: we need to get the value for the input
//   const date = document.querySelector("#myDates").value; // 3: we need to get the value for the input
//   const li = document.createElement("li"); //5 : create li element
//   li.append(description, date); // no inverted commas

//   if (description === "") {
//     // 4: if input is empty
//     return;
//   }

//   const checkbox = document.createElement("input"); // we create an input tag
//   checkbox.classList.add("checklist"); // we create class to the input tag
//   checkbox.type = "checkbox"; // we added a checkbox to

//   const paragraph = document.createElement("p");
//   paragraph.classList.add("paragraph");
//   paragraph.textContent = "Insert text";

//   //   const remove = document.createElement("span");
//   //   remove.classList.add("remove");
//   //   remove.innnterHTML = "&cross;";

//   li.appendChild(checkbox);
//   li.appendChild(paragraph);
//   li.appendChild(remove);
//   list.appendChild(li);

//   //   description.value = ""; // when you key finish it is empty
//   paragraph.addEventListener("click", function () {
//     paragraph.style.backgroundColor = "green";
//   });
//   document.querySelector("#addButton").addEventListener("click", function () {
//     paragraph.removeChild();
//   });
// };

///////////////////////////////////////////////////
// let dateFunction = () => {};

// let;

// document.querySelector("#myList").addEventlistener("click", (e) => {
//     if(e.)
// }

// let removeFunction =()=> {

// }

// function deleteListItem() {
//   var li = this.parentNode.parentNode;
//   li.remove();
// }

// function completeListItem() {
//   var li = this.parentNode.parentNode;
//   li.classList.add("done");
// }

//================= Attempt 2 ==================//
// const list = document.querySelector("#myList"); // 1: get the list
// let mainFunction = () => {
//   const description = document.querySelector("#myItems").value; // 2: we need to get the value for the input
//   const date = document.querySelector("#myDates").value; // 3: we need to get the value for the input
//   const li = document.createElement("li"); //5 : create li element
//   const textNode = document.createTextNode(description, date);
//   li.append(description, date); // no inverted commas
//   list.appendChild(li);

//   //   const checkbox = document.createElement("input"); // we create an input tag
//   //   checkbox.classList.add("checklist"); // we create class to the input tag
//   //   checkbox.type = "checkbox"; // we added a checkbox to

//   //   const paragraph = document.createElement("p");
//   //   paragraph.classList.add("paragraph");
//   //   paragraph.textContent = "Insert text";

//   //   //   const remove = document.createElement("span");
//   //   //   remove.classList.add("remove");
//   //   //   remove.innnterHTML = "&cross;";
// };
// // add "checked symbol when click on a list item"
// list.addEventListener(
//   btn,
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       // Note: must be LI
//       e.target.classList.toggle("checked");
//     }
//   },
//   false
// );

//============================= Attempt 3 ==============================//
let list = document.querySelector("#toDoList"); // 1: get the list
let addButton = document.getElementById("addButton");
let createList = () => {
  let addDescription = document.querySelector("#myItems").value; // 2: we need to get the value for the input
  let addDate = document.querySelector("#myDates").value; // 3: we need to get the value for the input
  //   let inputText = document.createTextNode(addDescription);
  const li = document.createElement("li"); //5 : create li element

  const checkbox = document.createElement("input"); // we create an input tag for complete
  checkbox.classList.add("checklist"); // we create class to the input tag
  checkbox.value = "Complete";
  checkbox.style.backgroundColor = "#34c759";
  checkbox.style.color = "white";
  checkbox.type = "button"; // we added a button

  if (addDescription == "" || addDate == "") {
    alert("Please fill out task");
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> question: I tried to do alert but it does not work?

  const paragraph = document.createElement("p"); // create paragraph for the button
  paragraph.classList.add("paragraph");
  paragraph.textContent = addDescription; // use textContent to set the input field of the text

  //   const paragraphDate = document.createElement("p"); // create paragraph for the button
  //   paragraph.classList.add("paragraphDate");
  //   paragraph.textContent = addDate;

  const spanDate = document.createElement("span");
  spanDate.classList.add("spanDate");
  spanDate.textContent = addDate;

  // span is to represent a remove icon
  const remove = document.createElement("button");
  remove.classList.add("remove"); // classname called remove
  //   remove.innnerHTML = "&cross;"; //
  remove.innerText = "Delete";
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>question: can I create a
  remove.style.backgroundColor = "#ff3b30";
  remove.style.color = "white";
  remove.addEventListener("click", function () {
    remove(li);
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> question: I tried to add the remove function but it doesnt work? Is event.target just synta ?
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>question: Is it possible to carry out do css for DOM?
  // we append all the elements to the li elements
  //   li.appendChild(addDescription, addDate); // no inverted commas
  li.append(paragraph);
  li.appendChild(spanDate); //>>>>>>>>>>>>>>>>>>> Issue i cannot create para date >> change to span date
  li.appendChild(checkbox); // append the variable. >>>>>>>>>>>>>> issue: i had to put it at the end
  li.appendChild(remove);
  list.appendChild(li);

  //   inputText = "";
};
// add "checked symbol when click on a list item"
// the button needs to be called when we press button or enter on input field

// let removeToDo = function (removeElement) {
//   removeElement.parentElement.remove();
// };

addButton.addEventListener("click", createList); //addEventListener method:{object.addEventListener(event Listener, name of funtion)}

//=========== Trying to create prompt ===========//
// addButton.addEventListener("click", function (e) {
//   if ((addDescription = "" || addDate == "")) {
//     alert("Please fill out task");
//     console.log("Please fill");
//   }
// });

// inputText.addEventListener("keypress", function (event) {
//   if (event.key === "enter") {
//     createList();
//   }
// });

//====================== For striking out ==============//
// list.addEventListener(
//   btn,
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       // Note: must be LI
//       e.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// let toggleComplete = function(inputElement){
//     if (inputElement)
// };

//================== created 3 functions below ==================== //
// Multiple list items
// list.addEventListener("click", function (event) {
//   // event: refers to object containing information about the event that just occured.
//   switch (event.target.ClassName) {
//     case "paragraph":
//       showEditInput();
//       break;
//     case "remove":
//       removeToDo(event.target);
//       break;
//   }
// });

// list.addEventListener("change", function (event) {
//   if (event.target.tagName === "input" && event.target.ClassName === "checklist") {
//     toggleComplete();
//   }
// });
