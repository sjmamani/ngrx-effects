import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) {}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    switchMap(() => {
      // Regresa un nuevo observable
      return this.usuarioService.getUsers().pipe(
        map(users => new usuariosActions.CargarUsuariosSuccess(users)),
        catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
      );
    })
  );
}
