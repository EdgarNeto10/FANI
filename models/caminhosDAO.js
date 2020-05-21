
var pool = require('./MysqlConn').pool;

//Função para testes

module.exports.getAllCaminhos = function (callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select * from Caminho ",
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

module.exports.saveCaminhos = function (Narr_id,path,callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query('insert into Caminho (Caminho_narr_id,Caminho_path) values(?,?)', [Narr_id,path], function (err, results) {

            conn.release();
            if (err) {
                callback(err, { code: 500, status: "Error in a database query" })
                return;
            }
            callback(false, { code: 200, status: "ok", data: results })
        })
    })


}

module.exports.getCaminho = function (idPath, callback, next) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, { code: 500, status: "Error in the connection to the database" })
            return;
        }
        conn.query("select  Caminho_path, Caminho_narr_id  FROM   Caminho  where Caminho_narr_id=?",
            [idPath], function (err, results) {

                conn.release();
                if (err) {
                    callback(err, { code: 500, status: "Error in a database query" })
                    return;
                }
                callback(false, { code: 200, status: "ok", data: results })
            })

    })
}




