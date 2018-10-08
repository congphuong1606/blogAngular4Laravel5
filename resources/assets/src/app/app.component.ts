import {Component, OnDestroy, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Tin tức tiền ảo';

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
        if ($(window).scrollTop() >= $('#topMenu').offset().top && $(window).scrollTop() !== 0) {
            $('#topMenu').addClass('sticky');
            console.log('add sticky ' + $('#topMenu').offset().top);
            console.log('$(window).scrollTop() ' + $(window).scrollTop());
        } else {
            console.log('removeClass sticky ' + $('#topMenu').offset().top);
            $('#topMenu').removeClass('sticky');
        }

    };

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
