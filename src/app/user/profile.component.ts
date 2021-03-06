import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }

    .error input {
      background-color: #e3c3c5;
    }

    /* styling the placeholder for each browser */
    .error ::-webkit-input-placeholder {color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder{color: #999}
  `]
})
export class ProfileComponent implements OnInit {

  profileForm!:FormGroup;
  private firstName!:FormControl;
  private lastName!:FormControl;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    // form control for the inputs
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    // add these controls to a form: use formgroup for that
    this.profileForm = new FormGroup({
      // set properties for each of the controls
      firstName: this.firstName,
      lastName: this.lastName
    })

  }

  saveProfile(formValues:any) {
    // navigate if form is valid
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
    }

  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.touched
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.touched
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
