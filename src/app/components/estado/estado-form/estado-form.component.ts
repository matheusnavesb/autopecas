import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { EstadoService } from '../../../services/estado.service';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Estado } from '../../../models/estado.model';


@Component({
  selector: 'app-estado-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './estado-form.component.html',
  styleUrl: './estado-form.component.css'
})

export class EstadoFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private estadoService: EstadoService,
              private router: Router,
              private activatedRoute: ActivatedRoute){


      const estado: Estado = this.activatedRoute.snapshot.data['estado'];

      this.formGroup = formBuilder.group({
        id: [(estado && estado.id) ? estado.id : null],
        nome:[(estado && estado.nome) ? estado.nome : '', Validators.required],
        sigla:[(estado && estado.sigla) ? estado.sigla : '', Validators.required]
      });
    }


    salvar(){
        if(this.formGroup.valid){
          if(this.formGroup.valid){
            const estado = this.formGroup.value;
            if(estado.id == null){
              this.estadoService.insert(estado).subscribe({
                next: (estadoCadastrado) => {
                  this.router.navigateByUrl('/estados');
                },

              error: (err) => {
                console.log('Erro ao incluir' + JSON.stringify(err));
              }
            });

          }else{
              this.estadoService.update(estado).subscribe({
                next: (estadoAlterado) => {
                  this.router.navigateByUrl('/estados');
                },

              error: (err) => {
                console.log('Erro ao editar' + JSON.stringify(err));
              }
          });
          }
      }

    }

  }

    excluir(){


    };
}
