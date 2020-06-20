import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSetting: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null

  };

  singleModel = "On";

  startDate: Date;
  startTime: Date;
  // The ... operator will copy everything in the originalUserSetting and set it to
  // the UserSettings
  userSettings  : UserSettings = { ...this.originalUserSetting};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes: Observable<string[]>;
  // subscriptionTypes = ['one','two'];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getsubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onHttpError(errorResponse:any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
    
  }

  onSubmit(form: NgForm){
    console.log("in onSubmit: ", form.value);

    // if(form.valid) {
    //   this.dataService.postUserSettingsForm(this.userSettings).subscribe(
    //     result => console.log('success: ', result),
    //     error => this.onHttpError(error)
    //   );
    // }
    // else{
    //   this.postError = true;
    //   this.postErrorMessage = "Pleae fix the above errors";
    // }
    
  }

  onBlur(field:NgModel){
    console.log("in onBlur: ", field.valid);
  }

}
