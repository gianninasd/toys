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
    let fullApiUrl = `https://e2u4zw2gvb.execute-api.us-east-2.amazonaws.com/Prod/cardSim/c1ffc78c-2d69-47fb-9644-39b499110fa1`;

    /*const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.appData.apiKey
      })
    };*/

    return this.http.get( fullApiUrl );
  }

}
