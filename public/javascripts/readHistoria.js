
//----------Variaveis globais------------------//
var interagir;
var interact ;
var listnarr=[] ;
var outId;
var outIdd;
//--------------------------------------//
window.onload = function () {
    interagir = document.getElementById('interagir')
    interact = document.getElementById('interact')
    // NovaPassagemTeste()
    // TestarGravaçãoLocal();
     readHistorias()
    
}


//-------Functions--------------//



function readHistorias() {
    $.ajax({
        url: '/api/narrativas/'+sessionStorage.getItem('Narrid'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnar= res
            var html = ''
            var htm = ''
            for (n in listnar){
                if(listnar[n].Narr_outCon_id=='1'){
                    listnarr.push(listnar[n])
                }
            }
            for (nn in listnar){
                if(listnar[nn].Narr_outCon_id != '1'){
                listnarr.push(listnar[nn])
            }
        }
        console.log(listnarr)
            for (i in listnarr) {
                    if([i]==0){
                       html += "<p>"+listnarr[i].Narr_personagem+'<br>'+listnarr[i].Narr_script+"</p>";
                       outId = listnarr[i].Narr_out_id
                    }
                    if(listnarr[i].Narr_outCon_id==outId){
                       htm += "<p style='cursor: pointer;' onclick='setIdPassagem("+ listnarr[i].Narr_id+");' >"+listnarr[i].Narr_accao+"</p>";
                    }
                }
               
            

           interagir.innerHTML = html;
           interact.innerHTML = htm;
         
        },
        error: function () {

        }
    })

}

function setIdPassagem(Idpassagem){
    var html = ''
    var htm = ''
    for (i in listnarr) {
        if(listnarr[i].Narr_id==Idpassagem){
           html += "<p>"+listnarr[i].Narr_personagem+'<br>'+listnarr[i].Narr_script+"</p>";
           outIdd = listnarr[i].Narr_out_id
           //alert(outIdd)
        }
       
    }
    for(j in listnarr){
        if(listnarr[j].Narr_outCon_id==outIdd){
           // alert(outIdd)
           // alert(listnarr[i].Narr_accao)
            htm += "<p style='cursor: pointer;' onclick='setIdPassagem("+ listnarr[j].Narr_id+");' >"+listnarr[j].Narr_accao+"</p>";
        }


    }

    interagir.innerHTML = html;
    interact.innerHTML = htm;
  

}