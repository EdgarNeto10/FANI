
//----------Variaveis globais------------------//
var linker;
var n = 0; // nova narrativa
var f = 0; // narrativa filha
var p =0 // posição do node
var node1;
var node1_out;
var node2;
var node2_in;
var node2_out
var Nnarr
var Nhist
//--------------------------------------//
window.onload = function () {
    Nhist= document.getElementById('Nhist')
    readNamesHist()
}



//-------Functions--------------//

function pagesH(Narrid){ 
    window.location.href='../Interacao.html';
    window.sessionStorage.setItem('Narrid',Narrid);
   
}



var c = 0
var nome;
function readNamesHist(){
    $.ajax({
        url: '/api/narrativas',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnarr= res
            var html = ''
            for (i in listnarr) {
            c=c+1
            if(c==1){
                html += "<li onclick=' pagesH("+listnarr[i].Narr_id_id+") '>"+listnarr[i].Narr_nome+"</li>";
            }
            else {
                if(listnarr[i].Narr_nome != nome){
                    html += "<li onclick=pagesH("+listnarr[i].Narr_id_id+") >"+listnarr[i].Narr_nome+"</li>";
                }
            }
             nome =listnarr[i].Narr_nome
                
               
            }

           Nhist.innerHTML = html;
     
         
        },
        error: function () {

        }
    })
}


