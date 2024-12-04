import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-salidas',
  templateUrl: './base-salidas.component.html',
  styleUrls: ['./base-salidas.component.scss']
})
export class BaseSalidasComponent implements OnInit {
  medicamentos: any[]=[];
  medicamentoForm!: FormGroup;
  selectedMedicamento: any;

  constructor(private medicamentosService: MedicamentosService,  private fb: FormBuilder,private matdialog: MatDialog) { }

  ngOnInit(): void {

    this.listarMedicamentosEntrada();
  }



  listarMedicamentosEntrada() {
    this.medicamentosService.getMedicamentosSalidas().subscribe((data) => {
      console.log(data);
      this.medicamentos = data;
    })
}
}
