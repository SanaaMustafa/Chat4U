var socket = io();
var users = [
  {
    name: "thanaa"
  }
];
function addemoj(e) {
  document.getElementById("input").value += e;
}
var names = ["thanaa", "hala", "heba", "sara"];
var colors = ["green", "red", "yellow", "blue"];
var name = "";
var color = "";
function takename() {
  let nameval = document.getElementById("name").value;
  if (names.includes(nameval)) {
    name = nameval;
    color = colors[names.indexOf(name)];
    document.getElementById("con").style.display = "none";
    document.getElementById("form").style.display = "flex";
  }
}

var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (input.value) {
    let msg = {
      name: name,
      color: color,
      value: input.value
    };
    socket.emit("chat message", msg);
    input.value = "";
  }
});

socket.on("chat message", function(msg) {
  var item = document.createElement("li");
  item.innerHTML =
    "<span style='color:" +
    msg.color +
    ";'>" +
    msg.name +
    " : </span>" +
    " " +
    msg.value;
  // item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
