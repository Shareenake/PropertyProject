import {Component} from '@angular/core';

@Component({
selector: 'app-property-card',
  //template:`<h1>Hello<h1>`,
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})


export class PropertyCardComponent{
  Property:any={
    "Id":1,
    "Name":"Birla Houses",
    "Type":"House",
    "Price":20000
  }
}
