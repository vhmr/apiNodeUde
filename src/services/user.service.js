const BaseService = require('./base.service');
let _userService = null;

class UserService extends BaseService {
    
    constructor({UserRepository}) {
        super(UserRepository);
        _userService = UserRepository;
    }


}

module.exports = UserService;