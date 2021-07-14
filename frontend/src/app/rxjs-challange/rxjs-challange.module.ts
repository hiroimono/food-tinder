import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsChallangeRoutingModule } from './rxjs-challange-routing.module';
import { RxjsChallangeComponent } from './rxjs-challange.component';
import { RxjsChallangeDemoComponent } from './rxjs-challange-demo/rxjs-challange-demo.component';


@NgModule({
    declarations: [
        RxjsChallangeComponent,
        RxjsChallangeDemoComponent
    ],
    imports: [
        CommonModule,
        RxjsChallangeRoutingModule
    ]
})
export class RxjsChallangeModule { }
