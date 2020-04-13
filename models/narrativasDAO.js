
var pool = require('./MysqlConn').pool;

//Função para testes

module.exports.getAllNarrativas = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select * from Narrativa ",
            function (err, results) { 

                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in a database query" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })
            })

    })
}



/*
// Funções temporarias para testes
module.exports.updateTreinos = function (idTreino, newestado, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        console.log([newestado, idTreino])
        conn.query("update treino set treino_estado = ? where treino_id = ?",
            [newestado, idTreino],
            function (err, result) {
                console.log(result)
                conn.release(); callback(false, { code: 200, status: "ok", data: result })
            })
    })
}


module.exports.getTreinos = function (idAtleta, callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select treino_id,treino_tipo,treino_estado,DATE_FORMAT(treino_data,'%d/%m/%Y') as date,atleta_id,atleta_nome,atleta_atle_trein from  treino t join Atle_Trein a on  t.treino_id = a.treino_atle_trein join Atleta x on a.atleta_atle_trein = x.atleta_id where atleta_atle_trein=?",
            [idAtleta], function (err, results) {

                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in a database query" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })
            })

    })
}

*/


