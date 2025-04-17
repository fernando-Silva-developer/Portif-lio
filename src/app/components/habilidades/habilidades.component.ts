import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent {
  skills = [
    {
      name: 'Comunicação',
      description:
        'Expresso ideias claramente por escrito e verbalmente, garantindo colaboração eficaz em equipes.',
    },
    {
      name: 'Autonomia',
      description:
        'Gerencio tarefas de forma independente, tomando iniciativa e mantendo produtividade sem supervisão constante.',
    },
    {
      name: 'Resolução de Problemas',
      description:
        'Uso pensamento crítico para identificar, analisar e solucionar desafios técnicos e operacionais.',
    },
    {
      name: 'Colaboração',
      description:
        'Trabalho em equipe com colegas distribuídos, contribuindo para metas compartilhadas em ambientes virtuais.',
    },
    {
      name: 'Adaptabilidade',
      description:
        'Ajusto-me a mudanças de prioridades e novas ferramentas, acompanhando o ritmo dinâmico do setor tech.',
    },
    {
      name: 'Gestão do Tempo',
      description:
        'Organizo tarefas e cumpro prazos, otimizando a produtividade.',
    },
  ];
}
