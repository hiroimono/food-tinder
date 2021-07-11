import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(
        private httpClient: HttpClient
    ) { }

    /**
     * @description Fetch all products
     * @route GET api/products
     * @access public
     * @returns Products[]
     */
    getAllProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`api/products`)
    }

    /** Error handling */
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
