class AboutController {

  constructor(userService) {
    this.user = userService.currentUser();
  }
}
angular.module('myApp').controller('AboutController', AboutController);
