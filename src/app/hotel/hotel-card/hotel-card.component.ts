import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/app/interfaces/IHotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  public filteredHotels: IHotel[] = [];
  public showBadge: boolean = true;
  public receivedRating!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public receiveRatingClick(message: string): void
  {
    this.receivedRating = message;
    console.log(message);
  }

}
