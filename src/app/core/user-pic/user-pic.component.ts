import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-user-pic',
  templateUrl: './user-pic.component.html',
  styleUrls: ['./user-pic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPicComponent implements OnInit {
  @Input() picture: string;
  @Input() firstName: string;
  @Input() lastName: string;

  constructor() {
  }

  ngOnInit() {
  }
}
