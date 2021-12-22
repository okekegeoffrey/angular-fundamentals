import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

  profileForm!:FormGroup;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    // form control for the inputs
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);

    // add these controls to a form: use formgroup for that
    this.profileForm = new FormGroup({
      // set properties for each of the controls
      firstName: firstName,
      lastName: lastName
    })

  }

  saveProfile(formValues:any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
