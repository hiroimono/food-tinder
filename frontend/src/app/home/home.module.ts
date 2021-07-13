import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
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

import * as Hammer from 'hammerjs';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    overrides = {
        swipe: { direction: Hammer.DIRECTION_ALL }
    }
}

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
        HammerModule,
        BrowserAnimationsModule,
        HomeRoutingModule,
        SharedModule,
        SidebarModule,
        InputSwitchModule,
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig
        }
    ]
})
export class HomeModule { }
