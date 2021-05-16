import { animate, query, style, transition, trigger } from "@angular/animations";

export const card = trigger('Card', [
    transition(':enter', [
        style({opacity: 0}),

        query(':enter', 
        style({
            opacity: 0
        })),

        animate('0.2s ease-in', 
        style({opacity: 1})),

        query(':enter', [
            animate('0.2s ease-in', 
            style({
                opacity: 1
            }))
        ], { optional: true })
    ]),
])
