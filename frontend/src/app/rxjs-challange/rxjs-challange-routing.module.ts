import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import { RxjsChallangeComponent } from './rxjs-challange.component';
import { RxjsChallangeDemoComponent } from './rxjs-challange-demo/rxjs-challange-demo.component';

const routes: Routes = [
    { path: '', component: RxjsChallangeComponent, pathMatch: 'full' },
    { path: 'demo', component: RxjsChallangeDemoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsChallangeRoutingModule { }
