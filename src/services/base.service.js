class BaseService {
    constructor(reposiroty){
        this.reposiroty = reposiroty
    }

    async get(id){

        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = "El id no fue envíado";
            throw error;
        }

        const currentEntity = await this.reposiroty.get(id);

        if(!currentEntity) {
            const error = new Error();
            error.status = 404;
            error.message = "Entidad no encontrada";
            throw error;
        }

        return currentEntity;

    }

    async getAll(){
        return await this.reposiroty.getAll();
    }

    async create(entity){
        return await this.reposiroty.create(entity);
    }

    async update(id, entity) {

        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = "El id no fue envíado";
            throw error;
        }

        return await this.reposiroty.update(id, entity);
    }

    async delete(id) {
        if(!id) {
            const error = new Error();
            error.status = 400;
            error.message = "El id no fue envíado";
            throw error;
        }

        return await this.reposiroty.delete(id);
    }
}

module.exports = BaseService;