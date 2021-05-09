import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InfoComponent } from './components/info/info.component';
import { GithubComponent } from './components/github/github.component';
import { BriefComponent } from './components/brief/brief.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { TrackingBriefComponent } from './components/tracking/tracking-brief/tracking-brief.component';
import { AdminComponent } from './components/admin/admin.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegistrationComponent } from './components/admin/registration/registration.component';
import { UiHeaderComponent } from './components/ui-header/ui-header.component';
import { UiSidenavComponent } from './components/ui-sidenav/ui-sidenav.component';
import { UiFooterComponent } from './components/ui-footer/ui-footer.component';
import { UiModalComponent } from './components/ui-modal/ui-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ProductsComponent,
    ContactsComponent,
    InfoComponent,
    GithubComponent,
    BriefComponent,
    TrackingComponent,
    TrackingBriefComponent,
    AdminComponent,
    ErrorComponent,
    LoginComponent,
    RegistrationComponent,
    UiHeaderComponent,
    UiSidenavComponent,
    UiFooterComponent,
    UiModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
