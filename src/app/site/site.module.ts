import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProdcardComponent } from './prodcard/prodcard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, ProductComponent, CompanyComponent, ContactComponent, LandingpageComponent, ProdcardComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
