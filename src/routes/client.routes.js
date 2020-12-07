const { Router } = require("express");

module.exports = function({ ClientController }) {
    const router = Router();

    router.post("/create", ClientController.create);
    router.post("/all", ClientController.getAll);

    return router;
};