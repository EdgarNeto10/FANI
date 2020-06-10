var pool = require('./MysqlConn').pool;

//Função para testes

module.exports.getAllNarrativas = function(callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select * from Narrativa ",
            function(err, results) {

                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in a database query" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })
            })

    })
}





module.exports.updateNarrativa = function(idNarr, personagem, Narr_accao, Narr_script, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        //Nota:Verificar sempre a ordem dos param na query
        conn.query("update Narrativa set Narr_personagem = ?, Narr_accao=?, Narr_script=? where Narr_id = ?", [personagem, Narr_accao, Narr_script, idNarr],
            function(err, result) {
                console.log(result)
                conn.release();
                callback(false, { code: 200, status: "ok", data: result })
            })
    })
}

module.exports.getPassage = function(idPassage, callback, next) {
    pool.getConnection(function(err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select Narr_id_id,Narr_nome, Narr_id, Narr_personagem, Narr_script, Narr_accao, Narr_out_id, Narr_outCon_id, Narr_X, Narr_Y  FROM  Narrativa  where Narr_id=?", [idPassage], function(err, results) {

            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })

    })
}