import { Component, OnInit } from '@angular/core';

/** Rxjs */
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Services */
import { RxjsService } from '../services/rxjs.service';
import { RxjsDemoService } from '../services/rxjs-demo.service';

@Component({
    selector: 'app-rxjs-challange-demo',
    templateUrl: './rxjs-challange-demo.component.html',
    styleUrls: ['./rxjs-challange-demo.component.scss']
})
export class RxjsChallangeDemoComponent implements OnInit {
    /** Main Subscription */
    public allSubsStart: Subscription;

    /** Other Subscriptions */
    public recentPollings1: Subscription;
    public recentPollings2: Subscription;
    public recentPollings3: Subscription;

    /** The value arrays for subscribers */
    public recent1: number[] = [];
    public recent2: number[] = [];
    public recent3: number[] = [];

    /** Delays for subscriptions */
    public delay1: number = 0;
    public delay2: number = 3400;
    public delay3: number = 5600;

    constructor(
        private _rxjs: RxjsDemoService,
        // private _rxjs: RxjsService
    ) { }

    /**
     * If all subscriptions are desired to start at the beginning open comments,
     * or 'Start' button can be used to start them manually
     * */
    ngOnInit(): void {
        /** First Subscription */
        // this.initRecentPollings1();

        /** Second Subscription */
        // setTimeout(() => this.initRecentPollings2(), 3300)

        /** Third Subscription */
        // setTimeout(() => this.initRecentPollings3(), 8200)
    }

    /** Trigger main subscription */
    private initAllPollings() {
        this.allSubsStart = this._rxjs.triggerToStartPolling().subscribe(
            value => console.log('ALL : ', value),
            err => console.log('ALL - HTTP Error: ', err),
            () => console.log('ALL - HTTP request completed.')
        );
    }

    /** Subscriber 1 */
    private initRecentPollings1() {
        this.recentPollings1 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    this.recent1.push(value);
                })
            ).subscribe(
                value => console.log('1 : ', value),
                err => console.log('1 - HTTP Error: ', err),
                () => console.log('1 - HTTP request completed.')
            )
    }

    /** Subscriber 2 */
    private initRecentPollings2() {
        this.recentPollings2 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    this.recent2.push(value);
                })
            ).subscribe(
                value => console.log('2 : ', value),
                err => console.log('2 - HTTP Error: ', err),
                () => console.log('2 - HTTP request completed.')
            )
    }

    /** Subscriber 3 */
    private initRecentPollings3() {
        this.recentPollings3 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    this.recent3.push(value);
                })
            ).subscribe(
                value => console.log('3 : ', value),
                err => console.log('3 - HTTP Error: ', err),
                () => console.log('3 - HTTP request completed.')
            )
    }

    /**
     * First, check all subscription whether there is any subscription which is not created or not closed
     * Then,
     */
    public start() {
        if (this.isAllClean()) {
            this.unsubscribeAll();
            this.initAllPollings();
            setTimeout(() => this.initRecentPollings1(), this.delay1);
            setTimeout(() => this.initRecentPollings2(), this.delay2);
            setTimeout(() => this.initRecentPollings3(), this.delay3);
        }
    }

    /**
     * Close all subscriptions and trigger to stop main Observable in rxjs.sservice
     */
    public stop() {
        this.unsubscribeAll();
        this._rxjs.stopPolling.next('stop');
    }

    /** Clean view */
    public clear() {
        this.recent1 = []
        this.recent2 = []
        this.recent3 = []
    }

    public isAllClean() {
        return (!this.allSubsStart || this.allSubsStart.closed) &&
            (!this.recentPollings1 || this.recentPollings1.closed) &&
            (!this.recentPollings2 || this.recentPollings2.closed) &&
            (!this.recentPollings3 || this.recentPollings3.closed)
    }

    private unsubscribeAll() {
        this.allSubsStart && !this.allSubsStart.closed ? this.allSubsStart.unsubscribe() : null;
        this.recentPollings1 && !this.recentPollings1.closed ? this.recentPollings1.unsubscribe() : null;
        this.recentPollings2 && !this.recentPollings2.closed ? this.recentPollings2.unsubscribe() : null;
        this.recentPollings3 && !this.recentPollings3.closed ? this.recentPollings3.unsubscribe() : null;
    }

    ngOnDestroy() {
        this.unsubscribeAll();
    }
}
