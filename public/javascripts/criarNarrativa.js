//----------Variaveis globais------------------//
var linker;
var n = 0; // nova narrativa
var f = 0; // narrativa filha
var p = 0 // posição do node
var node1;
var node1_out;
var node2;
var node2_in;
var node2_out;
var personagem;
var accao;
var nodeDialog;
var narrSave = [];
var NarrNome;
var node;
var nos_out;
var idOutput;
var node1_ou;
var posicao = 0

var inp2
var inp1
var outp
    //--------------------------------------//
window.onload = function() {

    // NovaPassagemTeste()
    personagem = document.getElementById('personagem')
    accao = document.getElementById('accao')
    nodeDialog = document.getElementById('nodeDialog')
    node = document.getElementById('test')

    var idnode = 'linker'
    linker = $('#' + idnode).linker()

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

        /* Tentar fazer onMouse em um determinado node
                    if (pt == i) {

                        $('#' + i).click(function() {
                            $('#' + i).css({
                                'box-shadow': 'none'

                            });
                        });
                        document.getElementById(i).onmouseover = function() {
                            document.getElementById(i).style.boxShadow = "5px 5px 5px 9px #b0ff8b";

                        };
                        document.getElementById(i).onmouseout = function() {
                            document.getElementById(i).style.boxShadow = "none";

                        };
                    }
*/



    }
}






var ide = 0;
var c1 = 0
var idnodes;
var listn = []

function NovaPassagem() {
    n = n + 1
        //window.sessionStorage.setItem('IdOutput','output'+n);
        // add a node
    if (n == 1) {
        node1 = linker.node({ id: Math.random().toString(36).substr(2, 8), name: [n] + 'º Passagem', x: 10, y: 190 });
        console.log(this);
        console.log(node1.id);

        // when the node position change
        node1.onDrag = function(x, y) {
            console.log(x, y, this); // print the new position and the node object

        };

        // trigger when delete the node
        node1.onRemove = function() {
            console.log(this); // print the node object
        };

        // trigger when setting icon clicked
        node1.onSetting = function() {
            alert('Setting ' + this.name);

        };


        // add an input
        node1.input(Math.random(), personagem.value);
        node1.input(Math.random(), nodeDialog.value);

        // add an output



        node1_out = node1.output(Math.random(), accao.value);

        // Interagir com node clicado

        node1.onClick = function() {
            /* Alertas para identificar o inputs e outputs
                    alert( this.inputs[0].name);
                    alert( this.inputs[1].name);
                    alert( this.outputs[0].name);
            */

            window.sessionStorage.setItem('IdEdit0', this.inputs[0].id2);
            window.sessionStorage.setItem('IdEdit1', this.inputs[1].id2);
            window.sessionStorage.setItem('IdEdit3', this.outputs[0].id2);

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
                // alert( this.outputs[0].__id);

            window.sessionStorage.setItem('NODEid', this.id);

            nodeInteract()


        };




        // trigger when this output connect to new input

        node1_out.onConnect = function(input) {
            // console.log(this, input); // print the output and the input objects
            //alert(this, input)
            // alert(node1.pathsOut) 

        };


        // trigger when this output link remove
        node1_out.onRemove = function(index) {
            console.log(index)
        };
        outI = node1.outputs[0].__id
        narrSave.push({ inpt1: personagem.value, inpt2: nodeDialog.value, outpt: accao.value, outId: outI, outConId: '1', passX: node1.x, passY: node1.y })

        console.log(narrSave)


    } else {
        alert('A passagem principal já foi inserida')

    }



}

var c2 = 0
cn = 1

function Passagemfilha() {

    cn = cn + 1

    f = f + 1
    p = 200 + p
        //idec = sessionStorage.getItem('Ide');

    outputcon = sessionStorage.getItem('IdOutputcon')
        // add node 2
    if (f == 1) {
        node2 = linker.node({ id: Math.random().toString(36).substr(2, 8), name: [cn] + 'ª Passagem', x: 400, y: 130 });
    }
    if (f != 1) {

        if (sessionStorage.getItem('posx') == posicao) {
            node2 = linker.node({ id: Math.random().toString(36).substr(2, 8), name: [cn] + 'ª Passagem', x: posicao + 300, y: p });
        }

        if (sessionStorage.getItem('posx') != posicao) {
            node2 = linker.node({ id: Math.random().toString(36).substr(2, 8), name: [cn] + 'ª Passagem', x: posicao, y: p });
        }

    }




    node2_in = node2.input(Math.random(), personagem.value);
    node2_in = node2.input(outputcon, nodeDialog.value);


    //alert(node2.x)
    posicao = node2.x
        // add an output
    node2_out = node2.output(c2, accao.value);


    //Os nodes_outs seram intruduzidos nesta lista
    listn.push(node2_out)

    c2 = c2 + 1
    node2.onSetting = function() {
        alert('Setting ' + this.name);
    };


    //alert( idOutput)

    //console.log(node2.pathsOut)
    //console.log(node2.pathsIn)



    node2.onClick = function() {

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

        //alert( this.outputs[0].id); 
        //Id para detetar o click no node1              
        ide = 1
            //window.sessionStorage.setItem('Ide',ide);
            // alert(this.inputs[1].id)
            // alert(sessionStorage.getItem('IdOutputcon'))
        window.sessionStorage.setItem('posx', this.x);
        //alert(this.x)

        window.sessionStorage.setItem('NODEid', this.id);
        nodeInteract()

    };

    idOutput = sessionStorage.getItem('IdOutput');

    // add path between two nodes
    if (ide == 0)
        node1_out.connect(node2_in);
    else
        listn[idOutput].connect(node2_in);

    // alert(node2.outputs[0].__id)

    outI = node2.outputs[0].__id

    narrSave.push({ inpt1: personagem.value, inpt2: nodeDialog.value, outpt: accao.value, outId: outI, outConId: outputcon, passX: node2.x, passY: node2.y })


}



function NomeNarrativa() {
    NarrNome = prompt("Insira o nome da narrativa", "Harry Potter");
    if (NarrNome != null) {
        document.getElementById("savenarr").innerHTML = "Criou a narrativa " + NarrNome + " :)";
        SalvarNarrativa()
    }
}

// A gerar o id aleatorio de cada narrativa criada
var narrid = Math.random()

function SalvarNarrativa() {

    for (i in narrSave) {

        $.ajax({
            url: "/api/narrativas",
            method: "post",
            data: {
                narrativa: NarrNome,
                personagem: narrSave[i].inpt1,
                nodeDialog: narrSave[i].inpt2,
                accao: narrSave[i].outpt,
                outId: narrSave[i].outId,
                outConId: narrSave[i].outConId,
                narrid: narrid,
                passX: narrSave[i].passX,
                passY: narrSave[i].passY


            },
            success: function(res, status) {
                //console.log(res.status);
            },
            error: function(err) {
                console.log(err);
            }

        })

    }

    caminhos = JSON.parse(sessionStorage.getItem("path"))

    for (i in caminhos) {
        $.ajax({
            url: "/api/caminhos",
            method: "post",
            data: {
                narrid: narrid,
                path: caminhos[i]

            },
            success: function(res, status) {
                //console.log(res.status);
            },
            error: function(err) {
                console.log(err);
            }

        })
    }

}





var idEdit;

function updatePassagem() {
    inp1 = document.getElementById(sessionStorage.getItem('IdEdit0'))
    inp2 = document.getElementById(sessionStorage.getItem('IdEdit1'))
    outp = document.getElementById(sessionStorage.getItem('IdEdit3'))

    idEdit = sessionStorage.getItem('IdOutpu');

    for (i in narrSave) {
        if (narrSave[i].outId == idEdit) {
            //A pegar os id's do html na biblioteca
            narrSave[i].inpt1 = personagem.value
            inp1.innerHTML = personagem.value;
            narrSave[i].inpt2 = nodeDialog.value
            inp2.innerHTML = nodeDialog.value;
            narrSave[i].outpt = accao.value
            outp.innerHTML = accao.value;

        }


    }




}




/*

 //Função para testes

function NovaPassagemTeste(){

    // add a node
    var node1 = linker.node({id: 'first', name: 'First Node', x: 100, y: 100});

    // when the node position change
    node1.onDrag = function (x, y) {
        console.log(x, y, this); // print the new position and the node object
    };

    // trigger when delete the node
    node1.onRemove = function () {
        console.log(this); // print the node object
    };

    // trigger when setting icon clicked
    node1.onSetting = function () {
        alert('Setting ' + this.name);
    };

    // add an input
    node1.input('input_id', 'Input Name');

    // add an output
    var node1_out = node1.output('output_id', 'Output Name');

   // trigger when this output connect to new input

    node1_out.onConnect = function (input) {
        console.log(this, input); // print the output and the input objects
    };



    // trigger when this output link remove
    node1_out.onRemove = function (index) {
        console.log(index)
    };

    // add node 2
    var node2 = linker.node({id: 'second', name: 'Second Node', x: 400, y: 200});
    var node2_in = node2.input('input_id', 'Input Name');

    node2.onSetting = function () {
        alert('Setting ' + this.name);
    };

    // add path between two nodes
    node1_out.connect(node2_in);
};
*/