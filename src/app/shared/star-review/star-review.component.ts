import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.scss']
})
export class StarReviewComponent implements OnInit {

  @Input() mark: number = 5;
  countStar: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.countStar = Array(Math.round(this.mark / 2));
  }

}
