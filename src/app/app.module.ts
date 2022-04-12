import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NabbarComponent } from './components/nabbar/nabbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NabbarComponent,
    FooterComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
