import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    ExperienciasComponent,
    ContactoComponent,
    CertificadosComponent,
    EstudiosComponent,
    FooterComponent,
    AboutComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
