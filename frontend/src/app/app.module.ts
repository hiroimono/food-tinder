import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// modules
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { DataStoreService } from './services/data-store.service';
import { ProductsService } from './services/products.service';

// Bootstrap Modules
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HomeModule,
        SharedModule,
        AppRoutingModule,
        ModalModule
    ],
    providers: [
        DataStoreService,
        ProductsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
