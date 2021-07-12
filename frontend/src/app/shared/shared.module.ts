import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        CardContainerComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardContainerComponent,
        FooterComponent
    ]
})
export class SharedModule { }
