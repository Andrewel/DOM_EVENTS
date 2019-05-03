//import "./styles.css";

//localStorage
/*Color Tools */
if (localStorage.getItem(`CurrentColor`) !== null) {
  document.querySelector(
    "#CurrentColor"
  ).style.backgroundColor = localStorage.getItem("CurrentColor");
  document.querySelector("#prev").style.backgroundColor = localStorage.getItem(
    "PrevColor"
  );
}
if (localStorage.getItem(`PaletteIcon`) !== null) {
  document.querySelector("#iconPalette").style.color = localStorage.getItem(
    `PaletteIcon`
  );
  document.querySelector("#palette").value = localStorage.getItem(
    `PaletteIcon`
  );
}

/*Canvas Objects */
for (let i = 1; i < 10; i++) {
  if (localStorage.getItem(`#Canvas${i}`) !== null) {
    document.querySelector(
      `#Canvas${i}`
    ).style.backgroundColor = localStorage.getItem(`#Canvas${i}`);
  }
  if (localStorage.getItem(`Canvas${i}Border`) !== null) {
    document.querySelector(
      `#Canvas${i}`
    ).style.borderRadius = localStorage.getItem(`Canvas${i}Border`);
  }
}

const PaintBucket = document.querySelector("#PaintBucket");
const ChooseColor = document.querySelector("#ChooseColor");
const Move = document.querySelector("#Move");
const Transform = document.querySelector("#Transform");
//
const PaintBucketTool = function(e) {
  Transform.style.color = "black";
  Move.style.color = "black";
  ChooseColor.style.color = "black";
  PaintBucket.style.color = "green";
  document.body.style.cursor = `url("https://cdn1.imggmi.com/uploads/2019/4/28/6f7fd10cbefa890abfc0472ab80771ca-full.png"), auto`;
  //Paint Bucket Color
  let elements = document.querySelectorAll("canvas");

  for (let i = 0; i < elements.length; i++) {
    //elements[i].style.backgroundColor = "#af7aa5";
    // elements[i].onclick = function() {};
    elements[i].removeEventListener("click", dragElement, false);
    elements[i].removeEventListener("click", transform, false);
    elements[i].removeEventListener("click", choosecolor, false);
    elements[i].addEventListener("click", paintbucket, false);
  }
};
const paintbucket = function(e) {
  let element = e.target.id;
  alert(e.target.id);
  if (
    element !== "CurrentColor" &&
    element !== "prev" &&
    element !== "Color1" &&
    element !== "Color2"
  ) {
    document.querySelector(
      `#${element}`
    ).style.backgroundColor = document.querySelector(
      "#CurrentColor"
    ).style.backgroundColor;
    localStorage.setItem(
      `#${element}`,
      `${document.querySelector("#CurrentColor").style.backgroundColor}`
    );
  }
};
const ChooseColorTool = function(e) {
  Transform.style.color = "black";
  Move.style.color = "black";
  PaintBucket.style.color = "black";
  ChooseColor.style.color = "green";
  document.body.style.cursor = `url("https://cdn1.imggmi.com/uploads/2019/4/28/5249a7745e9486b0a234efb6f737d4ba-full.png"), auto`;
  //Choose Color
  let elements = document.querySelectorAll("canvas");

  for (let i = 0; i < elements.length; i++) {
    elements[i].removeEventListener("click", dragElement, false);
    elements[i].removeEventListener("click", transform, false);
    elements[i].removeEventListener("click", paintbucket, false);
    elements[i].addEventListener("click", choosecolor, false);
  }
};
const choosecolor = function(e) {
  let element = e.target.id;
  alert(e.target.id);
  alert(document.querySelector(`#${element}`).style.backgroundColor);
  document.querySelector(
    "#prev"
  ).style.backgroundColor = document.querySelector(
    "#CurrentColor"
  ).style.backgroundColor;
  document.querySelector(
    "#CurrentColor"
  ).style.backgroundColor = document.querySelector(
    `#${element}`
  ).style.backgroundColor;
  localStorage.setItem(
    `CurrentColor`,
    `${document.querySelector("#CurrentColor").style.backgroundColor}`
  );
  localStorage.setItem(
    `PrevColor`,
    `${document.querySelector("#prev").style.backgroundColor}`
  );
};
const MoveTool = function(e) {
  Transform.style.color = "black";
  ChooseColor.style.color = "black";
  PaintBucket.style.color = "black";
  Move.style.color = "green";
  document.body.style.cursor = `url("https://cdn1.imggmi.com/uploads/2019/4/28/60bbc56c679bd1dc9d8def2ca0486204-full.png"), auto`;
  // Move:
  let elements = document.querySelectorAll("canvas");

  for (let i = 0; i < elements.length; i++) {
    elements[i].removeEventListener("click", transform, false);
    elements[i].removeEventListener("click", paintbucket, false);
    elements[i].removeEventListener("click", choosecolor, false);
    dragElement(elements[i]);
  }
};
const dragElement = function(el) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  el.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    el.style.top = el.offsetTop - pos2 + "px";
    el.style.left = el.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};
const TransformTool = function(e) {
  Move.style.color = "black";
  ChooseColor.style.color = "black";
  PaintBucket.style.color = "black";
  Transform.style.color = "green";
  document.body.style.cursor = `url("https://cdn1.imggmi.com/uploads/2019/4/28/314911684022b9b9f5ce61df97a23941-full.png"), auto`;
  //Transform
  let elements = document.querySelectorAll("canvas");

  for (let i = 0; i < elements.length; i++) {
    //elements[i].style.backgroundColor = "#af7aa5";
    elements[i].removeEventListener("click", choosecolor, false);
    elements[i].removeEventListener("click", paintbucket, false);
    elements[i].removeEventListener("click", dragElement, false);
    elements[i].addEventListener("click", transform, false);
  }
};
const transform = function(e) {
  const element = e.target.id;
  if (
    element !== "CurrentColor" &&
    element !== "prev" &&
    element !== "Color1" &&
    element !== "Color2"
  ) {
    if (this.style.borderRadius !== `0px`) {
      this.style.borderRadius = 0;
      alert(`Cube ${this.style.borderRadius}`);
    } else if (this.style.borderRadius === `0px`) {
      alert("Circle");
      this.style.borderRadius = `100%`;
    }
    localStorage.setItem(`${e.target.id}Border`, `${this.style.borderRadius}`);
  }
};
//HotKeys
document.addEventListener("keyup", function(e) {
  const KeyP = 80;
  const KeyC = 67;
  const KeyM = 77;
  const KeyT = 84;

  if (e.keyCode === KeyP) {
    alert("p");
    PaintBucketTool();
  } else if (e.keyCode === KeyC) {
    alert("c");
    ChooseColorTool();
  } else if (e.keyCode === KeyM) {
    alert("m");
    MoveTool();
  } else if (e.keyCode === KeyT) {
    alert("t");
    TransformTool();
  }
});
//OnClick Tools
PaintBucket.addEventListener("click", PaintBucketTool, false);

ChooseColor.addEventListener("click", ChooseColorTool, false);

Move.addEventListener("click", MoveTool, false);

Transform.addEventListener("click", TransformTool, false);

//Palette Color
document.querySelector("#palette").addEventListener(
  "input",
  function(e) {
    document.querySelector(
      "#prev"
    ).style.backgroundColor = document.querySelector(
      "#CurrentColor"
    ).style.backgroundColor;
    document.querySelector(
      "#CurrentColor"
    ).style.backgroundColor = document.querySelector("#palette").value;
    document.querySelector("#iconPalette").style.color = document.querySelector(
      "#palette"
    ).value;
    localStorage.setItem(
      `CurrentColor`,
      `${document.querySelector("#CurrentColor").style.backgroundColor}`
    );
    localStorage.setItem(
      `PrevColor`,
      `${document.querySelector("#prev").style.backgroundColor}`
    );
    localStorage.setItem(
      `PaletteIcon`,
      `${document.querySelector("#palette").value}`
    );
  },
  false
);
