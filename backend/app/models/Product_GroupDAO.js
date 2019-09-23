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


module.exports = () => {
    return login_GroupDAO;
}