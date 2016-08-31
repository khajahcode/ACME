System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ProductFilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductFilterPipe = (function () {
                function ProductFilterPipe() {
                }
                // returen value 
                ProductFilterPipe.prototype.transform = function (value, args) {
                    // pulls that filter string from the first element of this array 
                    // to handle the possilbility that there is no value in the first element 
                    // we then convert the filter string to lower case 
                    var filter = args[0] ? args[0].toLocaleLowerCase() : null;
                    // the we return the filtered list of products
                    // this is using javascript conditional operator 
                    // if our filter variable has a true value , meaning that is is deined and not null 
                    // then we filter the list     
                    return filter ? value.filter(function (product) {
                        // for each product of the list  .  the product name is . convert it to lower case .  
                        //and the index is used to determine if the filtered text is found in the product name , 
                        //if so the element is added to the filtered list  != or ==                                    
                        return product.productName.toLocaleLowerCase().indexOf(filter) == -1;
                    }) :
                        // other wise we reutrn the orignal value which is our full list of products 
                        value;
                    // we are using filter array method to create new array with element that pass the test defined in the provided function 
                    // we are using the ES2015 => arrow syntax to define filter function 
                };
                ProductFilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'productFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductFilterPipe);
                return ProductFilterPipe;
            }());
            exports_1("ProductFilterPipe", ProductFilterPipe);
        }
    }
});
//# sourceMappingURL=product-filter.pipe.js.map