
// 2- we import OnChanges , Input 
import {Component , OnChanges , Input , Output , EventEmitter } from 'angular2/core';

// 3- Component selector so you can use on product-list.component.html 
@Component({
 
  selector: 'ai-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css']



})




 // 1- implements OnChanges
export class StarComponent implements OnChanges{


 // to use Input pass the function 
 @Input() rating: number;
 starWidth: number;

 // define the type of this property to be EventEmitter and event payload to be string as generic argument
@Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();



 // 4- using ngOnChanges method 
 ngOnChanges(): void {

 this.starWidth = this.rating * 86 / 5;

 }


 // to event the rating directly into this string using $syntax
 onClick() {
 
  this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);

 }


}