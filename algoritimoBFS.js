class algoritimoBFS{

    constructor(init,final){
        this.estadoFinal = final;
        this.lista = [init]
        this.analisados = [];
    }

    // comparadorMatrix(a, b){
    //     if(a.length != b.length){
    //         return false;
    //     }
    //     if(a[0].length != b[0].length){
    //         return false;
    //     }

    //     for(var i =0;i<a.length;i++){
    //         for(var j =0;j<a[0].length;j++){
    //             if(a[i][j]!=b[i][j]){
    //                 return false;
    //             }
    //         }
    //     }
    //     return true;
    // }

    cloneMatrix(a){
        t = angular.copy(a);
        return t;
    }

    run() {
        var analisar = this.lista.shift();
        this.analisados.push(analisar);
        
        var cont = 1;

        if(!(analisar.getCordX() == this.estadoFinal.x && analisar.getCordY() == this.estadoFinal.y)) {
            //aux = angular.copy(analisar);
            aux= Object.assign({}, analisar);
            //aux.showEstado();//a
            //System.out.println("dentro");
            if(aux.moverPraCima()) {
                //aux.showEstado();
                lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra baixo");
            //aux = angular.copy(analisar);
            aux= Object.assign({}, analisar);
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraBaixo()) {
                //aux.showEstado();
                lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra direita");
            //aux = angular.copy(analisar);
            aux= Object.assign({}, analisar);
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraDireita()) {
                //aux.showEstado();
                lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }

            //System.out.println("fora mover pra esquera");
            aux = angular.copy(analisar);
            aux= Object.assign({}, analisar);
            //aux.showEstado();
            //System.out.println("dentro");
            if(aux.moverPraEsquerda()) {
                //aux.showEstado();
                lista.push(new PathFinderAgent(this.cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar));
                cont++;
            }
            this.run();
        }else{
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