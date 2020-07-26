var todoitem_list = document.getElementById("todoitem-list");

//add item function

function addItem() {
  var inputEmpty = document.getElementById("todoitem").value;
  if (inputEmpty == "") {
    alert("Please enter any task!");
  } else {
    todoItem = document.getElementById("todoitem");
    var create_list = document.createElement("li");
    var list_text = document.createTextNode(todoItem.value);
    create_list.appendChild(list_text);

    // create delete button
    var deleteBtn = document.createElement("button");
    var delBtnText = document.createTextNode("");
    deleteBtn.setAttribute("class", "delete-btn fa fa-trash");
    deleteBtn.setAttribute("onclick", "deleteItem(this)");
    deleteBtn.appendChild(delBtnText);

    // create edit button
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("");
    editBtn.setAttribute("class", "edit-btn fa fa-pencil");
    editBtn.setAttribute("onclick", "editItem(this)");
    editBtn.appendChild(editBtnText);

    create_list.appendChild(editBtn);
    create_list.appendChild(deleteBtn);
    todoitem_list.appendChild(create_list);
    todoItem.value = "";
  }
}

//delete item function

function deleteItem(e) {
  e.parentNode.remove();
}

//deleteAll item function

function deleteAll() {
  todoitem_list.innerHTML = "";
}

//edit item function

function editItem(e) {
  var editNodeValue = e.parentNode.firstChild.nodeValue;
  var editItem = prompt("Edit your item:", editNodeValue);
  if (editItem == "") {
    alert("Please enter updated task:");
  } else {
    e.parentNode.firstChild.nodeValue = editItem;
  }
}
