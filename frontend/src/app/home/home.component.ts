import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

/** Services */
import { ProductsService } from 'src/app/services/products.service';
// import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public products: Product[];
    private productsSubs: Subscription;
    public productCategories: any[];

    constructor(
        private _products: ProductsService,
        private _router: Router,
        private _route: ActivatedRoute,
    ) {
        this.products = [];
    }

    ngOnInit() {
        this.initProductSubs();
        this.getProductCategories();
    }

    ngOnDestroy() {
        this.productsSubs.unsubscribe();
    }

    private initProductSubs() {
        this.productsSubs = this._products.getAllProducts().subscribe(res => {
            console.log('res: ', res);
            this.products = [...res];

            if (this.products.length) this.productCategories = this.getProductCategories();
        })
    }

    private getProductCategories() {
        const catArr = [];
        this.products.forEach(product => {
            const found = catArr.find(item => item.name === product.category.name);
            if (!found) {
                catArr.push({
                    name: product.category.name,
                    image: product.imageSet[0].url
                })
            }
        })

        return catArr;
    }

    public selectCat(selected: string) {
        console.log('selected: ', selected);
        this._router.navigate(['categories', selected], { relativeTo: this._route });
    }
}
