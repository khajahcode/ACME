import { Pipe, PipeTransform } from 'angular2/core';
import { IProduct  } from './product';


@Pipe ({

    name: 'productFilter'


})



export class ProductFilterPipe implements PipeTransform {

                                           // returen value 
    transform(value: IProduct[], args: string[] ): IProduct[] {

     // pulls that filter string from the first element of this array 
     // to handle the possilbility that there is no value in the first element 
     // we then convert the filter string to lower case 
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;

        // the we return the filtered list of products
        // this is using javascript conditional operator 


    // if our filter variable has a true value , meaning that is is deined and not null 
         // then we filter the list     
        return filter ?  value.filter((product: IProduct) =>

   

     // for each product of the list  .  the product name is . convert it to lower case .  
    //and the index is used to determine if the filtered text is found in the product name , 
    //if so the element is added to the filtered list  != or ==                                    
         product.productName.toLocaleLowerCase().indexOf(filter) == -1) : 
        
         // other wise we reutrn the orignal value which is our full list of products 
         value;

        // we are using filter array method to create new array with element that pass the test defined in the provided function 
        // we are using the ES2015 => arrow syntax to define filter function 

    }




}