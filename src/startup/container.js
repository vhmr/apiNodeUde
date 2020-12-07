const { createContainer, asClass, asValue, asFunction } = require("awilix");
const config = require('../config');
const app = require('.');
// services
const { HomeService, UserService, ClientService, SellService, WalletService } = require('../services');
//controller
const { HomeController, ClientController, WalletController } = require('../controllers');
//models
const { UserModel, WalletModel, SellModel, ClientModel} = require('../models');
// Repositorios
const { UserRepository, WalletRepository, SellRepository, ClientRepository} = require('../repositories');
//routes
const { HomeRoutes, ClientRoutes, WalletRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
}).register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    ClientService: asClass(ClientService).singleton(),
    SellService: asClass(SellService).singleton(),
    WalletService: asClass(WalletService).singleton()
}).register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    ClientController: asClass(ClientController.bind(ClientController)).singleton(),
    WalletController: asClass(WalletController.bind(WalletController)).singleton()
}).register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    ClientRoutes: asFunction(ClientRoutes).singleton(),
    WalletRoutes: asFunction(WalletRoutes).singleton()
}).register({
    User: asValue(UserModel),
    Wallet: asValue(WalletModel),
    Sell: asValue(SellModel),
    Client: asValue(ClientModel)
}).register({
    UserRepository: asClass(UserRepository).singleton(),
    WalletRepository: asClass(WalletRepository).singleton(),
    SellRepository: asClass(SellRepository).singleton(),
    ClientRepository: asClass(ClientRepository).singleton()
});

module.exports = container;