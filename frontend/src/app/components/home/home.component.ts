import { Component, OnInit } from '@angular/core';
// import { DataStoreService } from '../../services/data-store.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public today: number = Date.now();
    public title: string = 'Angular Test';
    public students: number = 3424234;
    public price: number = 32432424.23424;
    public copleted: number = 0.3424;

    public data;

    constructor(
        // private _storeData: DataStoreService
    ) { }

    ngOnInit() {

    }
}
