 let _walletService = null
 let _clientService = null

 class WalletController {
     constructor({WalletService, ClientService}){
        _walletService = WalletService,
        _clientService = ClientService
     }

     async recarga(req, res) {

        const document = parseInt(req.body.document);
        const phone = parseInt(req.body.phone);
        const monto = parseInt(req.body.monto);

        const client = await _clientService.searchDocumentPhone(document, phone);
        let id = client[0]._id;
        const recargar = await _walletService.recarga(monto, id);
        return res.status(200).send({status: 200, message: "Recarga exitosa", recargar});
     }

     async consultaSaldo(req, res) {

         const document = parseInt(req.body.document);
         const phone = parseInt(req.body.phone);
         
         const client = await _clientService.searchDocumentPhone(document, phone);
         let id = client[0]._id;
         const consultaSaldo = await _walletService.consultaSaldo(id);
         return res.status(200).send({status: 200, consultaSaldo});

     }

 }

 module.exports = WalletController;