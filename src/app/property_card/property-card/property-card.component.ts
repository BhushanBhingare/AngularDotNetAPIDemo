import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent {
  Property:any={
    "Id":1,
    "Name":"Antilia",
    "Type":"House",
    "Price":1200
  };
}
