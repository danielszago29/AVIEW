
const itemRow = [
    `<div class="item-row-body"><img src="imgs-body/silent-hill.jpg" alt=""><h2>SILENT HILL REMAKE GANHA ATUALIZAÇÃO</h2></div>
    <div class="item-row-body"><img src="imgs-body/space-marine.jpg" alt=""><h2>"BRUTAL", LEIA O NOSSO REVEIW DE SPACE MARINES 2</h2></div>
    <div class="item-row-body"><img src="imgs-body/images.jpg" alt=""><h2>BLACK MITY WUKONG ATINGE A MARCA DE DE 2 MILHÕES DE VENDAS</h2></div>
    <div class="item-row-body"><img src="imgs-body/bo-6.jpg" alt=""><h2>BLACK OPS 6 TEM LANÇAMENTO MARCADO POR BUGS E SERVIDORES INSTÁVEIS</h2></div>`
];

let indece =0;

function alteracaoRow (){
    const item = document.getElementsByClassName('item-row-body');
    item.innerHTML = itemRow[indece];
    indece = (indece+1) % itemRow.innerHTML;
}

setInterval(alteracaoRow, 3000);