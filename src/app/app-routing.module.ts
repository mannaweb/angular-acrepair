import { NgModule } from '@angular/core';

import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { OffersComponent } from './components/offers/offers.component';
import { AcComponent } from './components/ac/ac.component';
import { RefrigeratorComponent } from './components/refrigerator/refrigerator.component';
import { WashingComponent } from './components/washing/washing.component';
import { GeyserComponent } from './components/geyser/geyser.component';
import { MicrowaveComponent } from './components/microwave/microwave.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'ac', component: AcComponent },
  { path: 'refrigerator', component: RefrigeratorComponent },
  { path: 'washing', component: WashingComponent },
  { path: 'geyser', component: GeyserComponent },
  { path: 'microwave', component: MicrowaveComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

