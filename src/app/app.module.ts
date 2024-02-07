import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { NavComponent } from './shared-components/nav/nav.component';
import { CardComponent } from './shared-components/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
