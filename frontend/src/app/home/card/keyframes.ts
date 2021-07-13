import { style } from '@angular/animations';

export const swiperight = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(300%, 0, 0) rotate3d(0, 0, 1, 120deg)', opacity: 0, offset: 1 }),
]

export const swipeleft = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(-300%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: 0, offset: 1 }),
]

export const swipedown = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(0, 300%, 0) rotate3d(0, 0, 1, 240deg)', opacity: 0, offset: 1 }),
]

export const swipeup = [
    style({ opacity: 1, offset: 0 }),
    style({ transform: 'translate3d(0, -300%, 0) rotate3d(0, 0, 1, -240deg)', opacity: 0, offset: 1 }),
]
