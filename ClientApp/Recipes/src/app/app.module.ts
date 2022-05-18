import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import {
    BreadcrumbModule,
    AvatarModule,
    BadgeModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    FooterModule,
    FormModule,
    GridModule,
    HeaderModule,
    ListGroupModule,
    NavModule,
    ProgressModule,
    SharedModule,
    SidebarModule,
    TabsModule,
    UtilitiesModule, } from '@coreui/angular';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BadgeModule,
        AvatarModule,
        BreadcrumbModule,
        ButtonGroupModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        FooterModule,
        FormModule,
        GridModule,
        HeaderModule,
        ListGroupModule,
        NavModule,
        ProgressModule,
        SharedModule,
        SidebarModule,
        TabsModule,
        UtilitiesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
