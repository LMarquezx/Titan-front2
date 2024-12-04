import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { EntradaMedicamentosComponent } from './entrada-medicamentos/entrada-medicamentos.component';
import { SalidaMedicamentosComponent } from './salida-medicamentos/salida-medicamentos.component';
import { BaseSalidasComponent } from './base-salidas/base-salidas.component';
import { InformesComponent } from './informes/informes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegistrarMedicamentoComponent } from './registrar-medicamento/registrar-medicamento.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MedicamentosComponent,
    EntradaMedicamentosComponent,
    SalidaMedicamentosComponent,
    BaseSalidasComponent,
    InformesComponent,
    RegistrarMedicamentoComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
