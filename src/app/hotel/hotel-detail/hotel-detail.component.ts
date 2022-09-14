import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IHotel } from 'src/app/interfaces/IHotel';
import { HotelListService } from '../hotel-list/hotel-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit
{

  public hotel: IHotel | undefined = <IHotel> {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelListService: HotelListService
  ) { }

  ngOnInit(): void
  {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.getHotels(id);
  }

  public backToList(): void
  {
    this.router.navigate(['/hotels']);
  }

  getHotels(id: number): void
  {
    this.hotelListService.getHotels().subscribe(
      (response) =>
      {
        this.hotel = response.find((hotel) => hotel.hotelId === id);
      },
      (error: HttpErrorResponse) =>
      {
        this.handleError(error);
      }
    );
  }

  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0)
    {
      console.error('An error occurred:', error.error);
    } else
    {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
