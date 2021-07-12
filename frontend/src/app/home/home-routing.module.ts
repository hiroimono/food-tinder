import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Components */
import { HomeComponent } from './home.component';
import { CategoryProductsComponent } from './category-products/category-products.component';
CategoryProductsComponent

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'categories/:cat', component: CategoryProductsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
