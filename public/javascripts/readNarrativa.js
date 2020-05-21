
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
//var listnarr = []
//--------------------------------------//
window.onload = function () {
    Nnarr= document.getElementById('Nnarr')
    linker = $('#linker').linker();
     //NovaPassagemTeste()
    // TestarGravaçãoLocal();
    readNarrativas();
    readCaminhos(); 
  
}



//-------Functions--------------//


function readNarrativas() {
    $.ajax({
        url: '/api/narrativas/'+sessionStorage.getItem('Narridd'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnarr= res
       
            for (i in listnarr) {
                    n=n+1
                    node1 = linker.node({ id: 'node_'+[n], name: [n] + 'º Passagem', x: listnarr[i].Narr_X, y: listnarr[i].Narr_Y }); 
                         // add an input
                    node1.input('input_id', listnarr[i].Narr_personagem);
                    node1.input('input_id', listnarr[i].Narr_script);
                
                    // add an output
                    node1_out = node1.output('output_id', listnarr[i].Narr_accao);

                    node1.onDrag = function (x, y) {
                        console.log(x, y, this);
                        
                    };
                    
                 
            }
           
        },
        error: function () {

        }
    })

}



function readCaminhos() {
    $.ajax({
        url: '/api/caminhos/'+sessionStorage.getItem('Narridd'),
        method: 'get',
        contentType: "application/json", // sending in json
        dataType: "json",// receiving in json
        success: function (res, status) {
            listnarr= res
            for (i in listnarr) {
                    
             document.getElementById("linker_paths").innerHTML+='<path d="'+listnarr[i].Caminho_path+'"></path>'
                 
                 
            }
           
        },
        error: function () {

        }
    })

}




// Função para teste locais 
/*
var litest = []

litest = [{inpt1:'ola', inpt2:'dicaprio', outpt:'foi preso'},{inpt1:'ola', inpt2:'dicaprio', outpt:'foi preso na'}]

function TestarGravaçãoLocal(){
for (i in litest) {
    if(litest[i]==litest[0]){
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
    node1.input('input_id', litest[i].inpt1);
    node1.input('input_id', litest[i].inpt2);

    // add an output
    node1_out = node1.output('output_id', litest[i].outpt);

    // trigger when this output connect to new input

    node1_out.onConnect = function (input) {
        console.log(this, input); // print the output and the input objects

    };


    // trigger when this output link remove
    node1_out.onRemove = function (index) {
        console.log(index)
    };
    }

   if(litest[i]!=litest[0]){ 
    f = f + 1
    p= 130 + p
    // add node 2
    node2 = linker.node({ id: 'second', name: [n] + '.' + [f] + ' Passagem', x: 400, y: p });
    node2_in = node2.input('input_id', litest[i].inpt1);
    node2_in = node2.input('input_id', litest[i].inpt2);

    // add an output
    node2_out = node2.output('output_id', litest[i].outpt);

    node2.onSetting = function () {
        alert('Setting ' + this.name);
    };

    // add path between two nodes
    node1_out.connect(node2_in);
}

}}

*/

