import { Component, OnInit } from '@angular/core';
import { userSettings } from '../data/user-setting';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSetting: userSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: ""

  };

  // The ... operator will copy everything in the originalUserSetting and set it to
  // the userSettings
  userSettings  : userSettings = { ...this.originalUserSetting};
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log("in onSubmit: ", form.valid);
  }

  onBlur(field:NgModel){
    console.log("in onBlur: ", field.valid);
  }

}
