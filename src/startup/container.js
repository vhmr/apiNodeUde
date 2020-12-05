const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require('../config');
const app = require('.');
// services
const { HomeService } = require('../services');
//controller
const { HomeController } = require('../controllers');
//models
const { UserModel, PayModel, WalletModel, SellModel} = require('../models');
// Repositorios
const { UserRepository, WalletRepository, PayRepository, SellRepository} = require('../repositories');
//routes
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    User: asValue(UserModel),
    Wallet: asValue(WalletModel),
    Pay: asValue(PayModel),
    Sell: asValue(SellModel)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    PayRepository: asClass(PayRepository).singleton(),
    WalletRepository: asClass(WalletRepository).singleton(),
    SellRepository: asClass(SellRepository).singleton()
});

module.exports = container;