import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modules
import { HomeModule } from './home/home.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { DataStoreService } from './services/data-store.service';

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
        HomeModule,
        AppRoutingModule,
        ModalModule
    ],
    providers: [DataStoreService],
    bootstrap: [AppComponent]
})
export class AppModule { }
