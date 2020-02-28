import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  users: Usuario[];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService
      .getUsers()
      .subscribe(data => {
        console.log(data);
        this.users = data;
      });
  }
}
