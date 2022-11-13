const startButton = document.querySelector('.start');
const connectBtn = document.querySelector('.connect')
const stopBtn = document.querySelector('.stop')

const vertices = document.querySelectorAll('circle');

let vertexPutOpportunity = true;


let graphBoard = [];
let colours = [];
startButton.addEventListener('click', () => {  
    graphBoard = [];
    let arr = []
    arr.length = elementsArray.length;

    for( let g = 0; g < elementsArray.length; g++){
        arr = []
        arr.length = elementsArray.length;
    for(let k = 0; k < arr.length; k++){
        arr[k] = 0;
    }
    for(let i = 0; i < elementsArray.length; i++){
        for(let j = 0; j < elementsArray.length; j++){
            if(j == elementsArray[g].connections[i]){
                arr[j] = 1;
            }
        }
    }
    graphBoard.push(arr);
    console.log(arr);
    }
    console.log(graphBoard);

    const colorbtn = document.querySelector('.color')


  let sigma = [];
  

  // Find the amount of connections for every object

  for (let i = 0; i < graphBoard.length; i++) {
    let nodeCount = 0;
    for (let j = 0; j < graphBoard.length; j++) {
      if (graphBoard[i][j] != 0) nodeCount++;
      sigma[i] = nodeCount;
    }
  }

  // console.log("Connection amount: " + sigma);
  // console.log(Math.max( ...sigma ));

  // while( step != graphBoard.length-- ){
  for (const [index, graphrow] of graphBoard.entries()) {
    let color = 0,
      max = sigma[0],
      maxIndex = 0;

    // Max number of sigma`s
    for (let i = 0; i < sigma.length; i++) {
      if (sigma[i] > max) {
        max = sigma[i];
        maxIndex = i;
      }
    }

    // Setting up the colours
    for (let el = 0; el < graphrow.length; el++) {
      if (graphBoard[maxIndex][el] > 0 && color == colours[el]) {
        color++;
        el = -1;
      }
    }

    colours[maxIndex] = color;
    sigma[maxIndex] = 0;
  }

    let circlesEl = document.querySelectorAll('.element');
    // circlesEl[0].setAttribute('fill', 'black');

  for(let c = 0; c < elementsArray.length; c++) {

        switch(colours[c]){
        case 0: circlesEl[c].setAttribute('fill', '#3581D8'); break;
        case 1: circlesEl[c].setAttribute('fill', '#D82E3F'); break;
        case 2: circlesEl[c].setAttribute('fill', '#FFF44F'); break;
        case 3: circlesEl[c].setAttribute('fill', '#28CC2D'); break;
        case 4: circlesEl[c].setAttribute('fill', 'violet'); break;
        default: console.log('no color');
    }
  }
})

const textBlock = document.querySelector('.message')
// console.log(dots.item(0)) -- get the one of the circle
// console.log(dots.item(0).getAttribute('cx')) -- find x coordinate from unique circle

connectBtn.addEventListener('click', () => {
    vertexPutOpportunity = false;
    textBlock.innerText = "choose the vertex";
    for(i = 0; i < vertices.length; i++){
        elementsArray.push(new Object(Number(vertices[i].getAttribute('id'))));
    }
    console.log(elementsArray);
})

stopBtn.addEventListener('click', () => {
    vertexPutOpportunity = true;
    noActiveVertices = true;
    activeX = 0;
    activeY = 0;
    // console.log("stop");
    textBlock.innerText = "";
})

