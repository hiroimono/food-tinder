import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataStoreService {

    /** Parent Subject value */
    private parentSubject: BehaviorSubject<string>;
    public parentSubject$: Observable<string>;

    /** Clicked Child Index value */
    private childIndex: BehaviorSubject<number>;
    public childIndex$: Observable<number>;

    /** search text value */
    private products: BehaviorSubject<Product[]>;
    public products$: Observable<Product[]>;

    constructor() {
        this.parentSubject = new BehaviorSubject('');
        this.parentSubject$ = this.parentSubject.asObservable();

        this.childIndex = new BehaviorSubject(null);
        this.childIndex$ = this.childIndex.asObservable();

        this.products = new BehaviorSubject([]);
        this.products$ = this.products.asObservable();
    }

    public setParentSubject(value: string) {
        this.parentSubject.next(value);
    }

    public setChildIndex(value: number) {
        this.childIndex.next(value);
    }

    public setProducts(value: Product[]) {
        this.products.next(value);
    }
}
