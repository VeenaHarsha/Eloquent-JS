for (let r = 0; r < 8; r++) {
  let output = "";
  for (let c = r; c < (8 + r); c++) {
    output = c % 2 !== 0 ? (output += "#") : (output += " ");
  }
  console.log(output);
}

function chessBoard() {
  let output = "";
  for (let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++){
      if((i+j)%2 !== 0){
        output += "#"
      }else{
        output += " "
      }
    }
   output += "\n"
  }
  console.log(output)
}
//chessBoard();