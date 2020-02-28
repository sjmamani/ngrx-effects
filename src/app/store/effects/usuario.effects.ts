import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import * as usuarioActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    public usuarioService: UsuarioService
  ) {}

  @Effect()
  cargarUsuario$ = this.actions$.pipe(
    ofType(usuarioActions.CARGAR_USUARIO),
    switchMap((action: usuarioActions.CargarUsuario) => {
      // Regresa un nuevo observable
      return this.usuarioService.getUserById(action.id).pipe(
        map(user => new usuarioActions.CargarUsuarioSuccess(user)),
        catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
      );
    })
  );
}
