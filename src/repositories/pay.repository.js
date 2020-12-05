const { model } = require('../models/pay.model');
const BaseRepository = require('./base.repository');
let _pay = null;

class PayRepository extends BaseRepository {
    constructor({ Pay }) {
        super(Pay);
        _pay = Pay;
    }

}

module.exports = PayRepository;