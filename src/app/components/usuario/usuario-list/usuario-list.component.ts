import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [NgFor, MatTableModule],
  templateUrl: './usuario-list.component.html',
  styleUrl: './usuario-list.component.css'
})
export class UsuarioListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email'];
  usuarios: Usuario[] = [];

  constructor(private UsuarioService: UsuarioService) {

  }

  ngOnInit(): void {
      this.UsuarioService.getUsuarios().subscribe(data => {
        this.usuarios = data;
      })
  }
}
