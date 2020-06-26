//----------Variaveis globais------------------//
var interagir;
var interact;
var listnarr = [];
var outId;
var outIdd;
var nomeNA

//--------------------------------------//
window.onload = function() {
    interagir = document.getElementById('interagir')
    interact = document.getElementById('interact')
    nomeNA = document.getElementById('nomeNA')
        // NovaPassagemTeste()
        // TestarGravaçãoLocal();
    readHistorias()

}



//-------Functions--------------//


function readHistorias() {
    $.ajax({
        url: '/api/narrativas/' + sessionStorage.getItem('Narrid'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            listnar = res
            var html = ''
            var htm = ''
            for (n in listnar) {
                if (listnar[n].Narr_outCon_id == '1') {
                    listnarr.push(listnar[n])
                }
            }
            for (nn in listnar) {
                if (listnar[nn].Narr_outCon_id != '1') {
                    listnarr.push(listnar[nn])
                }
            }
            console.log(listnarr)
            for (i in listnarr) {
                if ([i] == 0) {
                    html += "<td style= 'color:rgb(135, 206);';>" + listnarr[i].Narr_personagem + '<br><br><br><br><br><br>' + listnarr[i].Narr_script + "</td > ";
                    outId = listnarr[i].Narr_out_id
                }
                if (listnarr[i].Narr_outCon_id == outId) {
                    htm += "<td style='cursor: pointer ;border-radius:50%'; onclick='setIdPassagem(" + listnarr[i].Narr_id + ");' >" + listnarr[i].Narr_accao + "</td>";
                }
            }



            interagir.innerHTML = html;
            interact.innerHTML = htm;
            nomeNA.innerHTML = sessionStorage.getItem('nomeN') + '  ' + '<i style="font-size:24px;cursor:pointer;color:blue" onclick="location.reload();" class="fa">&#xf021;</i>'

        },
        error: function() {

        }
    })

}

function setIdPassagem(Idpassagem) {
    var html = ''
    var htm = ''
    for (i in listnarr) {
        if (listnarr[i].Narr_id == Idpassagem) {
            html += "<td  style= 'color:rgb(135, 206); '>" + listnarr[i].Narr_personagem + '<br><br><br><br><br><br>' + listnarr[i].Narr_script + "</td>";
            outIdd = listnarr[i].Narr_out_id
                //alert(outIdd)


        }
    }
    for (j in listnarr) {
        if (listnarr[j].Narr_outCon_id == outIdd) {
            // alert(outIdd)
            // alert(listnarr[i].Narr_accao) <button type=button class='persNP'>" +listnarr[j].Narr_accao+ "</button>
            htm += "<td style='cursor: pointer; border-radius:50%'; onclick='setIdPassagem(" + listnarr[j].Narr_id + ");' >" + listnarr[j].Narr_accao + "</td>";
        }


    }


    interagir.innerHTML = html;
    interact.innerHTML = htm;


}