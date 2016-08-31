// 2- import the life cycle hooks interface

/*

4- import ProductService 

5-   products: IProduct[]; -> for retrive data interface from product.ts  
     constructor(private _productService: ProductService) {} -> to use constructor function for dependency injector 

// ngOnInit 
6-  ngOnInit(): void {

   //console.log('In OnInit');
   this.products = this._productService.getProducts();


 }


*/


import {Component , OnInit } from 'angular2/core';
import {IProduct} from './product';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component';
import {ProductService} from './product.service';

@Component ({

  selector: 'pm-products',
  templateUrl: 'app/products/product-list.component.html',
  styleUrls: ['app/products/product-list.component.css'],
  pipes: [ProductFilterPipe],
  directives: [StarComponent]




})
// 1- implements for Oninit interface
export class ProductListComponent implements OnInit {

    // using Oninit life cycle hooks


product_list : string = 'Products List';

  // these for resize the image
  imageWidth: number = 50;
  imageMargin: number = 2;

  // this for making the image button show or hidden , since its false by defult it will be hidden
  showImage: boolean = false;

  // this for filter the product
  listFilter: string;

  products: IProduct[];


    constructor(private _productService: ProductService) {

    }
 


 toggleImage(): void {

   this.showImage = !this.showImage;
   }

 // 3- add method for Oninit hook 
 // this life cycle hooks we used it to retrive data 
 ngOnInit(): void {

   //console.log('In OnInit');
   this.products = this._productService.getProducts();


 }

 onRatingClicked(message: string): void {
  
  this.product_list = 'product List' + message;

 }



}
