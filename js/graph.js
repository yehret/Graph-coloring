// const board = document.querySelector(".board");

const svg = document.querySelector("svg");
const circles = document.querySelector('.circles')
const lines = document.querySelector('.lines')





function createCircle(x, y, id) {
  return `
    <circle
      id="${id}"
      class="element"
      cx="${x}"
      cy="${y}"
      r="${10}"
      fill="white"
      stroke="black"
      stroke-width="2"
    ></circle>
  `;
}

function createEdge(activeX, activeY, targetX, targetY, edgeId) {
  return `
    <line id="${edgeId}" class="line" x1="${activeX}" y1="${activeY}" x2="${targetX}" y2="${targetY}" stroke="white"/>
  `;
}

let activeVertex = null;
let activeX, activeY;
let noActiveVertices = true;

let edgeId = 0;
let id = 0;

let targetId, targetX, targetY;

// obj constructor
function Object(id) {
  this.id = id;
  this.connections = [];
}
let elementsArray = []

// Create vertices on a field
svg.addEventListener("click", (event) => {
  //   console.log(event);
  if (vertexPutOpportunity) {
    circles.innerHTML += createCircle(event.offsetX, event.offsetY, id);

    // Push exists vertices into array
    elementsArray.push(new Object(Number(activeVertex)))
    elementsArray[id].id = id;
    id++;
  }
});

// Set active vertex
svg.addEventListener("click", (event) => {
  if ( event.target.classList.contains("element") && !vertexPutOpportunity && noActiveVertices ) {
    noActiveVertices = false;

    // Set active data
    activeVertex = event.target.getAttribute("id");
    activeX = event.target.getAttribute("cx");
    activeY = event.target.getAttribute("cy");

    
    textBlock.innerText = "choose next vertex";
    // console.log("set active");
    // console.log(activeVertex, activeX, activeY);

    // elementsArray[activeVertex].id = Number(activeVertex);
  }
});

// Add connection
svg.addEventListener("click", (event) => {
  if (event.target.classList.contains("element") && !vertexPutOpportunity && event.target.getAttribute("id") != activeVertex ) {

    targetId = event.target.getAttribute("id");
    targetX = event.target.getAttribute("cx");
    targetY = event.target.getAttribute("cy");

    // console.log("x1: " + activeX + " y1: " + activeY + " x2: " + targetX + " y2: " + targetY);

    lines.innerHTML += createEdge(activeX, activeY, targetX, targetY, edgeId);

    elementsArray[activeVertex].connections.push(Number(targetId))
    elementsArray[targetId].connections.push(Number(activeVertex))
    // elementsArray[targetId].id = Number(targetId);

    // console.log(elementsArray);

    textBlock.innerText = "choose the vertex";
    edgeId++;
    noActiveVertices = true;
  }
});
