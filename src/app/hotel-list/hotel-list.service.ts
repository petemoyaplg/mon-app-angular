import { hotels } from './../tools/hotel-list';
import { IHotel } from './../interfaces/IHotel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelListService
{
  private readonly HOTEL_API_URL = "../../api/hotels.json";

  constructor(private http: HttpClient) { }

  // public getHotels(): Observable<IHotel[]>
  // {
  //   return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
  //     tap(hotel => console.log("hotel : ", hotel)),
  //     catchError(this.handleError)
  //   );
  // }

  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0)
    {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else
    {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
function tap(arg0: (hotel: any) => void): import("rxjs").OperatorFunction<IHotel[], IHotel[]>
{
  throw new Error('Function not implemented.');
}
