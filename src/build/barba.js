import barba from '@barba/core';
import anime from 'animejs';
import element from './element';
export function runBarbaHome() {
    element.boxLeaveText('Consistency');
    barba.init({
        /*this is a basic transiton to the project page*/
        transitions: [{
                name: 'project-transition',
                leave({ next, current, trigger }) {
                    return new Promise((resolve, reject) => {
                        const timeline = anime.timeline({}).
                            add({
                            targets: element.box,
                            translateX: ['-100%', '0%'],
                            duration: 1000,
                            easing: 'linear',
                        }).add({
                            targets: element.box.querySelector('p'),
                            translateY: ['50px', '0px'],
                            opacity: [0, 1],
                            duration: 500,
                            easing: 'easeInSine',
                        }, '-=150').add({
                            targets: element.box.querySelector('p'),
                            translateY: ['0px', '50px'],
                            opacity: [1, 0],
                            duration: 500,
                            easing: 'easeInSine',
                        }, '+=1000').
                            add({
                            targets: element.box,
                            translateX: ['0%', '-100%'],
                            duration: 1000,
                            easing: 'linear',
                            complete: () => {
                                resolve();
                            }
                        }, '-=200');
                    });
                },
                enter({ next, current, trigger }) {
                }
            }]
    });
}
