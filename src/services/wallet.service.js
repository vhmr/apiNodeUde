const BaseService = require('./base.service');
let _walletRepo = null;

class WalletService extends BaseService {
    constructor({WalletRepository}) {
        super(WalletRepository);
        _walletRepo = WalletRepository;
    }

    async recarga(monto, id) {
        
        const recarga = await _walletRepo.getWallet(id);
                 
        if(recarga.length === 0) {
            return await _walletRepo.create({
                userId: id,
                description: "Recarga de saldo",
                haber: monto,
                debe: null,
                saldo: monto
            })
        }else{
            const ultimo = await _walletRepo.getLastWallet(id);
            let saldo = ultimo[0].saldo; 
            return await _walletRepo.create({
                userId: id,
                description: "Recarga de saldo",
                haber: monto,
                debe: null,
                saldo: parseInt(monto)+parseInt(saldo)
            })   
        } 
    }

    async consultaSaldo(id) {
        
        const consulta = await _walletRepo.getWallet(id);
        let ultimo =  await _walletRepo.getLastWallet(id);
        let saldo = ultimo[0].saldo; 

        return [consulta, saldo];
     
    }
}

module.exports = WalletService;