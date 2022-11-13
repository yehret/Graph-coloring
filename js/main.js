// let graphBoard = [
//   [0, 1, 0, 1, 0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 0, 1, 0, 0, 0],
//   [1, 0, 1, 0, 1, 0, 0, 1, 1],
//   [0, 0, 0, 1, 0, 0, 0, 1, 0],
//   [0, 0, 1, 0, 0, 0, 1, 1, 0],
//   [0, 0, 0, 0, 0, 1, 0, 1, 1],
//   [0, 0, 0, 1, 1, 1, 1, 0, 0],
//   [1, 0, 0, 1, 0, 0, 1, 0, 0],
// ];


  
// let sigma = [];
// let colours = [null, null, null, null, null, null, null, null, null];

// // Find the amount of connections for every object

// for (let i = 0; i < graphBoard.length; i++) {
//   let nodeCount = 0;
//   for (let j = 0; j < graphBoard.length; j++) {
//     if (graphBoard[i][j] != 0) nodeCount++;
//     sigma[i] = nodeCount;
//   }
// }

// // while( step != graphBoard.length-- ){
// for (const [index, graphrow] of graphBoard.entries()) {
//   let color = 0,
//     max = sigma[0],
//     maxIndex = 0;

//   // Max number of sigma`s
//   for (let i = 0; i < sigma.length; i++) {
//     if (sigma[i] > max) {
//       max = sigma[i];
//       maxIndex = i;
//     }
//   }

//   // Setting up the colours
//   for (let el = 0; el < graphrow.length; el++) {
//     if (graphBoard[maxIndex][el] > 0 && color == colours[el]) {
//       color++;
//       el = -1;
//     }
//   }

//   colours[maxIndex] = color;
//   sigma[maxIndex] = 0;
// }

