import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from '../../../services/localizacao.service';
import { Localizacao } from '../../../models/localizacao.model';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-localizacao-list',
  standalone: true,
  imports: [NgFor, MatTableModule, MatToolbarModule, MatIconModule,
    MatButtonModule, RouterModule],
  templateUrl: './localizacao-list.component.html',
  styleUrl: './localizacao-list.component.css'
})
export class LocalizacaoListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'cidade', 'estado', 'fornecedor', 'acao'];
  localizacoes: Localizacao[] = [];

  constructor(private localizacaoService: LocalizacaoService, private router: Router) { }

  ngOnInit(): void {
    this.localizacaoService.findAll().subscribe(data => {
      this.localizacoes = data;
    });
  }

  excluir(localizacao: Localizacao) {
    this.localizacaoService.delete(localizacao).subscribe({
      next: () => {
        this.router.navigateByUrl('/localizacoes');
        this.ngOnInit();
      },
      error: (err) => {
        console.log('Erro ao Excluir' + JSON.stringify(err));
      },
    });
  }
}
