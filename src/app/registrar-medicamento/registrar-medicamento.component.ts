import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-medicamento',
  templateUrl: './registrar-medicamento.component.html',
  styleUrls: ['./registrar-medicamento.component.scss']
})
export class RegistrarMedicamentoComponent implements OnInit {
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
      noDoc: [''],
      medicamento: [''],
      caducidad: [''],
      unidad: [''],
      entrada: [0, Validators.min(0)],
      salida: [''],
      stock: [''],
      diasDisp: [''],
      estado: ['']
    });
  }

  listarMedicamentosEntrada() {
    this.medicamentosService.getMedicamentos().subscribe((data) => {
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
        noDoc:medicamento.noDoc,
        medicamento: medicamento.medicamento,
        caducidad:medicamento.caducidad,    
        unidad: medicamento.unidad,
        entrada: medicamento.entrada,
        salida:medicamento.salida,
        stock:medicamento.stock,
        diasDisp:medicamento.diasDisp,
        estado:medicamento.estado
    });
    this.dialog.open(this.editMedicamentoModal);
}

  eliminar(id: string) {
    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este medicamento?");
        if (confirmDelete) {
            this.medicamentosService.eliminarMedicamento(id).subscribe(() => {
              this.listarMedicamentosEntrada();
            });
        }
  }
  openModal() {
    this.dialog.open(this.medicamentoModal);
  }
  onAddSubmit() {
    if (this.medicamentoForm.valid) {
      this.medicamentosService.agregarMedicamento(this.medicamentoForm.value).subscribe(() => {
        this.dialog.closeAll();
        this.listarMedicamentosEntrada();
      });
    }
  }
  onEditSubmit() {
    if (this.medicamentoForm.valid && this.selectedMedicamento) {
        const updatedMedicamento = { ...this.selectedMedicamento, ...this.medicamentoForm.value };
        this.medicamentosService.editarMedicamento(updatedMedicamento).subscribe(() => {
            this.dialog.closeAll();
            this.listarMedicamentosEntrada(); 
        });
    }
}
}
