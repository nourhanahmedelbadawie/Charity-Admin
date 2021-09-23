import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
observe: 'response'  })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {



  configUrl = 'http://178.62.19.101:8888/index.php/api/dashboard/';


  constructor(private http: HttpClient) { }
  login(user: any): Observable<any> {
      return this.http.post<any>(`${this.configUrl}login/`, user   ,httpOptions )
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
// =================================== Home=================================
sendHomeScreen(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}HomeScreen/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}

// =================================== Documnet=================================
sendDocScreen(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}documents/add_new_doc/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}

// achivemnt
getAchievement(): Observable<any> {
  return this.http.get(`${this.configUrl}get_all_achievements/`)    
.pipe(
  catchError(this.handleError)
);
}

sendAchievement(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}achievements/add_achievement/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
}
