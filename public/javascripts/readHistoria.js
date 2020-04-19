
//----------Variaveis globais------------------//
var interagir;
var interact ;
//--------------------------------------//
window.onload = function () {
    interagir = document.getElementById('interagir')
    interact = document.getElementById('interact')
    // NovaPassagemTeste()
    // TestarGravaçãoLocal();
    
}

//-----------------Session Storage--------------------//


function setIdPassagem(Idpassagem){
    window.sessionStorage.setItem('Idpassagem',Idpassagem);
   // window.location.href='../Treino.html';
   InteractAction();

}

//-------Functions--------------//



function readHistorias() {
    $.ajax({
        url: '/api/narrativas',
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnarr= res
            var html = ''
            var htm = ''
            for (i in listnarr) {
                if(listnarr[i].Narr_accao == listnarr[0].Narr_accao ) 
                html += "<p>"+listnarr[i].Narr_personagem+'<br>'+listnarr[i].Narr_script+"</p>";
                else
                htm += "<p style='cursor: pointer;' onclick='setIdPassagem("+ listnarr[i].Narr_id+");' >"+listnarr[i].Narr_accao+"</p>";
                //html += "<p onclick='setIdTreino("+treinar[i].treino_id+");' style='cursor: pointer;'>" +treinar[i].date+ ' - ' + treinar[i].treino_tipo + "</p>";
            }

           interagir.innerHTML = html;
           interact.innerHTML = htm;
         
        },
        error: function () {

        }
    })

}

function InteractAction() {
    $.ajax({
        url: '/api/narrativas/'+sessionStorage.getItem('Idpassagem'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnarr= res
            var html = ''
            var htm = ''
            for (i in listnarr) {
                
                html += "<p>"+listnarr[i].Narr_personagem+'<br>'+listnarr[i].Narr_script+"</p>";
               
                //htm += "<p style='cursor: pointer;' onclick='setIdPassagem("+ listnarr[i].Narr_id+");' >"+listnarr[i].Narr_accao+"</p>";
                
            }

           interagir.innerHTML = html;
           interact.innerHTML = htm;
         
        },
        error: function () {

        }
    })

}