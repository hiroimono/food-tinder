import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/** Rxjs */
import { BehaviorSubject, interval, Observable, Subject, throwError, timer } from 'rxjs';
import { catchError, delay, delayWhen, filter, first, map, retry, retryWhen, share, shareReplay, take, takeUntil, tap } from 'rxjs/operators';

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
        this.testArr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 7, 8];

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
     * @retry | if
     * @returns
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
                    take(3)
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
