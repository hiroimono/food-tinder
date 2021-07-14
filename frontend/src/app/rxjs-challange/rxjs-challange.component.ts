import { Component, OnInit } from '@angular/core';

/** Rxjs */
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Services */
import { RxjsService } from './services/rxjs.service';
import { RxjsDemoService } from './services/rxjs-demo.service';

@Component({
    selector: 'app-rxjs-challange',
    templateUrl: './rxjs-challange.component.html',
    styleUrls: ['./rxjs-challange.component.scss']
})
export class RxjsChallangeComponent implements OnInit {


    public allPoolingsSubs: Subscription;

    public recentPoolings1: Subscription;
    public recentPoolings2: Subscription;
    public recentPoolings3: Subscription;

    public recent1: number[];
    public recent2: number[];
    public recent3: number[];

    constructor(
        private _rxjs: RxjsDemoService,
        // private _rxjs: RxjsService
    ) {
        this.recent1 = []
        this.recent2 = []
        this.recent3 = []
    }

    ngOnInit(): void {
        this.initAllPollings();
        this.initRecentPollings1();
        setTimeout(() => this.initRecentPollings2(), 8000)
        setTimeout(() => this.initRecentPollings3(), 10000)
    }

    ngOnDestroy() {
        this.allPoolingsSubs.unsubscribe();
    }

    private initAllPollings() {
        this.allPoolingsSubs = this._rxjs.allMachinePollings$.subscribe();
    }

    private initRecentPollings1() {
        this.recentPoolings1 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    console.log('value: ', value);
                    this.recent1.push(value);
                })
            ).subscribe()

        this.allPoolingsSubs.add(this.recentPoolings1);
    }

    private initRecentPollings2() {
        this.recentPoolings2 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    console.log('value: ', value);
                    this.recent2.push(value);
                })
            ).subscribe()

        this.allPoolingsSubs.add(this.recentPoolings2)
    }

    private initRecentPollings3() {
        this.recentPoolings3 = this._rxjs.recent$
            .pipe(
                tap(value => {
                    console.log('value: ', value);
                    this.recent3.push(value);
                })
            ).subscribe()

        this.allPoolingsSubs.add(this.recentPoolings3)
    }

    public start() {
        // this._rxjs.startPolling.next('stop');
    }

    public stop() {
        this._rxjs.stopPolling.next('stop');
    }
}
