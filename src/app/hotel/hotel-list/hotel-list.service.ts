import { hotels } from '../../tools/hotel-list';
import { IHotel } from '../../interfaces/IHotel';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HotelListService
{
  private readonly HOTEL_API_URL = "api/hotels.json";

  constructor(private http: HttpClient) { }

  public getHotels(): Observable<IHotel[]>
  {
    return this.http.get<IHotel[]>(this.HOTEL_API_URL);
  }
}

