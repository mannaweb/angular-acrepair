import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AcComponent } from './components/ac/ac.component';
import { RefrigeratorComponent } from './components/refrigerator/refrigerator.component';
import { OffersComponent } from './components/offers/offers.component';
import { WashingComponent } from './components/washing/washing.component';
import { MicrowaveComponent } from './components/microwave/microwave.component';
import { GeyserComponent } from './components/geyser/geyser.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AcComponent,
    RefrigeratorComponent,
    OffersComponent,
    WashingComponent,
    MicrowaveComponent,
    GeyserComponent,
    TestimonialsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
