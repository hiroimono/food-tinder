import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
    declarations: [
        CardContainerComponent,
        FooterComponent,
        SafeHtmlPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardContainerComponent,
        FooterComponent,
        SafeHtmlPipe
    ]
})
export class SharedModule { }
