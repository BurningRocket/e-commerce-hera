import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/header/layouts/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './components/header/layouts/sidebar/sidebar.component';
import { PanelmenuComponent } from './components/header/layouts/panelmenu/panelmenu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProductsComponent } from './components/home/products/products.component';
import { CardModule } from 'primeng/card';
import { CartComponent } from './components/header/layouts/cart/cart.component';
import { BadgeModule } from 'primeng/badge';
import { DataViewModule } from 'primeng/dataview';
import { TreeSelectModule } from 'primeng/treeselect';
import { HeaderTreeSelectComponent } from './components/header/layouts/header-tree-select/header-tree-select.component';
import { TagModule } from 'primeng/tag'; 
import { RatingModule } from 'primeng/rating';
import { OrderListModule } from 'primeng/orderlist';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    PanelmenuComponent,
    LogoComponent,
    ProductsComponent,
    CartComponent,
    HeaderTreeSelectComponent,
  ],
  imports: [
    OrderListModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    ButtonModule,
    PanelMenuModule,
    IconFieldModule,
    InputIconModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    BadgeModule,
    DataViewModule,
    TreeSelectModule,
    TagModule,
    RatingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
