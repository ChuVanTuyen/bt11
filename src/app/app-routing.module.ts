import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task5Component } from './task5/task5.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'vi-VN', component: Task5Component },
  { path: 'en-US', component: Task5Component },
  { path: '', redirectTo: '/en-US', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
