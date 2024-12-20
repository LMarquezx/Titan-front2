import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salida-medicamentos',
  templateUrl: './salida-medicamentos.component.html',
  styleUrls: ['./salida-medicamentos.component.scss']
})
export class SalidaMedicamentosComponent implements OnInit {
  @ViewChild('medicamentoModal') medicamentoModal!: TemplateRef<any>;
  @ViewChild('editMedicamentoModal') editMedicamentoModal!: TemplateRef<any>;
  medicamentos: any[]=[];
  medicamentoForm!: FormGroup;
  selectedMedicamento: any;

  constructor(private medicamentosService: MedicamentosService, private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cargarformulario();
    this.listarMedicamentosEntrada();
  }

  cargarformulario() {
    this.medicamentoForm = this.fb.group({
      id: [''],
      codigo: ['', Validators.required],
      fecha: [''],
      medicamento: [''],
      unidad: [''],
      cantidad:['']
    });
  }

  listarMedicamentosEntrada() {
    this.medicamentosService.getMedicamentosSalidas().subscribe((data) => {
      console.log(data);
      this.medicamentos = data;
    })
  }
  openAddModal() {
    this.selectedMedicamento = null; 
    this.dialog.open(this.medicamentoModal);
}
  openEditModal(medicamento: any) {
    this.selectedMedicamento = medicamento;
    this.medicamentoForm.patchValue({
        id:medicamento.id,
        codigo: medicamento.codigo,
        fecha: medicamento.fecha,
        medicamento: medicamento.medicamento,
        cantidad:medicamento.cantidad,
    });
    this.dialog.open(this.editMedicamentoModal);
}

  eliminar(id: string) {
    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este medicamento?");
        if (confirmDelete) {
            this.medicamentosService.eliminarMedicamentoSalidas(id).subscribe(() => {
              this.listarMedicamentosEntrada();
            });
        }
  }
  openModal() {
    this.dialog.open(this.medicamentoModal);
  }
  onAddSubmit() {
    if (this.medicamentoForm.valid) {
      this.medicamentosService.agregarMedicamentoSalidas(this.medicamentoForm.value).subscribe(() => {
        this.dialog.closeAll();
        this.listarMedicamentosEntrada();
      });
    }
  }
  onEditSubmit() {
    if (this.medicamentoForm.valid && this.selectedMedicamento) {
        const updatedMedicamento = { ...this.selectedMedicamento, ...this.medicamentoForm.value };
        this.medicamentosService.editarMedicamentoSalidas(updatedMedicamento).subscribe(() => {
            this.dialog.closeAll();
            this.listarMedicamentosEntrada(); 
        });
    }
}
}
