import {Component, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';

@Component({
    selector: 'app-slide-image',
    templateUrl: './slide-image.component.html',
    styleUrls: ['./slide-image.component.css']
})
export class SlideImageComponent implements OnInit {

    constructor() {
    }

    public carouselOne: NgxCarousel;

    ngOnInit() {
        this.carouselOne = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 400,
            interval: 3000,
            load: 2,
            touch: true,
            loop: true,
            custom: 'banner',
            point: {
                visible: true,
                pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 5px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 20px;
          }
        `
            }
        };

    }

    public myfunc(event: Event) {
        // carouselLoad will trigger this funnction when your load value reaches
        // it is helps to load the data by parts to increase the performance of the app
        // must use feature to all carousel
    }

}
