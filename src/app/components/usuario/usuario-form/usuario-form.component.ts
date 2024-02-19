import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './usuario-form.component.html',
  styleUrl: './usuario-form.component.css'
})

export class UsuarioFormComponent {
  
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuarioService: UsuarioService,
              private router: Router) {
      this.formGroup = formBuilder.group({
        nome:['', Validators.required],
        email:['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const novoUsuario = this.formGroup.value;
      this.usuarioService.salvar(novoUsuario).subscribe({
        next: (usuarioCadastrado) => {
          this.router.navigateByUrl('/usuarios');
      },
        error:(err) => {
          console.log('Erro ao salvar usuario' + JSON.stringify(err));
        }
      });
    }
  }
}



