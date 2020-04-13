
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
//--------------------------------------//
window.onload = function () {
    linker = $('#linker').linker();
    // NovaPassagemTeste()
    
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
    node1.input('input_id', document.getElementById('personagem').value);
    node1.input('input_id', document.getElementById('nodeDialog').value);

    // add an output
    node1_out = node1.output('output_id', document.getElementById('accao').value);

    // trigger when this output connect to new input

    node1_out.onConnect = function (input) {
        console.log(this, input); // print the output and the input objects

    };


    // trigger when this output link remove
    node1_out.onRemove = function (index) {
        console.log(index)
    };

}

function Passagemfilha() {
    f = f + 1
    p= 130 + p
    // add node 2
    node2 = linker.node({ id: 'second', name: [n] + '.' + [f] + ' Passagem', x: 400, y: p });
    node2_in = node2.input('input_id', document.getElementById('personagem').value);
    node2_in = node2.input('input_id', document.getElementById('nodeDialog').value);

    // add an output
    node2_out = node2.output('output_id', document.getElementById('accao').value);

    node2.onSetting = function () {
        alert('Setting ' + this.name);
    };

    // add path between two nodes
    node1_out.connect(node2_in);

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