//----------Variaveis globais------------------//
var linker;
var n = 0; // nova narrativa
var f = 0; // narrativa filha
var p = 0 // posição do node
var node1;
var node1_out;
var node2;
var node2_in;
var node2_out
var Nnarr
var nodeid;
//var listnarr = []
//--------------------------------------//
window.onload = function() {
    Nnarr = document.getElementById('Nnarr')
    linker = $('#linker').linker();
    //NovaPassagemTeste()
    // TestarGravaçãoLocal();
    readNarrativas();
    readCaminhos();
    personagem = document.getElementById('personagem')
    accao = document.getElementById('accao')
    nodeDialog = document.getElementById('nodeDialog')

}



//-------Functions--------------//
var m = 0
var pt = '';
var i

function nodeInteract() {

    m = m + 1
    i = sessionStorage.getItem('NODEid')
    var div = document.getElementById(i);

    if (m == 1) {
        pt = ''
    }

    div.onclick = function() {

    };
    if (pt != i) {
        $('#' + i).click(function() {
            $('#' + i).css({
                'box-shadow': '5px 5px 5px 9px #b0ff8b'
            });
        });

        if (m != 1) {
            document.getElementById(pt).style.boxShadow = "none";


        }

        pt = i



    }
}


function readNarrativas() {
    $.ajax({
        url: '/api/narrativas/' + sessionStorage.getItem('Narridd'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            listnarr = res

            for (i in listnarr) {
                n = n + 1
                node1 = linker.node({ id: listnarr[i].Narr_id, name: ' Passagem X', x: listnarr[i].Narr_X, y: listnarr[i].Narr_Y });
                // add an input
                node1.input('input_id', listnarr[i].Narr_personagem);
                node1.input('input_id', listnarr[i].Narr_script);

                // add an output
                node1_out = node1.output('output_id', listnarr[i].Narr_accao);

                node1.onDrag = function(x, y) {
                    console.log(x, y, this);

                };
                node1.onClick = function() {
                    window.sessionStorage.setItem('IdEdit0', this.inputs[0].id2);
                    //alert(this.inputs[0].id)
                    window.sessionStorage.setItem('IdEdit1', this.inputs[1].id2);
                    //alert(this.inputs[1].id)
                    window.sessionStorage.setItem('IdEdit3', this.outputs[0].id2);
                    //alert(this.outputs[0].id)
                    window.sessionStorage.setItem('IdOutput', this.outputs[0].id);
                    window.sessionStorage.setItem('IdOutpu', this.outputs[0].__id);
                    window.sessionStorage.setItem('IdOutputcon', this.outputs[0].__id);

                    /*
                    window.sessionStorage.setItem('Iname',this.inputs[0].name);
                    window.sessionStorage.setItem('Iname1',this.inputs[1].name);
                    window.sessionStorage.setItem('Outname',this.outputs[0].name);
                    */
                    //alert(this.inputs[0].name)
                    // this.inputs[0].name='oi'

                    //alert( this.outputs[0].id);   
                    //Id para detetar o click no node1           
                    ide = 0

                    nodeid = this.id

                    window.sessionStorage.setItem('NODEid', this.id);

                    // Para fazer o update irei pôr o id de cada passagem no seu determinado node.
                    nodeInteract()

                }

            }

        },
        error: function() {

        }
    })

}






function readCaminhos() {
    $.ajax({
        url: '/api/caminhos/' + sessionStorage.getItem('Narridd'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json", // receiving in json
        success: function(res, status) {
            listnarr = res
            for (i in listnarr) {

                document.getElementById("linker_paths").innerHTML += '<path d="' + listnarr[i].Caminho_path + '"></path>'


            }

        },
        error: function() {

        }
    })

}



function updatePassagem() {
    inp1 = document.getElementById(sessionStorage.getItem('IdEdit0'))
    inp2 = document.getElementById(sessionStorage.getItem('IdEdit1'))
    outp = document.getElementById(sessionStorage.getItem('IdEdit3'))
    validarNarr();

    inp1.innerHTML = personagem.value;

    inp2.innerHTML = nodeDialog.value;


    outp.innerHTML = accao.value;

}



function updateNarr() {
    $.ajax({
        url: "/api/update/passagens/" + nodeid,
        method: "put",
        data: {
            perso: personagem.value,
            accao: accao.value,
            script: nodeDialog.value
        },

        success: function(res) {

        },
        error: function(err) {
            console.log(err);
        }


    })
}

// Esta função serve para validar se o utilizador pretende fazer a alterção

function validarNarr() {

    var r = confirm("Tem a certeza que pretende fazer a alteração?");
    if (r == true) {
        updateNarr()

    }


}