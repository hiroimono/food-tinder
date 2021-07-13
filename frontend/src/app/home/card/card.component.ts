import { Component, Input, OnInit } from '@angular/core';

/** Animation Part */
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

/** Rxjs */
import { Subscription } from 'rxjs';

/** Services */
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('cardAnimator', [
            transition('* => swiperight', animate(500, keyframes(kf.swiperight))),
            transition('* => swipeleft', animate(500, keyframes(kf.swipeleft)))
        ])
    ]
})
export class CardComponent implements OnInit {
    @Input() title: string;
    @Input() text: string;
    @Input() image: string;
    @Input() index: number;
    @Input() isTinderMode: boolean;
    @Input() product: Product;

    public users: Product[];
    public animationState: string;
    private subscriptions: Subscription;
    private productSubs: Subscription;
    public products: Product[];

    constructor(
        private _store: DataStoreService
    ) { }

    ngOnInit(): void {
        this.subscriptions = this._store.parentSubject$.subscribe(event => {
            this.startAnimation(event);
        });

        this.productSubs = this._store.tinderProducts$.subscribe(products => {
            this.products = [...products];
        });

        this.subscriptions.add(this.productSubs)
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

    startAnimation(state) {
        if (!this.animationState && this.index === 0) {
            this.animationState = state;
        }
    }

    resetAnimationState(state) {
        if (this.index === 0) {
            this.animationState = '';
        }
    }
}
