import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'app/servicios/medicamentos.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss']
})
export class MedicamentosComponent implements OnInit {
  medicamentos: any[]=[];
  constructor(private medicamentosServices:MedicamentosService) { }


  ngOnInit(): void {
    this.listarMedicamentosEntrada();
  }



  listarMedicamentosEntrada() {
    this.medicamentosServices.getMedicamentos().subscribe((data) => {
      console.log(data);
      this.medicamentos = data;
    })
  
}
}