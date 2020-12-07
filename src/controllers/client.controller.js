 let _clientService = null

 class ClientController {
     constructor({ClientService}){
        _clientService = ClientService
     }

    async create(req, res) {
        const { body } = req;
        const createUser = await _clientService.create(body);
        return res.status(200).send({status: 200, message: "Cliente creado con exito", createUser});
    }

    async getAll(req, res) {
        const client = await _clientService.getAll();
        return res.status(200).send({status: 200, client});
    }

    async searchDocumentPhone(req, res) {
        const document = parseInt(req.body.document);
        const phone = parseInt(req.body.phone);
        const client = await _clientService.searchDocumentPhone(document, phone);
        return res.status(200).send({status: 200, client});
    }
 }

 module.exports = ClientController;