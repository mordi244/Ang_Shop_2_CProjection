import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsBodyComponent } from './cards-body/cards-body.component';
import { CardComponent } from './cards-body/card/card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { CardContentComponent } from './cards-body/card-content/card-content.component';
import { BackComponent } from './cards-body/card-content/back/back.component';
import { SocialComponent } from './social/social.component';
import { SocialContainerComponent } from './social-container/social-container.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component'; 
import { CartService } from './cart.service';
import { DataService } from './data.service';
import { CartItemComponent } from './cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsBodyComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    CardContentComponent,
    BackComponent,
    SocialComponent,
    SocialContainerComponent,
    CartComponent,
    ContactComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
    
  ],
  providers: [CartService,DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
