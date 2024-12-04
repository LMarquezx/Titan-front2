import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrada-medicamentos',
  templateUrl: './entrada-medicamentos.component.html',
  styleUrls: ['./entrada-medicamentos.component.scss']
})
export class EntradaMedicamentosComponent implements OnInit {
  medicamentos: any[]=[];
  medicamentoForm!: FormGroup;
  selectedMedicamento: any;

  constructor(private medicamentosService: MedicamentosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarMedicamentosEntrada();
  }



  listarMedicamentosEntrada() {
    this.medicamentosService.getMedicamentos().subscribe((data) => {
      console.log(data);
      this.medicamentos = data;
    })
  
}
}
