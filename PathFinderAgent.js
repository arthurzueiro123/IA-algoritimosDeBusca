class PathFinderAgent {
    
    constructor(estado,EstDaTent, pai,x,y){
      
        this.cordX = x;
        this.cordY = y;
        this.estado = estado;
        this.estadoDaTentativa = EstDaTent;
        this.pai = pai;
        this.custo;
        // for(var i =0;i<estado.length;i++){
        //     for(var j =0;j<estado[0].length;j++){
        //         if(estado[i][j] < 0){
        //             this.cordX = i;
        //             this.cordY = j;
        //         }
        //     }
        // }
    }

    

    moverPraCima(){
        if(this.cordY>0 && this.estado[this.cordX][this.cordY-1] <=0){
         
            
            this.cordY--;
            return true;
        }
        return false;
    }

    moverPraBaixo(){
        if(this.cordY < this.estado[0].length-1 && this.estado[this.cordX][this.cordY+1] <=0){
            
            //this.estado[this.cordX][this.cordY]=2;
            this.cordY++;
            return true;
        }
        return false;
    }

    moverPraDireita(){
        if(this.cordX>0 && this.estado[this.cordX-1][this.cordY] <=0){
         
            //this.estado[this.cordX][this.cordY]=2;
            this.cordX--;
            return true;
        }
        return false;
    }

    moverPraEsquerda(){
        if(this.cordX < this.estado.length-1 && this.estado[this.cordX+1][this.cordY]<=0){

            this.cordX++;
            return true;
        }
        return false;
    }

    getEstado() {
        return this.estado;
    }


    showEstado(){
        for(var i =0;i<estado.length;i++){
            for(var j =0;j<estado[0].length;j++){
                console.log(estado[i][j]+" | ");
            }
            //quebra de linha
        }
    }



    getCordX() {
        return this.cordX;
    }

    getCordY() {
        return this.cordY;
    }

    getEstadoDaTentativa() {
        return this.estadoDaTentativa;
    }

    getPai() {
        return this.pai;
    }

    getCords(){
        cord ={
            "x" : this.cordX,
            "y" : this.cordY
        }
        return cord;
    }

    clone() {
        return new PathFinderAgent(
            this.estado,
            this.estadoDaTentativa,
            this.pai,
            this.cordX,
            this.cordY)
          //this.x, this.y, this.color.clone()); // (A)
    }

    // public int[][] cloneMatrix(int[][] a){
    //     int [][] t = new int[a.length][];
    //     for(int i = 0; i < a.length; i++)
    //         t[i] = a[i].clone();

    //     return t;
    // }

    // public QuebraCuca getClone() {
    //         // call clone in Object.
    //         int[][] auxEstado = cloneMatrix(this.estado);
    //         QuebraCuca aux = new QuebraCuca(auxEstado,this.getEstadoDaTentativa(),this.pai);
    //         return aux;

    // }
}