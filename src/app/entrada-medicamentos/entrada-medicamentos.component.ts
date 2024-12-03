import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrada-medicamentos',
  templateUrl: './entrada-medicamentos.component.html',
  styleUrls: ['./entrada-medicamentos.component.scss']
})
export class EntradaMedicamentosComponent implements OnInit {
  @ViewChild('medicamentoModal') medicamentoModal!: TemplateRef<any>;
  medicamentos: any[];
  medicamentoForm!: FormGroup;

  constructor(private medicamentosService: MedicamentosService, private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarformulario();
    this.listarMedicamentosEntrada();
  }

  cargarformulario() {
    this.medicamentoForm = this.fb.group({
      codigo: ['', Validators.required],
      medicamento: [''],
      fecha: [''],
      unidad: [''],
      entrada: [0, Validators.min(0)]
    });
  }

  listarMedicamentosEntrada() {
    this.medicamentosService.getMedicamentos().subscribe((data) => {
      console.log(data);
      this.medicamentos = data;
    })
  }

  editar(item: any) {
    console.log('Editar:', item);
    // Lógica para editar el medicamento
  }

  eliminar(id: string) {
    console.log('Eliminar id:', id);
    // Lógica para eliminar el medicamento
    this.medicamentos = this.medicamentos.filter(med => med.id !== id);
  }
  openModal() {
    this.dialog.open(this.medicamentoModal);
  }
  onSubmit() {
    if (this.medicamentoForm.valid) {
        this.medicamentosService.agregarMedicamento(this.medicamentoForm.value).subscribe(() => {
            this.dialog.closeAll();
            this.listarMedicamentosEntrada(); 
        });
    }
}
}
