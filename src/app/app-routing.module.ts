import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
