import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LanguageService } from './services/language.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ssr';
  constructor(
    private language: LanguageService,
    // @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // if (isPlatformServer(this.platformId)) {
    //   this.platfromBr.setPlatform('server');
    // } else {
    //   this.platfromBr.setPlatform('client');
    //   console.log(this.platfromBr.getPlatform());
    // }
  }
}
