import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    let fullApiUrl = `${environment.apiUrl}/default/toys1`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
        //'Authorization': 'Bearer ' + this.appData.apiKey
      })
    };

    return this.http.get( fullApiUrl );
  }

  /**
   * Executes remote call and returns an Observable so the caller can subscribe to the result
   */
  public update(toy:any): Observable<any> {
    const fullApiUrl = `${environment.apiUrl}/default/toys1`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        /*'Access-Control-Allow-Origin': '*'
        'Authorization': 'Bearer ' + this.appData.apiKey*/
      })
    };

    //form.modifiedBy = user;

    return this.http.post(fullApiUrl, JSON.stringify(toy), httpOptions);
  }

}
