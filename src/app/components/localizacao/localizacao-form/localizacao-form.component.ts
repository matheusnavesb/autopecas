import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fornecedor } from '../../../models/fornecedor.model';
import { LocalizacaoService } from '../../../services/localizacao.service';
import { FornecedorService } from '../../../services/fornecedor.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Localizacao } from '../../../models/localizacao.model';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-localizacao-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatButtonModule,
    MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './localizacao-form.component.html',
  styleUrl: './localizacao-form.component.css'
})
export class LocalizacaoFormComponent implements OnInit {

  formGroup: FormGroup;
  fornecedores: Fornecedor[] = [];

  constructor(private formBuilder: FormBuilder,
    private localizacaoService: LocalizacaoService,
    private fornecedorService: FornecedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    this.formGroup = formBuilder.group({
      id: [null],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      fornecedor: [null]
    });
  }

  ngOnInit(): void {
    this.fornecedorService.findAll().subscribe(data => {
      this.fornecedores = data;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    const localizacao: Localizacao = this.activatedRoute.snapshot.data['localizacao'];

    // selecionando o fornecedor
    const fornecedor = this.fornecedores.find(fornecedor => fornecedor.id === (localizacao?.fornecedor?.id || null));

    this.formGroup = this.formBuilder.group({
      id: [(localizacao && localizacao.id) ? localizacao.id : null],
      cidade: [(localizacao && localizacao.cidade) ? localizacao.cidade : '', Validators.required],
      estado: [(localizacao && localizacao.estado) ? localizacao.estado : '', Validators.required],
      fornecedor: [fornecedor]
    });
  }

  salvar() {
    if (this.formGroup.valid) {
      const localizacao = this.formGroup.value;
      if (localizacao.id == null) {
        this.localizacaoService.insert(localizacao).subscribe({
          next: (localizacaoCadastrado) => {
            this.router.navigateByUrl('/localizacoes');
          },
          error: (err) => {
            console.log('Erro ao Incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.localizacaoService.update(localizacao).subscribe({
          next: (localizacaoAlterado) => {
            this.router.navigateByUrl('/localizacoes');
          },
          error: (err) => {
            console.log('Erro ao Editar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluir() {
    if (this.formGroup.valid) {
      const localizacao = this.formGroup.value;
      if (localizacao.id != null) {
        this.localizacaoService.delete(localizacao).subscribe({
          next: () => {
            this.router.navigateByUrl('/localizacoes');
          },
          error: (err) => {
            console.log('Erro ao Excluir' + JSON.stringify(err));
          }
        });
      }
    }
  }
}
