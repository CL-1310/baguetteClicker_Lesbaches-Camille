import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
})
export class FrameComponent implements OnInit {

  @Input() title = '';
  @Input() copyrightYear: number = 0;
  @Input() copyrightName: string = "";

  constructor() {
    this.copyrightYear = this.copyrightYear;
    this.copyrightName = this.copyrightName;
  }



  ngOnInit(): void {}
}
