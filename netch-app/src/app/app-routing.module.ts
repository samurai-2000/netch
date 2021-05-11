import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ErrorComponent } from './components/error/error.component';
import { GithubComponent } from './components/github/github.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsComponent } from './components/products/products.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TrackingComponent } from './components/tracking/tracking.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'ProjectPage'}},
  {path: 'products', component: ProductsComponent, data: {animation: 'ProductsPage'}},
  {path: 'contacts', component: ContactsComponent, data: {animation: 'ContactsPage'}},
  {path: 'info', component: InfoComponent, data: {animation: 'InfoPage'}},
  {path: 'github', component: GithubComponent, data: {animation: 'GitHubPage'}},
  {path: 'tracking', component: TrackingComponent, data: {animation: 'TrackingPage'}},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
