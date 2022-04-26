//esse e o best first search(melhor escolha)//pois considera somente a heuristica
function  cloneMatrix(a){
    var t=[];
    console.log(a);
    for(var i =0; i<a.length; i++){
        t[i]=[...a[i]];
    }
    return t;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function ordenarPorCusto(a, b){
    return a.CE - b.CE;
}

async function Bmp(map,final){

    var map = map;
    var final = final;
    var NoInicial = new PathFinderAgent(map,"e",null,0,0)
    var CustEstimE0 = Math.abs(NoInicial.getCordX()-final.x)+Math.abs(NoInicial.getCordY()-final.y)
    var lista = [{"estado": NoInicial,"CE":CustEstimE0}]
    var analisados=[];
    //console.log(lista[0].getEstado());

    while(lista.length>0){
        lista.sort(ordenarPorCusto);
        var analisar = lista.shift().estado;
        //console.log(analisar.cordX);
        console.log(analisar.getCordX()+" : "+analisar.getCordY());
        analisados.push(analisar);
        
        var cont = 1;
        console.log(lista);
        estadoaux =analisar.getEstado();
        for(var c=0;c<lista.length;c++){
            aa= lista[c].estado;
            estadoaux[aa.getCordX()][aa.getCordY()]=-3;
        }
        for(var c=0;c<analisados.length;c++){
            aa= analisados[c];
            estadoaux[aa.getCordX()][aa.getCordY()]=2;
        }

        analisar.estado = estadoaux;
        var CustEstimAtual ;
        
        drawsquares(estadoaux.length,estadoaux);
        drawBoard(estadoaux.length);
        
        
        
        if(!(analisar.getCordX() == final.x && analisar.getCordY() == final.y)) {
            console.log("entrou")

            var aux= analisar.clone();
            aux.estado = cloneMatrix(estadoaux);
            console.log(analisar.getCordX()+" : "+analisar.getCordY());
            
            if(aux.moverPraCima()) {
                    //aux.showEstado();
                CustEstimAtual = Math.abs(aux.getCordX()-final.x)+Math.abs(aux.getCordY()-final.y)
                lista.push({"estado": new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()),"CE":CustEstimAtual});
                
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());

            if(aux.moverPraBaixo()) {
                    //aux.showEstado();
                CustEstimAtual = Math.abs(aux.getCordX()-final.x)+Math.abs(aux.getCordY()-final.y)
                lista.push({"estado": new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()),"CE":CustEstimAtual});
                    
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());

            if(aux.moverPraDireita()) {
                    //aux.showEstado();
                CustEstimAtual = Math.abs(aux.getCordX()-final.x)+Math.abs(aux.getCordY()-final.y)
                lista.push({"estado": new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()),"CE":CustEstimAtual});
                    
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());
            
            if(aux.moverPraEsquerda()) {
                    //aux.showEstado();
                CustEstimAtual = Math.abs(aux.getCordX()-final.x)+Math.abs(aux.getCordY()-final.y)
                lista.push({"estado": new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()),"CE":CustEstimAtual});
                    
                cont++;
            }
            console.log(lista);
            await sleep(1);
        }else{
            console.log("saiu")
            auxEstado = analisar.getEstado();
            var ultimo = analisar;
            while(analisar!=null){
                auxEstado[analisar.getCordX()][analisar.getCordY()]=10;
                analisar = analisar.pai;
            }
            drawsquares(auxEstado.length,auxEstado);
            drawBoard(auxEstado.length);
            return ultimo;
            break;
        }

    }

}