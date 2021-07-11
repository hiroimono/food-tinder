import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// modules
import { HomeModule } from './home/home.module';

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
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        HomeModule,
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
