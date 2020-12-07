const { model } = require('../models/pay.model');
const BaseRepository = require('./base.repository');
let _wallet = null;

class WalletRepository extends BaseRepository {
    constructor({ Wallet }) {
        super(Wallet);
        _wallet = Wallet;
    }

    async getWallet(userId){
        const wallet = await _wallet.find({"userId": userId});
        return wallet;
    }

    async getLastWallet(userId) {
       return await _wallet.find({"userId": userId}).sort( { _id : -1 } ).limit(1);
    }
}

module.exports = WalletRepository;