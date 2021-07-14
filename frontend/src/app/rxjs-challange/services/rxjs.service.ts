import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

/** Rxjs */
import { BehaviorSubject, interval, Observable, of, ReplaySubject, Subject, timer, Subscription, throwError } from 'rxjs';
import { catchError, filter, map, retry, share, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RxjsService {
    private url: string = 'https://amperoid.tenants.foodji.io/machines/37323eac-135c-4e89-9492-b499cb1d37b1';

    /** All Pollings */
    public allMachinePollings$: Observable<number>;

    /** Set Last Cached Value */
    private cache: BehaviorSubject<string>;
    public cache$: Observable<string>;

    /** Store Last Changed Cached Value */
    private recent: BehaviorSubject<number>;
    public recent$: Observable<number>;

    /** To trigger to stop polling */
    public stopPolling = new Subject();

    /** Cache Data */
    private cachedData: string = '';

    constructor(
        private _http: HttpClient
    ) {
        this.cache = new BehaviorSubject('');
        this.cache$ = this.cache.asObservable();

        this.recent = new BehaviorSubject(null);
        this.recent$ = this.recent.asObservable();

        this.initPollings();
    }

    private initPollings() {
        // this.allMachinePollings$ = timer(1, 1000).pipe(
        // switchMap(() => this._http.get<Data>(this.url)),
        // switchMap(() => from([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5])),
        /**
         * Optional server status check,
         * It can be used also filter operator or an iif can be added here. [iif](https://rxjs.dev/api/index/function/iif)
         * */
        // takeWhile(({ status }) => {
        //     return status === 'success'
        // }),
        let testArr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6];
        this.allMachinePollings$ = interval(1000)
            .pipe(
                take(testArr.length),
                map(i => testArr[i]),
                filter(value => JSON.stringify(value) !== this.cachedData),
                tap(value => {
                    this.cachedData = JSON.stringify(value)
                    this.setCache(this.cachedData)

                }),
                tap(data => this.setRecent(data)),
                retry(3),
                share(),
                takeUntil(this.stopPolling),
                catchError((error: HttpErrorResponse) => throwError(error))
            )
    }

    public getRecentPollings(): Observable<number> {
        return this.recent$;
    }

    public setCache(value: string): void {
        this.cache.next(value);
    }

    public setRecent(value: number): void {
        this.recent.next(value);
    }

    ngOnDestroy() {
        this.stopPolling.next();
    }
}
