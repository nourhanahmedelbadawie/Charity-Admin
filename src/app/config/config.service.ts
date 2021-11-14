import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
observe: 'response'  })
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {



  configUrl = 'http://137.184.108.244:8081/index.php/api/dashboard/';
  configViewUrl="http://137.184.108.244:8081/index.php/api"

  constructor(private http: HttpClient , private route: Router) { }
  login(user: any): Observable<any> {
      return this.http.post<any>(`${this.configUrl}login/`, user   ,httpOptions )
    .pipe(
      catchError(this.handleError)
    );
  }
    logout(): void{
     localStorage.removeItem('token')
     this.route.navigate(['/login']);

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

// ============================================== achivemnt ==================================================
getAchievement(): Observable<any> {
  return this.http.get(`${this.configViewUrl}/get_all_achievements/`)    
.pipe(
  catchError(this.handleError)
);
}
getOneAchivement(id){
  return this.http.get(`${this.configViewUrl}/achievements/${id}`)    
  .pipe(
    catchError(this.handleError)
  );
  }

 updateAchievement(obj: any): Observable<any> {
    return this.http.post<any>(`${this.configViewUrl}achievements/`, obj, httpOptions)    
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
// ============================================== Partners ==================================================

sendPartner(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}static_partners/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
sendPartnerLogo(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}partners/add_partner/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}



// ============================================== Donor ==================================================



getAllDonors(): Observable<any> {
  return this.http.get<any>(`${this.configUrl}get_all_donors/`, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}


// ============================================== Profile ==================================================

updateUser(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}edit_profile/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}






// ============================================== About us ==================================================


send_about_us_main(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_main/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}

send_about_us_section_two(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_section_two/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
send_about_us_why_choose_us_01(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_why_choose_us_01/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
send_about_us_why_choose_us_02(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_why_choose_us_02/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
send_about_us_why_choose_us_03(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_why_choose_us_03/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
send_about_us_why_choose_us_04(obj: any): Observable<any> {
  return this.http.post<any>(`${this.configUrl}about_us_why_choose_us_04/`, obj, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}




// ============================================== Department ==================================================


getNormalDepartment(): Observable<any> {
  return this.http.get<any>(`${this.configViewUrl}/departments/get_normal_departments`, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
getUrgentDepartment(): Observable<any> {
  return this.http.get<any>(`${this.configViewUrl}/departments/get_urgent_department`, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
6

makeUrgentDepartment(id ,obj): Observable<any> {
  return this.http.put<any>(`${this.configUrl}departments/make_urgent/${id}`, obj , httpOptions)    
.pipe(
  catchError(this.handleError)
);
}
addNewDepartment(obj){
  return this.http.post<any>(`${this.configUrl}departments/add_department`, obj , httpOptions)    
  .pipe(
    catchError(this.handleError)
  );
}






getOneDonor(id): Observable<any> {
  return this.http.get<any>(`${this.configViewUrl}donations/departmentDonations/${id}`, httpOptions)    
.pipe(
  catchError(this.handleError)
);
}











}