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