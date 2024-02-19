import { Routes } from '@angular/router';
import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';
import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';

export const routes: Routes = [
    { path: 'estados', component: EstadoListComponent, title: 'Lista de Estados'},
    { path: 'estados/new', component: EstadoFormComponent, title: 'Novo Estado'},
    { path: 'usuarios', component: UsuarioListComponent, title: 'Lista de Usuarios'},
    { path: 'usuarios/new', component: UsuarioFormComponent, title: 'Lista de Usuarios'}
];
