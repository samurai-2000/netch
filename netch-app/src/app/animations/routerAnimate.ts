import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

const animateParams = [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        width: '100%',
        left: '1rem',
        opacity: 1
      })
    ], { optional: true }),
    query(':enter', [
        style({ 
            left: '100%', 
            opacity: 0 
        })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', 
        [
            animate('0.2s ease-in', 
            style({ 
                left: '-100%', 
                opacity: 0 
            }))
        ], { optional: true }),
      query(':enter', 
        [
            animate('0.2s ease-out', 
            style({ 
                left: '1rem', 
                opacity: 1 
            }))
        ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
]

export const slideInAnimation = trigger('routeAnimations', 
[
    transition('HomePage <=> *', animateParams),
    transition('ProjectPage <=> *', animateParams),
    transition('ProductsPage <=> *', animateParams),
    transition('ContactsPage <=> *', animateParams),
    transition('InfoPage <=> *', animateParams),
    transition('GithubPage <=> *', animateParams),
    transition('TrackingPage <=> *', animateParams),
])