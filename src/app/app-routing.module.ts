import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full" }, 
  {path: "home", component: HomeComponent },

  {path: "user/list", component: UserListComponent},
  {path: "user/detail/:id", component: UserDetailComponent},
  {path: "user/create", component: UserCreateComponent},
  {path: "user/edit/:id", component: UserEditComponent},
  
  {path: "vendor/list", component: VendorListComponent},
  {path: "vendor/detail/:id", component: VendorDetailComponent},
  {path: "vendor/create", component: VendorCreateComponent},
  {path: "vendor/edit/:id", component: VendorEditComponent}, 
  
  {path: "product/list", component: ProductListComponent},
  {path: "product/detail/:id", component: ProductDetailComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/edit/:id", component: ProductEditComponent}, 
  
  {path: "about", component: AboutComponent},
  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
