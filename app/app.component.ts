/*
 register the a provider in root component
 1- add the providers to the compoent decorator -> providers: [ProductService]
 2-  import { ProductService } from './products/product.service';

 */


import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';








@Component ({

      selector: 'pm-app',
      template: `
      <div>
      <h1> {{pageTitle}} </h1>
      <pm-products> </pm-products>
      </div>

      `,
      directives: [ProductListComponent],
      providers: [ProductService]




})







export class AppComponent {

pageTitle: string = 'Welcome to ACME product';


}
