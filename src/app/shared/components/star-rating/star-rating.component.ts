import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponents implements OnChanges
{

  public starWidth!: number;

  @Input()
  public rating: number = 2;

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void
  {
    this.starWidth = this.rating * 130 / 5;
  }

  public sendRating(): void
  {
    this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }
}
