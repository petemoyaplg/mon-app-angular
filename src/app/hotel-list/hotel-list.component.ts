import { hotels } from './../tools/hotel-list';
import { HotelListService } from './hotel-list.service';
import { Component, OnInit } from '@angular/core';
import { IHotel } from '../interfaces/IHotel';
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
    this.hotels = hotels;
    this.filteredHotels = this.hotels;
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
}
