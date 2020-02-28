import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users: Usuario[];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('usuarios').subscribe(usuarios => {
      this.users = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }
}
