import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/** Rxjs */
import { BehaviorSubject, interval, Observable, Subject, throwError, timer } from 'rxjs';
import { catchError, delayWhen, filter, map, retryWhen, scan, share, take, takeUntil, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RxjsDemoService {

    /** All Pollings */
    public allMachinePollings$: Observable<number>;

    /** Store Last Changed Cached Value */
    private recent: BehaviorSubject<number>;
    public recent$: Observable<number>;

    /** To trigger to stop polling */
    public stopPolling = new Subject();

    /** Cache Data */
    private cachedData: string = '';

    /** Arary for testing. Array values simulate responses of server */
    private testArr: number[];

    constructor(
        private _http: HttpClient
    ) {
        this.testArr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8];

        this.recent = new BehaviorSubject(null);
        this.recent$ = this.recent.asObservable();
    }

    /**
     * Trigger to start main observable
     * Being used for starting polling manually from component
     */
    public triggerToStartPolling(): Observable<Number> {
        return this.initPollings();
    }

    /**
     * Main Observable ready to be subscribed
     * Emits testArr values every second
     * @filter | check whether current value has already being cached
     * @tap | If current value is different then cached value, make a new cache with new value
     * @tap | And, set its value to 'recent' bahavior subject.
     * @retry | retry 3 times for every 5 s
     * @returns | Observable
     */
    private initPollings(): Observable<number> {
        return this.allMachinePollings$ = interval(500)
            .pipe(
                take(this.testArr.length),
                map(i => this.testArr[i]),
                filter(value => JSON.stringify(value) !== this.cachedData),
                tap(value => {
                    this.cachedData = JSON.stringify(value)
                    this.setRecent(value)
                }),
                retryWhen(error => error.pipe(
                    delayWhen(() => timer(500)),
                    tap(() => console.log('Retrying...')),
                    /** first option to retry it 3 times but not logs error if unseccesful */
                    // take(3),
                    /** second option to retry it 3 times and logs error if unseccesful */
                    scan((retryCount) => {
                        if (retryCount >= 3) {
                            throw error
                        } else {
                            retryCount++;
                            console.log('retryCount: ', retryCount);
                            return retryCount;
                        }
                    }, 0)
                )),
                share(),
                takeUntil(this.stopPolling),
                catchError((error: HttpErrorResponse) => throwError(error))
            )
    }

    public getRecentPollings(): Observable<number> {
        return this.recent$;
    }

    public setRecent(value: number): void {
        this.recent.next(value);
    }

    ngOnDestroy() {
        this.stopPolling.next();
    }
}
