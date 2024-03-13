import { usuarioResolver } from './components/usuario/resolver/usuario-resolver';
import { Routes } from '@angular/router';
import { EstadoListComponent } from './components/estado/estado-list/estado-list.component';
import { EstadoFormComponent } from './components/estado/estado-form/estado-form.component';
import { UsuarioListComponent } from './components/usuario/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario/usuario-form/usuario-form.component';
import { estadoResolver } from './components/estado/resolver/estado-resolver';
import { MunicipioListComponent } from './components/municipio/municipio-list/municipio-list.component';
import { MunicipioFormComponent } from './components/municipio/municipio-form/municipio-form.component';
import { municipioResolver } from './components/municipio/resolver/municipio-resolver';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './components/fornecedor/fornecedor-form/fornecedor-form.component';
import { LocalizacaoListComponent } from './components/localizacao/localizacao-list/localizacao-list.component';
import { LocalizacaoFormComponent } from './components/localizacao/localizacao-form/localizacao-form.component';

export const routes: Routes = [
    { path: 'estados', component: EstadoListComponent, title: 'Lista de Estados'},
    { path: 'estados/new', component: EstadoFormComponent, title: 'Novo Estado'},
    { path: 'estados/edit/:id', component: EstadoFormComponent, resolve: {estado: estadoResolver}},

    { path: 'municipios', component: MunicipioListComponent, title: 'Lista de Municipios'},
    { path: 'municipios/new', component: MunicipioFormComponent, title: 'Novo Municipio'},
    { path: 'municipios/edit/:id', component: MunicipioFormComponent, resolve: {municipio: municipioResolver}},

    { path: 'usuarios', component: UsuarioListComponent, title: 'Lista de Usuarios'},
    { path: 'usuarios/new', component: UsuarioFormComponent, title: 'Novo Usuario'},
    { path: 'usuarios/edit/:id', component: UsuarioFormComponent, resolve: {usuarios: usuarioResolver}},

    { path: 'fornecedores', component: FornecedorListComponent, title: 'Lista de Fornecedores'},
    { path: 'fornecedores/new', component: FornecedorFormComponent, title: 'Novo Fornecedor'},

    { path: 'localizacoes', component: LocalizacaoListComponent, title: 'Lista de Localizacoes'},
    { path: 'localizacoes/new', component: LocalizacaoFormComponent, title: 'Nova localizacao'},
];
