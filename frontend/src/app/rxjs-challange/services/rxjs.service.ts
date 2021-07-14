import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/** Rxjs */
import { BehaviorSubject, Observable, Subject, timer, throwError } from 'rxjs';
import { catchError, delayWhen, filter, map, retry, retryWhen, scan, share, switchMap, takeUntil, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RxjsService {
    /** Exact Link */
    private url: string = 'https://amperoid.tenants.foodji.io/machines/37323eac-135c-4e89-9492-b499cb1d37b1';

    /** Wrong Link to test errors */
    // private url: string = 'https://amperoid.tenants.foodji.io/machines/37323eac-135c-4e';

    private http$: Observable<Data> = this._http.get<Data>(this.url);

    /** All Pollings */
    public allMachinePollings$: Observable<Data>;

    /** Store Last Changed Cached Value */
    private recent: BehaviorSubject<Data>;
    public recent$: Observable<Data>;

    /** To trigger to stop polling */
    public stopPolling = new Subject();

    /** Cache Data */
    private cachedData: string = '';

    constructor(
        private _http: HttpClient
    ) {
        this.recent = new BehaviorSubject({});
        this.recent$ = this.recent.asObservable();
    }

    /**
     * Trigger to start main observable
     * Being used for starting polling manually from component
     */
    public triggerToStartPolling(): Observable<Data> {
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
    private initPollings(): Observable<Data> {
        return this.allMachinePollings$ = timer(1, 5000).pipe(
            switchMap(() => this.http$),
            /**
             * Optional server status check,
             * It can be used also filter operator or an iif can be added here. [iif](https://rxjs.dev/api/index/function/iif)
             * */
            // takeWhile(({ status }) => {
            //     return status === 'success'
            // }),
            filter(value => JSON.stringify(value) !== this.cachedData),
            tap(value => {
                this.cachedData = JSON.stringify(value)
                this.setRecent(value)
            }),
            retryWhen(error => error.pipe(
                delayWhen(() => timer(5000)),
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
            catchError((error: HttpErrorResponse) => {
                /** Here error logging can be done! */
                console.log('error: ', error);
                return throwError(error)
            })
        )
    }

    public getRecentPollings(): Observable<Data> {
        return this.recent$;
    }

    public setRecent(value: Data): void {
        this.recent.next(value);
    }

    ngOnDestroy() {
        this.stopPolling.next();
    }
}
