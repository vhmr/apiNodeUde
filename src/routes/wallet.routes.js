const { Router } = require("express");

module.exports = function({ WalletController }) {
    const router = Router();

    router.post("/recarga", WalletController.recarga);
    router.post("/all", WalletController.consultaSaldo);


    return router;
};