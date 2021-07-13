import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

/** Module Routes */
import { HomeRoutingModule } from './home-routing.module';

/** Modules */
import { SharedModule } from '../shared/shared.module';

/** PrimeNg Modules */
import { InputSwitchModule } from 'primeng/inputswitch';
import { SidebarModule } from 'primeng/sidebar';

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
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        SharedModule,
        SidebarModule,
        InputSwitchModule,
    ]
})
export class HomeModule { }
