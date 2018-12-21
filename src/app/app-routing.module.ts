import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecordsComponent } from './list-records/list-records.component';

const routes: Routes = [
  { path: 'records', component: ListRecordsComponent },
  { path: '', redirectTo: 'records', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
