import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToysService {

  constructor( private http:HttpClient ) { 

  }

  /**
   * Executes remote call and returns an Observable so the caller can subscribe to the result
   */
   public getData():Observable<any> {
    let fullApiUrl = `https://2nif3zuj43.execute-api.us-east-2.amazonaws.com/default/toys1`;

    /*const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.appData.apiKey
      })
    };*/

    return this.http.get( fullApiUrl );
  }

}
