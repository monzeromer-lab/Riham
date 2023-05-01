import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  constructor(private location: Location) { }
  @Input() title?: string;

  goBack() {
    this.location.back();
  }
}
