import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: Option[] = [
    { icon: 'ri-speed-line', name: 'Pix' },
    { icon: 'ri-barcode-line', name: 'Pagar' },
    { icon: 'ri-exchange-dollar-line', name: 'Transferir' },
    { icon: 'ri-exchange-dollar-fill', name: 'Depositar' },
    { icon: 'ri-hand-coin-line', name: 'Pegar emprestado' },
    { icon: 'ri-smartphone-line', name: 'Recarga de celular' },
    { icon: 'ri-coins-line', name: 'Cobrar' },
    { icon: 'ri-heart-line', name: 'Doação' },
  ];

  infos: string[] = [
    'Você tem R$ 100.000,00 disponíveis para empréstimo.', 
    'Conquiste planos futuros: conheça as opções para guardar dinheiro.'
  ]

  news: News[] = [
    { title: "WhatsApp", description: "Pagamentos seguros, rápidos e sem tarifa. A experoência Bytebank sem nem sair da conversa.", buttonLabel: "Quero conhecer", feat: true },
    { title: "WhatsApp", description: "Pagamentos seguros, rápidos e sem tarifa. A experoência Bytebank sem nem sair da conversa.", buttonLabel: "Quero conhecer", feat: true }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Option {
  icon: string;
  name: string
}

interface News {
  title: string;
  description: string;
  buttonLabel: string;
  feat: boolean;
}