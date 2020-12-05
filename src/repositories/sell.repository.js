const { model } = require('../models/pay.model');
const BaseRepository = require('./base.repository');
let _sell = null;

class SellRepository extends BaseRepository {
    constructor({ Sell }) {
        super(Sell);
        _sell = Sell;
    }

}

module.exports = SellRepository;