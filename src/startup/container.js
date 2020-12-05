const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require('../config');
const app = require('.');
// services
const { HomeService } = require('../services');
//controller
const { HomeController } = require('../controllers');
//models
const { UserModel, PayModel, WalletModel, SellModel} = require('../models');
//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const HomeServicie = require("../services/home.service");
const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeServicie).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(UserModel),
    Wallet: asValue(WalletModel),
    Pay: asValue(PayModel),
    Sell: asValue(SellModel)
});

module.exports = container;