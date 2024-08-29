const addTask = document.querySelector(".Add");
const list = document.querySelector(".list");

addTask.addEventListener("click", function () {
  const text = document.querySelector("#text").value;
  if (!text) {
    return; // Prevent empty list items
  }

  const newLi = document.createElement("li");
  newLi.style.listStyle = "none";
  newLi.style.position = "relative";
  newLi.style.top = "25px";
  newLi.style.backgroundColor = "grey";
  newLi.style.color = "black";
  newLi.style.width = "430px";
  newLi.style.height = "30px";
  newLi.style.border = "1px solid white";
  newLi.style.borderRadius = "20px ";
  newLi.style.margin = "10px";
  newLi.style.padding = "7px";
  newLi.style.borderRadius = "20px";
  newLi.textContent = text; // Use textContent for better content management

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.style.width = "70px";
  editButton.style.borderRadius = "20px 5px";
  editButton.style.padding = "5px";
  editButton.style.float = "right";
  editButton.style.position = "relative";
  editButton.style.top = "7px";
  editButton.style.right = "25px";
  editButton.style.margin = "4px";
  editButton.style.backgroundColor = "#80ff00";
  editButton.style.color = "white";

  const delButton = document.createElement("button");
  delButton.innerHTML = "Delete";
  delButton.style.width = "70px";
  delButton.style.borderRadius = "10px";
  delButton.style.padding = "5px";
  delButton.style.float = "right";
  delButton.style.position = "relative";
  delButton.style.top = "7px";
  delButton.style.right = "2px"; // Adjust position to avoid overlapping
  delButton.style.margin = "4px";
  delButton.style.backgroundColor = "#ff4d4d";
  delButton.style.Color = "white";

  newLi.appendChild(delButton);
  newLi.appendChild(editButton);
  list.appendChild(newLi);

  // Event listener for edit button
  editButton.addEventListener("click", function () {
    const newText = prompt("Enter new text:");
    if (newText) {
      // Update only if user enters new text
      newLi.textContent = newText;
    }
  });

  // Event listener for delete button
  delButton.addEventListener(
    "click",
    function () {
      list.removeChild(newLi);
    },
    false
  );
});
