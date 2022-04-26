

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

async function Bfs(map,final){

    var map = map;
    var final = final;
    var NoInicial = new PathFinderAgent(map,"e",null,0,0)
    var lista = [NoInicial]
    var analisados=[];
    //console.log(lista[0].getEstado());

    while(lista.length>0){
        var analisar = lista.shift();
        //console.log(analisar.cordX);
        console.log(analisar.getCordX()+" : "+analisar.getCordY());
        analisados.push(analisar);
        
        var cont = 1;
        console.log(lista);
        estadoaux =analisar.getEstado();
        for(var c=0;c<lista.length;c++){
            aa= lista[c];
            estadoaux[aa.getCordX()][aa.getCordY()]=-3;
        }
        for(var c=0;c<analisados.length;c++){
            aa= analisados[c];
            estadoaux[aa.getCordX()][aa.getCordY()]=2;
        }

        analisar.estado = estadoaux;

        drawsquares(estadoaux.length,estadoaux);
        drawBoard(estadoaux.length);
        

        if(!(analisar.getCordX() == final.x && analisar.getCordY() == final.y)) {
            console.log("entrou")

            var aux= analisar.clone();
            aux.estado = cloneMatrix(estadoaux);
            console.log(analisar.getCordX()+" : "+analisar.getCordY());
            
            if(aux.moverPraCima()) {
                    //aux.showEstado();
                lista.push(new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()));
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());

            if(aux.moverPraBaixo()) {
                    //aux.showEstado();
                lista.push(new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()));
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());

            if(aux.moverPraDireita()) {
                    //aux.showEstado();
                lista.push(new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()));
                cont++;
            }
            console.log(aux.getCordX()+" : "+aux.getCordY());

            aux= analisar.clone();
            console.log(analisar.getCordX()+" : "+analisar.getCordY());
            
            if(aux.moverPraEsquerda()) {
                    //aux.showEstado();
                lista.push(new PathFinderAgent(cloneMatrix(aux.getEstado()),(aux.getEstadoDaTentativa()+cont), analisar,aux.getCordX(),aux.getCordY()));
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