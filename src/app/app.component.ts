import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FerramentasComponent } from './components/ferramentas/ferramentas.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SobreMimComponent } from './components/sobre-mim/sobre-mim.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FerramentasComponent,
    HabilidadesComponent,
    NavBarComponent,
    ProjetosComponent,
    RodapeComponent,
    SobreMimComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'meu-portfolio';
}
