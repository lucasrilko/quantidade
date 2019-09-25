function login_GroupDAO(connection) {
    this._connection = connection;
}


login_GroupDAO.prototype.login = function (callback) {
    this._connection.query(`
        SELECT email_Funcionario,usuario,senha,nome_Funcionario from funcionario;
	`, callback)
}
login_GroupDAO.prototype.ordens = function (callback) {
    this._connection.query(`
    SELECT * FROM ordem_servico AS o 
	INNER JOIN cliente AS c ON o.id_ClienteOS =c.id_Cliente
	`, callback)
}
login_GroupDAO.prototype.postProduto = function (produto,callback) {
    this._connection.query(` 
    INSERT INTO estoque set ?
	`,produto, callback)
}
login_GroupDAO.prototype.getProduto = function (callback) {
    this._connection.query(`
    SELECT * FROM estoque ORDER BY id_Produto DESC
	`, callback)
}
login_GroupDAO.prototype.deleteProdutos = function (id,callback) {
    console.log(id)
    this._connection.query(`
    DELETE from estoque where id_Produto = ?;
	`,id, callback)
}





module.exports = () => {
    return login_GroupDAO;
}