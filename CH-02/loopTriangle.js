    function printTriangle(){
      for(let row = 0;row < 7;row++){
        let mat = ""
        for(let col = 0; col <= row; col++){
          mat += "#" +" "
        }
        console.log(mat)
      }
    }
   printTriangle()

