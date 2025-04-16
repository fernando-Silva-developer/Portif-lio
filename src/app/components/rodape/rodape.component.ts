import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rodape',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
})
export class RodapeComponent {}
