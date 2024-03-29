import { Usuario } from './../../../models/usuario.model';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../services/usuario.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})

export class UsuarioFormComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    const usuario: Usuario = activatedRoute.snapshot.data['usuario'];

    this.formGroup = formBuilder.group({
      id: [(usuario && usuario.id) ? usuario.id : null],
      nome: [(usuario && usuario.nome) ? usuario.nome : '', Validators.required],
      email: [(usuario && usuario.email) ? usuario.email : '', Validators.required],
      //idade: [(usuario && usuario.idade) ? usuario.idade : '', Validators.required],
      senha: [(usuario && usuario.senha) ? usuario.senha : '', Validators.required]
    });
  }

  salvarUsuario() {
    if (this.formGroup.valid) {
      const usuario = this.formGroup.value;
      if (usuario.id == null) {
        this.usuarioService.insert(usuario).subscribe({
          next: (usuarioCadastrado) => {
            this.router.navigateByUrl('/usuarios');
          },
          error: (err) => {
            console.log('Erro ao Incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.usuarioService.update(usuario).subscribe({
          next: (usuarioAlterado) => {
            this.router.navigateByUrl('/usuarios');
          },
          error: (err) => {
            console.log('Erro ao Editar' + JSON.stringify(err));
          }
        });
      }
    }
  }

  excluirUsuario() {
    if (this.formGroup.valid) {
      const usuario = this.formGroup.value;
      if (usuario.id != null) {
        this.usuarioService.delete(usuario).subscribe({
          next: () => {
            this.router.navigateByUrl('/usuarios');
          },
          error: (err) => {
            console.log('Erro ao Excluir' + JSON.stringify(err));
          }
        });
      }
    }
  }
}



