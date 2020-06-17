import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {
    return this.http.post('https://putsreq.com/b6cE92tW4aTgXIgCWawi', userSettings);
    // return of(userSettings);
  }

  getsubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
