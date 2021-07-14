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
    private tinderProductsSubs: Subscription;
    public isTinderMode: boolean;
    public animationState: string;
    public index: number;
    public category: string;
    public isLike: boolean;
    public isNope: boolean;
    public isFav: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _products: ProductsService,
        private _store: DataStoreService
    ) {
        this.isTinderMode = false;
        this.isLike = false;
        this.isFav = false;
        this.isNope = false;
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
                this._store.setTinderProducts(this.tinderProducts);
            })

        this.tinderProductsSubs = this._store.tinderProducts$.subscribe(products => this.tinderProducts = [...products])

        this.subscription.add(this.tinderProductsSubs);
    }

    public switchMode(event: { originalEvent: any, checked: boolean }) {
        this.isTinderMode = event.checked
    }

    public onSwipe(event: any) {
        const swipeX = Math.abs(event.deltaX) > 100 ? (event.deltaX > 0 ? "swiperight" : "swipeleft") : "";
        const swipeY = Math.abs(event.deltaY) > 50 ? (event.deltaY > 0 ? "swipedown" : "swipeup") : "";

        if (swipeX && (swipeY === 'swipedown' || swipeY === '')) {
            this.cardAnimation(swipeX)
        } else if (swipeY) {
            this.cardAnimation(swipeY)
        }
    }

    public onPan(event: any) {

        if (event.deltaX < 50 && event.deltaX > -50) {
            if (event.deltaY < 50 && event.deltaY > -50) {
                (this.isNope = false, this.isLike = false, this.isFav = true)
            } else {
                event.deltaY > 50 ?
                    (this.isNope = false, this.isLike = false, this.isFav = true) :
                    (this.isNope = false, this.isLike = false, this.isFav = false)
            }
        } else {
            if (event.deltaY < -50) {
                (this.isNope = false, this.isLike = false, this.isFav = false)
            } else {
                event.deltaX < 0 ?
                    (this.isLike = false, this.isFav = false, this.isNope = true) :
                    (this.isNope = false, this.isFav = false, this.isLike = true)
            }
        }


        if (event.center.x === 0 && event.center.y === 0) return;
    }

    public onPitch(event: any) {

        if (event.deltaX < 50 && event.deltaX > -50) {
            if (event.deltaY < 50 && event.deltaY > -50) {
                (this.isNope = false, this.isLike = false, this.isFav = true)
            } else {
                event.deltaY > 50 ?
                    (this.isNope = false, this.isLike = false, this.isFav = true) :
                    (this.isNope = false, this.isLike = false, this.isFav = false)
            }
        } else {
            if (event.deltaY < -50) {
                (this.isNope = false, this.isLike = false, this.isFav = false)
            } else {
                event.deltaX < 0 ?
                    (this.isLike = false, this.isFav = false, this.isNope = true) :
                    (this.isNope = false, this.isFav = false, this.isLike = true)
            }
        }


        if (event.center.x === 0 && event.center.y === 0) return;
    }

    public cardAnimation(value: string) {
        this._store.setParentSubject(value);
        setTimeout(() => {
            this.tinderProducts.shift();
            this._store.setTinderProducts(this.tinderProducts);
            this.isNope = false, this.isLike = false, this.isFav = false
        }, 300)
    }
}
