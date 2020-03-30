function salvar(){
    var pontosFeitos = document.getElementById('pontosFeitos').value;
    var dataJogo = document.getElementById('dataJogo').value;
    document.getElementById('data').innerHTML = `${dataJogo}`;
    document.getElementById('pontosTot').innerHTML = `${pontosFeitos}`;
}