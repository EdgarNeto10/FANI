
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
var narrSave  = [];
var NarrNome;
//--------------------------------------//
window.onload = function () {
    linker = $('#linker').linker();
    // NovaPassagemTeste()
    personagem = document.getElementById('personagem')
    accao = document.getElementById('accao')
    nodeDialog = document.getElementById('nodeDialog')


}



//-------Functions--------------//





function NovaPassagem() {
    n = n + 1
    // add a node
    node1 = linker.node({ id: 'first', name: [n] + 'º Passagem', x: 10, y: 190 });
    console.log(this);

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
    node1.input('input_id', personagem.value);
    node1.input('input_id', nodeDialog.value);

    // add an output
    node1_out = node1.output('output_id', accao.value);

    // trigger when this output connect to new input

    node1_out.onConnect = function (input) {
        console.log(this, input); // print the output and the input objects

    };


    // trigger when this output link remove
    node1_out.onRemove = function (index) {
        console.log(index)
    };

    narrSave.push ({inpt1: personagem.value, inpt2: nodeDialog.value, outpt: accao.value})


}



function Passagemfilha() {
    f = f + 1
    p = 130 + p
    // add node 2
    node2 = linker.node({ id: 'second', name: [n] + '.' + [f] + ' Passagem', x: 400, y: p });
    node2_in = node2.input('input_id', personagem.value);
    node2_in = node2.input('input_id', nodeDialog.value);

    // add an output
    node2_out = node2.output('output_id', accao.value);

    node2.onSetting = function () {
        alert('Setting ' + this.name);
    };

    // add path between two nodes
    node1_out.connect(node2_in);

    narrSave.push ({inpt1: personagem.value, inpt2: nodeDialog.value, outpt: accao.value})
}

function NomeNarrativa() {
     NarrNome = prompt("Insira o nome da narrativa", "Harry Potter");
    if (NarrNome != null) {
      document.getElementById("demo").innerHTML =
      "Criou a narrativa " + NarrNome+ " :)" ;
    }
  }

function SalvarNarrativa(){
    NomeNarrativa();
    for(i in narrSave ){
    
    $.ajax({
        url: "/api/narrativas",
        method: "post",
        data: {
            narrativa: NarrNome,
            personagem: narrSave[i].inpt1,
            nodeDialog: narrSave[i].inpt2,
            accao: narrSave[i].outpt

        },
        success: function (res, status) {
           //console.log(res.status);
        },
        error: function (err) {
            console.log(err);
        }

    })
    //console.log(data)
}

console.log(narrSave)
console.log(NarrNome)

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