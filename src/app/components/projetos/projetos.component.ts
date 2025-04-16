import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent {
  isModalOpen = false;
  selectedProject: any = null;

  projects = [
    {
      name: 'Classificador de imagem',
      image: '/classificador.png',
      description:
        'Esse é um projeto de classificação de imagens para supermercados, onde o usuário pode fazer upload de uma imagem e o bot do telegram criado irá classificar a imagem em uma das categorias disponíveis. O projeto foi desenvolvido utilizando Python e , com o objetivo de facilitar a identificação de produtos em supermercados.',
      technologies: 'Python, Pytorch, Telegram Bot API, Machine Learning.',
      link: 'https://github.com/fernando-Silva-developer/Classificador-de-imagem-para-supermercado',
    },
    {
      name: 'Law House',
      image: '/law_house.png',
      description:
        'Uma plataforma web que automatiza a construção de peças jurídicas e pesquisas de jurisprudência para advogados, com interface responsiva e integração de backend. E foi publicada a versão beta no Hugging Face Spaces, a 2.0 ainda está em processo de desenvolvimento em um time de 2 desenvolvedores contando comigo.',
      technologies: 'Python, Flask, HTML, CSS.',
      link: 'https://huggingface.co/spaces/law-house/law_house',
    },
    {
      name: 'Portfolio',
      image: '/portifolio.png',
      description:
        'Meu portfólio pessoal, destacando projetos e habilidades com um design moderno, animações e navegação fluida em abas interativas. Desenvolvido para poder mostrar meus projetos de forma mais dinâmica.',
      technologies: 'Angular, TypeScript, HTML, CSS.',
      link: '',
    },
    {
      name: 'Análise de Dados Airbnb',
      image: '/airbnb.png',
      description:
        'Um projeto de ciência de dados que analisa conjuntos de dados do Airbnb retirado do site "Kaggle", utilizando modelos de machine learning para prever preços e tendências de mercado.',
      technologies: 'Python, PyTorch, Machine Learning.',
      link: 'https://github.com/fernando-Silva-developer/Projeto-Airbnb-analise-de-dados-com-IA',
    },
  ];

  openModal(index: number) {
    this.selectedProject = this.projects[index];
    this.isModalOpen = true;
  }

  closeModal(event: Event) {
    if (
      event.target === event.currentTarget ||
      (event.target as HTMLElement).classList.contains('close-btn')
    ) {
      this.isModalOpen = false;
      this.selectedProject = null;
    }
  }
}
