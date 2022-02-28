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
  // checkbox.classList.add("checklist"); // we create class to the input tag
  checkbox.id = "completeBtn"; // we create id to the input tag. Note: different format
  checkbox.value = "Complete";
  // checkbox.style.backgroundColor = "#34c759";
  // checkbox.style.color = "white";
  checkbox.type = "button"; // we added a button
  checkbox.addEventListener("click", function () {
    // Below is output: it will change//
    // paragraph.style.textDecoration = "line-through";
    // spanDate.style.textDecoration = "line-through";
    // paragraph.style.backgroundColor = "red";
    // spanDate.style.backgroundColor = "red";

    paragraph.classList.toggle("checkTwo"); // Note: to use classList and not ClassList
    spanDate.classList.toggle("checkTwo");
    // this.parentElement.ClassList.toggle("checkTwo");
    // console.log("Toggle");
  });
  // list.addEventListener(
  //   "click",
  //   function (e) {
  //     if (e.target.tagName === "LI") {
  //       // cannot be LI all the box is strikeout
  //       e.target.classList.toggle("checklistTwo");
  //       // e.target.classList.toggle("spanDate");
  //       // e.target.classList.toggle("paragraph");
  //     }
  //   },
  //   false
  // );

  if (addDescription == "" || addDate == "") {
    alert("Please fill out task");
  } else {
    console.log;
  }
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> question: I tried to do alert but it does not work?

  const paragraph = document.createElement("p"); // create paragraph for the button
  // paragraph.classList.add("paragraph");
  paragraph.id = "paragraph";
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> classList or className also provides class attribute. But classList can access teh CSS.
  (paragraph.textContent = addDescription), addDate; // use textContent to set the input field of the text

  // ================= attempt 1 : strikethrough ===== //
  // paragraph.addEventListener("click", function () {
  //   paragraph.style.textDecoration = "line-through";
  // });
  // Output: it works

  //===== Attemp 2: strikethough ======= //
  // paragraph.addEventListener("click", function () {
  //   const result = classes.toggle("");
  // });

  //   const paragraphDate = document.createElement("p"); // create paragraph for the button
  //   paragraph.classList.add("paragraphDate");
  //   paragraph.textContent = addDate;

  const spanDate = document.createElement("span");
  spanDate.id = "spanDate";
  spanDate.textContent = addDate;

  // span is to represent a remove icon
  const remove = document.createElement("button");
  remove.id = "deleteBtn"; // classname called remove
  //   remove.innnerHTML = "&cross;"; //
  remove.innerText = "Delete";
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>question: can I create a cross?
  remove.style.backgroundColor = "#ff3b30";
  remove.style.color = "white";
  remove.addEventListener("click", function () {
    this.parentElement.remove();
  }); // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> question: I tried to add the remove function but it doesnt work? Is event.target just synta ?
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>question: Is it possible to carry out do css for DOM?
  // we append all the elements to the li elements
  //   li.appendChild(addDescription, addDate); // no inverted commas
  li.append(paragraph);
  li.appendChild(spanDate); //>>>>>>>>>>>>>>>>>>> Issue i cannot create para date >> change to span date
  li.appendChild(checkbox); // append the variable. >>>>>>>>>>>>>> issue: i had to put it at the end
  li.appendChild(remove);
  list.appendChild(li);

  // paragraph.style.width = ;
  document.querySelector("#myItems").value = "";
  document.querySelector("#myDates").value = "";
  addDescription = ""; // Note: this is to let the box be empty
  console.log(addDescription);
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Question: How to check the value of addDescription?
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Question: Why is the
  // addDate.reset = "";
  // li.style.display = flex;
  li.classList.add("toDoList");
};
// add "checked symbol when click on a list item"
// the button needs to be called when we press button or enter on input field

// let removeToDo = function (removeElement) {
//   removeElement.parentElement.remove();
// };

addButton.addEventListener("click", createList); //addEventListener method:{object.addEventListener(event Listener, name of funtion)}

let removeAllBtn = document.getElementById("removeAllBtn");
removeAllBtn.addEventListener("click", function () {
  // li.remove();
  list.remove();
  // addDescription.remove();
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question: why I can remove all the list? even though I should not have access?
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Question: why when I clear finsih and I need to try and save.
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
