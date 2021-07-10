import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Services
import { DataStoreService } from './services/data-store.service';

// Bootstrap Modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ModalModule
    ],
    providers: [DataStoreService],
    bootstrap: [AppComponent]
})
export class AppModule { }
