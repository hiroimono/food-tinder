import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) { }

    transform(html) {
        if (html !== null) {
            return this.sanitizer.bypassSecurityTrustHtml(html);
        } else {
            return '';
        }
    }
}
