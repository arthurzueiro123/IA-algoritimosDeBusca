class Operador {

    constructor(init,final){
        this.estadoFinal = final;
        this.lista = [init]
        this.analisados = [];

        // public Operador(int[][] init, int[][] estadoFinal){
        //     this.estadoFinal= estadoFinal;
        //     lista.push(new QuebraCuca(init,"E1", null));
        //     lista.get(0).showEstado();
        // }
    }

    comparadorMatrix(a, b){
        if(a.length != b.length){
            return false;
        }
        if(a[0].length != b[0].length){
            return false;
        }

        for(var i =0;i<a.length;i++){
            for(var j =0;j<a[0].length;j++){
                if(a[i][j]!=b[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    cloneMatrix(a){
        var t=[];
        console.log(a);
        for(var i =0; i<a.length; i++){
            t[i]=[...a[i]];
        }
        // t = [];
        // for(var i = 0; i < a.length; i++)
        //     t[i] = a[i];
        // return t;
        //var t = angular.copy(a);
        return t;
    }

    run() {
        var analisar = this.lista[0];
        console.log(analisar.getCordX()+" : "+analisar.getCordY());
        this.analisados.push(analisar);
        this.lista.shift();
        var cont = 1;
        console.log(this.lista);
        //se cordx de init e fim e cordy de init e fim forem diferentes
        //if(!comparadorMatrix(analisar.getEstado(),estadoFinal)) {
        if(!(analisar.getCordX() == this.estadoFinal.x && analisar.getCordY() == this.estadoFinal.y)) {

         
            //var aux= Object.assign({}, analisar);
            var aux= analisar.clone();
            //aux.showEstado();//a
            //System.out.println("dentro");
            if(aux.moverPraCima()) {
                //aux.showEstado();
                this.lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra baixo");
            aux= analisar.clone();
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraBaixo()) {
                //aux.showEstado();
                this.lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra direita");
            aux= analisar.clone();
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraDireita()) {
                //aux.showEstado();
                this.lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra esquera");
            aux= analisar.clone();
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraEsquerda()) {
                //aux.showEstado();
                this.lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }




            this.run();
        }else{
            console.log("encontrou");
            // System.out.println("encontrado solucção");
            // System.out.println(analisar.getEstadoDaTentativa()+" disposição");
            // for(int j =0;j<analisar.getEstado()[0].length;j++){
            //     for(int i =0;i<analisar.getEstado().length;i++){
            //         System.out.print(analisar.getEstado()[j][i]+" | ");
            //     }
            //     System.out.println();
            // }

        }
    }


}