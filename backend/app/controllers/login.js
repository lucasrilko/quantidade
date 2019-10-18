module.exports.login = (application, req, res) => {
    let quote_id = req.params.id;
    let groupNumber = req.params.groupNumber;

    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.login((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}
module.exports.ordens = (application, req, res) => {
    let quote_id = req.params.id;
    let groupNumber = req.params.groupNumber;

    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.ordens((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.postProdutos = (application, req, res) => {
   
    let produto = req.body

    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.postProduto(produto,(error, results) => {
        if (error) throw error
        return res.send(results)
    });
}
module.exports.getProdutos = (application, req, res) => {

    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.getProduto((error, results) => {
        if (error) throw error
        return res.send(results)
    });
}
module.exports.deleteProdutos = (application, req, res) => {

    let id = req.params.id
    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.deleteProdutos(id,(error, results) => {
        if (error) throw error
        return res.send(results)
    });
}

module.exports.postLogin= (application, req, res) => {
   
    let login = req.body

    var connection = application.config.dbConnection;
    var login_groupDAO = new application.app.models.Product_GroupDAO(connection);

    login_groupDAO.postLogin(login,(error, results) => {
        if (error) throw error
        return res.send(results)
    });
}
