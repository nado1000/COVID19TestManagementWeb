import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalconfigurationService } from '../globalconfiguration.service';
@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  constructor(private globalConfigurationService : GlobalconfigurationService,
    private http: HttpClient) { }

    getAllReports():  Observable<any[]> {
      return this.http.get<any[]>(this.globalConfigurationService.reporting_getreports ).pipe(catchError(this.errorHandler));
   
  }
  private errorHandler(error: HttpErrorResponse) {
    debugger;
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
