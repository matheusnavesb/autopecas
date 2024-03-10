import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../../models/fornecedor.model';
import { FornecedorService } from '../../../services/fornecedor.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fornecedor-list',
  standalone: true,
  imports: [NgFor, MatTableModule, MatToolbarModule, MatIconModule,
    MatButtonModule, RouterModule],
  templateUrl: './fornecedor-list.component.html',
  styleUrl: './fornecedor-list.component.css'
})
export class FornecedorListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cnpj', 'email', 'acao'];
  fornecedores: Fornecedor[] = [];

  constructor(private fornecedorService: FornecedorService, private router: Router){}

  ngOnInit(): void {
      this.fornecedorService.findAll().subscribe(data => {
        this.fornecedores = data;
      });
  }

  excluir(fornecedor: Fornecedor) {
    this.fornecedorService.delete(fornecedor).subscribe({
      next: () => {
        this.router.navigateByUrl('/fornecedores');
        this.ngOnInit();
      },
      error: (err) => {
        console.log('Erro ao Excluir' + JSON.stringify(err));
      },
    });
  }
}
