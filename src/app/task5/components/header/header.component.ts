import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private language: LanguageService, private router: Router) {
  }
  @Output() openNav = new EventEmitter<boolean>();
  showModal = false;
  openNavBar(): void {
    this.openNav.emit(true);
  }

  toggelOder(oder: boolean): void {
    this.showModal = oder;
  }

  setLanguage(event: Event): void {
    let lang = (event.target as HTMLInputElement).value;
    this.language.setLanguage(lang);
    if (lang === 'vi') {
      this.router.navigate(['/vi-VN']);
    }
    else if (lang === 'en') {
      this.router.navigate(['/en-US']);
    } else {
      return;
    }
  }
}
