
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

module.exports.saveNarrativas = function (NomeNarrativa,personagem, script, accao, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query('insert into Narrativa (Narr_nome,Narr_personagem, Narr_script, Narr_accao) values(?,?,?,?)', [NomeNarrativa,personagem, script, accao], function (err, results) {

            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })


}

module.exports.getPassagem = function (idPassagem, callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select Narr_id, Narr_personagem, Narr_script, Narr_accao  from  Narrativa where Narr_id=?",
            [idPassagem], function (err, results) {

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



*/


