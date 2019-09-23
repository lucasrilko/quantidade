
module.exports = (application) => {
    application.get('/login', (req, res) => {
        application.app.controllers.login.login(application, req, res);
    });

    application.get('/ordens', (req, res) => {
        application.app.controllers.login.ordens(application, req, res);
    });
}