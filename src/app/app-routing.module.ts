import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HomeComponent } from './site/home/home.component';
import { ProductComponent } from './site/product/product.component';
import { CompanyComponent } from './site/company/company.component';
import { ContactComponent } from './site/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: LoginComponent},
  {path : 'admin', children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
