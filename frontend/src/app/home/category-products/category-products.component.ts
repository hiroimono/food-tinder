import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** RxJS */
import { iif, of, Subscription, Observable, combineLatest, from } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';

/** Services */
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-category-products',
    templateUrl: './category-products.component.html',
    styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
    private paramsSubs: Subscription;
    public products: Product[];

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _products: ProductsService
    ) {
        this.getUrlParams();
    }

    ngOnInit(): void {
    }

    private getUrlParams() {
        /** Observable for router params */
        this.paramsSubs = this._route.params
            .pipe(
                switchMap(params => {
                    console.log('params: ', params);
                    return this._products.getCategoryProducts(params.cat)
                })
            )
            .subscribe(res => {
                console.log('res: ', res);
                this.products = [...res];
            })
    }

}
