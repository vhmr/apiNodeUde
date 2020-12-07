const BaseService = require('./base.service');
let _sellService = null;

class SellService extends BaseService {
    constructor({SellRepository}) {
        super(SellRepository);
        _sellService = SellRepository;
    }
}

module.exports = SellService;