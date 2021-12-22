import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {

  // this service will keep track of the current user(s)

  currentUser!: IUser;

  loginUser(userName:string, password:string) {

    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

  }

}
