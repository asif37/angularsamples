import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
/// components
import { ListProductsComponent } from './list-products/list-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductService } from '../../../services/product.service';
import {HttpClientModule} from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import {MaterialModule} from '../../../material.module';
import {AdminSiteComponent} from '../../admin-site.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'admin', component: AdminSiteComponent, children: [
      {path: 'dashboard', redirectTo: '', pathMatch: 'full'},
      {path: 'listProducts', component: ListProductsComponent, children: [
        {path: '', component: ListProductsComponent},
        {path: ':id', component: ListProductsComponent}
      ]},
    ]}
]

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};
@NgModule({
  declarations: [
    ListProductsComponent,
    AddEditProductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    TextMaskModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ProductService
  ],
  entryComponents: [AddEditProductComponent,],

})
export class ProductModule { }
