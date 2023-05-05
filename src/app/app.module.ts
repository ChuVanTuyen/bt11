import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task5Component } from './task5/task5.component';
import { HomeComponent } from './task5/components/home/home.component';
import { HeaderComponent } from './task5/components/header/header.component';
import { NavComponent } from './task5/components/nav/nav.component';
import { SlideComponent } from './task5/components/slide/slide.component';
import { VoiceChartComponent } from './task5/components/voice-chart/voice-chart.component';
import { PopularTagComponent } from './task5/components/popular-tag/popular-tag.component';
import { FooterComponent } from './task5/components/footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    Task5Component,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    SlideComponent,
    VoiceChartComponent,
    PopularTagComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

