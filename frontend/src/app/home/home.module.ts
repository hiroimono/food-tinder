import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Module Routes */
import { HomeRoutingModule } from './home-routing.module';

/** Modules */
import { SharedModule } from '../shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { CategoryProductsComponent } from './category-products/category-products.component';

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent,
        CategoryProductsComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
