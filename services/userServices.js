class UserService {
  currentUser() {
    return 'John';
  }
}

angular.module('myApp').service('userService', UserService);
