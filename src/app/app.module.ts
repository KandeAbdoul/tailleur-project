import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DetailsComponent } from './details/details.component';
import { PanierComponent } from './panier/panier.component';
import { AdministrationComponent } from './administration/administration.component';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { DetailFormComponent } from './details/detail-form/detail-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NosComponent } from './nos/nos.component';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {path: 'annonce', component: AnnonceComponent},
    { path: 'details', component: DetailsComponent },
  { path: 'auth/connexion', component: ConnexionComponent },
  { path: 'auth/inscription', component: InscriptionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InscriptionComponent,
    ConnexionComponent,
    AnnonceComponent,
    DetailsComponent,
    PanierComponent,
    AdministrationComponent,
    FooterComponent,
    SlideComponent,
  DetailFormComponent,
  NosComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

