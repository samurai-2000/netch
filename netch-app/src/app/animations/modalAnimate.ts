import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const modal = trigger('Modal', [
    transition(':enter', [
        style({opacity: 0}),

        query(':enter', 
        style({
            transform: 'translateY(100%)',
            opacity: 0
        })),

        animate('0.2s ease-in', 
        style({opacity: 1})),

        query(':enter', [
            animate('0.2s ease-in', 
            style({
                transform: 'none',
                opacity: 1
            }))
        ], { optional: true })
    ]),
    transition(':leave', [
        
        query(':leave', [
            animate('0.2s ease-out', 
            style({
                transform: 'translateY(-100%)',
                opacity: 0,
            }))
        ], { optional: true }),

        animate('0.2s ease-out', 
        style({opacity: 0})),
    ])
])
