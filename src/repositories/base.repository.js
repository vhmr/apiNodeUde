class BaseRepository {

    constructor(model){
        this.model = model
    }

    async get(id){
        return await this.model.findById(id)
    }

    async getAll(){
        return await this.model.find()
    }

    async searchDocumentPhone({document, phone}) {

        const client = await this.model.find({"document": document, "phone": phone});
        
        if(client.length === 0){
            const error = new Error();
            error.status = 400;
            error.message = "No se encuentra el cliente";
            throw error;
        }

        return client;
    }

    async create(entity){
        return await this.model.create(entity)
    }

    async update(id, entity){
        return await this.model.findByIdAndUpdate(id, entity, {new:true})
    }

    async delete(id){
        return await this.model.findByIdAndDelete(id)
    }
}

module.exports = BaseRepository;