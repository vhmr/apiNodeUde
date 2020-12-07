const { model } = require('../models/client.model');
const BaseRepository = require('./base.repository');
let _client = null;

class ClientRepository extends BaseRepository {
    constructor({ Client }) {
        super(Client);
        _client = Client;
    }

}

module.exports = ClientRepository;