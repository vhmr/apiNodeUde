 let _userService = null

 class UserController {
     constructor({UserService}){
        _userService = UserService
     }
 }

 module.exports = UserController;