import { hotels } from '../../tools/hotel-list';
import { HotelListService } from './hotel-list.service';
import { Component, OnInit } from '@angular/core';
import { IHotel } from '../../interfaces/IHotel';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
// import hotelsData from '../../api/hotels.json';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss'],
})
export class HotelListComponent implements OnInit
{
  public title: string = "List d'hotels";
  public hotels: IHotel[] = [];
  public filteredHotels: IHotel[] = [];
  public showBadge: boolean = true;
  public receivedRating!: string;
  public _hotelFilter!: string;

  constructor(private hotelListService: HotelListService) { }

  ngOnInit(): void
  {
    this._hotelFilter = '';
    this.getHotels();
  }

  getHotels(): void
  {
    this.hotelListService.getHotels().subscribe(
      (response) =>
      {
        this.hotels = this.filteredHotels = response;
      },
      (error: HttpErrorResponse) =>
      {
        this.handleError(error);
      }
    );
  }

  public toggleIsNewBadge(): void
  {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string
  {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string)
  {
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this._hotelFilter) : this.hotels;
  }

  private filterHotels(criteria: string): IHotel[]
  {
    criteria = criteria.toLocaleLowerCase();

    return this.hotels.filter(
      (hotel: IHotel) =>
        hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
  }

  public receiveRatingClick(message: string): void
  {
    this.receivedRating = message;
    console.log(message);
  }

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
