import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Module Routes */
import { HomeRoutingModule } from './home-routing.module';

/** Modules */
import { SharedModule } from '../shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
