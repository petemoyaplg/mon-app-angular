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
  public _hotelFilter!:string;

  constructor() { }

  ngOnInit(): void
  {
    this._hotelFilter = '';
    this.hotels = [
      {
        hotelId: 1,
        hotelName: 'Buea sweet life',
        description: 'Belle vue au bord de la mer',
        price: 230.5,
        imageUrl: 'assets/img/hotel-room.jpg',
        rating: 3.5,
      },
      {
        hotelId: 2,
        hotelName: 'Marakech',
        description: 'Profitez de la vue sur les montagnes',
        price: 145.5,
        imageUrl: 'assets/img/the-interior.jpg',
        rating: 1.5,
      },
      {
        hotelId: 3,
        hotelName: 'Abudja new look palace',
        description: 'Séjour complet avec service de voitures',
        price: 120.12,
        imageUrl: 'assets/img/indoors.jpg',
        rating: 4,
      },
      {
        hotelId: 4,
        hotelName: 'Cape town city',
        description: 'Magnifique cadre pour votre séjour',
        price: 135.12,
        imageUrl: 'assets/img/window.jpg',
        rating: 2.5,
      },
      {
        hotelId: 5,
        hotelName: 'Bali',
        description: 'Séjour à la plage',
        price: 175.12,
        imageUrl: 'assets/img/difference-between-resort-and-hotel.jpg',
        rating: 3.5,
      },
      {
        hotelId: 6,
        hotelName: 'Hawaî',
        description: "Séjour dans l'ilot",
        price: 275.12,
        imageUrl: 'assets/img/16a0f021ec0fa936da724c6a235cd022.jpg',
        rating: 4.5,
      },
      {
        hotelId: 7,
        hotelName: 'Athlantis',
        description: 'Hotels mythique',
        price: 875.12,
        imageUrl: 'assets/img/15256933629785.jpg',
        rating: 3.5,
      },
      {
        hotelId: 8,
        hotelName: 'Hotel royal',
        description: 'Hotel présidentiel',
        price: 575.12,
        imageUrl: 'assets/img/lobby-d-h-tel-39479289.jpg',
        rating: 5,
      },
    ];
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
