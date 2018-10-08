import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardService} from './providers/dashboard.service';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NewsHighlightsComponent} from './news-highlights/news-highlights.component';
import {NgxCarouselModule} from 'ngx-carousel';
import 'hammerjs';
import {RecentPostComponent} from './recent-post/recent-post.component';
import {FiveTopPostComponent} from './five-top-post/five-top-post.component';
import {FooterComponent} from './footer/footer.component';
import {SlideImageComponent} from './slide-image/slide-image.component';
import {WidgetSearchComponent} from './widget-search/widget-search.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxCarouselModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()

    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent,
        NavbarComponent,
        NewsHighlightsComponent,
        RecentPostComponent,
        FiveTopPostComponent,
        FooterComponent,
        SlideImageComponent,
        WidgetSearchComponent,
        EditPostComponent,

    ],
    providers: [
        DashboardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
