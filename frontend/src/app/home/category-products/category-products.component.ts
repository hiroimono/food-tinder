import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/** RxJS */
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/** Services */
import { ProductsService } from 'src/app/services/products.service';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
    selector: 'app-category-products',
    templateUrl: './category-products.component.html',
    styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent {
    public products$: Observable<Product[]>;
    public products: Product[];
    public tinderProducts: Product[];
    private subscription: Subscription;
    private getProductsSubs: Subscription;
    private tinderProductsSubs: Subscription;
    public isTinderMode: boolean;
    public animationState: string;
    public index: number;
    public category: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _products: ProductsService,
        private _store: DataStoreService
    ) {
        this.isTinderMode = false;
    }

    ngOnInit(): void {
        this.initSubscriptions();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private async initSubscriptions() {
        /** Observable for router params */
        this.subscription = this._route.params
            .pipe(
                switchMap(params => {
                    console.log('params: ', params);
                    this.category = params.cat;
                    return this._products.getCategoryProducts(params.cat)
                })
            )
            .subscribe(products => {
                this.products = [...products]
                console.log('this.products: ', this.products);
                this.tinderProducts = [...this.products]
                this._store.setProducts(this.tinderProducts);
            })

        this.tinderProductsSubs = this._store.products$.subscribe(products => this.tinderProducts = [...products])

        this.subscription.add(this.tinderProductsSubs);
    }

    public switchMode(event: { originalEvent: any, checked: boolean }) {
        this.isTinderMode = event.checked
    }

    // public onHide() {
    //     this.getProductsSubs = this._products.getCategoryProducts(this.category)
    //         .subscribe(products => {
    //             this.products = [...products]
    //             console.log('this.products: ', this.products);
    //             this._store.setProducts(this.products);
    //         });

    //     this.subscription.add(this.getProductsSubs);
    // }

    public cardAnimation(value: string) {
        this._store.setParentSubject(value);
        setTimeout(() => {
            this.tinderProducts.shift();
            this._store.setProducts(this.tinderProducts);
        }, 200)
    }
}
