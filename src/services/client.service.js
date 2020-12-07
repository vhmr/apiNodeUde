const BaseService = require('./base.service');
let _clientRepo = null;

class ClientService extends BaseService {
    
    constructor({ClientRepository}) {
        super(ClientRepository);
        _clientRepo = ClientRepository;
    }

    async searchDocumentPhone(document, phone) {
        const client = await _clientRepo.searchDocumentPhone({document, phone});
        return client;
    }
}

module.exports = ClientService;