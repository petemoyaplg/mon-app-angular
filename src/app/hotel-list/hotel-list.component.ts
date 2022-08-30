import { Person } from './../models/Person';
import { Component, OnInit } from '@angular/core';
import * as xmlJs from 'xml-js';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit
{

  public title: string = "List d'hotels";
  public hotels: any[] = [];
  public showBadge: boolean = true;
  public hotelFilter = 'mot';

  public person: Person = new Person();


  constructor() { }

  ngOnInit(): void
  {
    this.hotels = [
      {
        "hotelId": 1,
        "hotelName": "Buea sweet life",
        "description": "Belle vue au bord de la mer",
        "price": 230.5,
        "imageUrl": "assets/img/hotel-room.jpg",
        "rating": 3.5
      },
      {
        "hotelId": 2,
        "hotelName": "Marakech",
        "description": "Profitez de la vue sur les montagnes",
        "price": 145.5,
        "imageUrl": "assets/img/the-interior.jpg",
        "rating": 5
      },
      {
        "hotelId": 3,
        "hotelName": "Abudja new look palace",
        "description": "Séjour complet avec service de voitures",
        "price": 120.12,
        "imageUrl": "assets/img/indoors.jpg",
        "rating": 4
      },
      {
        "hotelId": 4,
        "hotelName": "Cape town city",
        "description": "Magnifique cadre pour votre séjour",
        "price": 135.12,
        "imageUrl": "assets/img/window.jpg",
        "rating": 2.5
      }
    ];

    console.log('====================================');
    console.log(this.getWithXmlJsLibrary(this.person));
    console.log('====================================');
  }

  getWithXmlJsLibrary(obj: Person)
  {
    const options = { compact: true, ignoreComment: true, spaces: 4 };
    return xmlJs.js2xml(obj, options);     // js2xml
  }

  public toggleIsNewBadge(): void
  {
    this.showBadge = !this.showBadge;
  }
}
