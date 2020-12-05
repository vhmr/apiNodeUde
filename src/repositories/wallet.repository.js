const { model } = require('../models/pay.model');
const BaseRepository = require('./base.repository');
let _wallet = null;

class WalletRepository extends BaseRepository {
    constructor({ Wallet }) {
        super(Wallet);
        _wallet = Wallet;
    }

}

module.exports = WalletRepository;