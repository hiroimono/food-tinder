import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** RxJS */
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/** Services */
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-category-products',
    templateUrl: './category-products.component.html',
    styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent {
    public products$: Observable<Product[]>;
    public products: Product[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _products: ProductsService
    ) {
    }

    ngOnInit(): void {
        this.getUrlParams();
    }

    // this.params$.unsubscribe();

    private getUrlParams() {
        /** Observable for router params */
        this.products$ = this._route.params
            .pipe(
                switchMap(params => {
                    console.log('params: ', params);
                    return this._products.getCategoryProducts(params.cat)
                })
            )

        this.products$.subscribe(products => {
            this.products = [...products]
            console.log('this.products: ', this.products);
        })
    }
}
