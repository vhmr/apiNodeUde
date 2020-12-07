const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware} = require('../middlewares');

module.exports = function({ HomeRoutes, ClientRoutes, WalletRoutes }) {
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter.use(express.json()).use(cors()).use(helmet()).use(compression());

    apiRouter.use("/home", HomeRoutes);
    apiRouter.use("/client", ClientRoutes);
    apiRouter.use("/wallet", WalletRoutes);

    router.use("/v1/api", apiRouter);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware)

    return router;
}