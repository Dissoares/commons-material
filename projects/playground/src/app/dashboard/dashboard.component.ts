import {
  PageSectionComponent,
  ThemeToggleComponent,
  ToolbarComponent,
} from '@dissoares/commons-material';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MetricasCard } from '../core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    PageSectionComponent,
    ThemeToggleComponent,
    ToolbarComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly router = inject(Router);

  readonly metrics = signal<Array<MetricasCard>>([
    {
      titulo: 'Usuários Ativos',
      valor: '1,234',
      descricao: 'Usuários online nas últimas 24h',
      icone: 'people',
      cor: 'primary',
    },
    {
      titulo: 'Vendas do Mês',
      valor: 'R$ 45.6K',
      descricao: '+12% em relação ao mês anterior',
      icone: 'trending_up',
      cor: 'success',
    },
    {
      titulo: 'Taxa de Conversão',
      valor: '3.2%',
      descricao: 'Taxa de conversão de visitantes',
      icone: 'percent',
      cor: 'warning',
    },
    {
      titulo: 'Tickets Abertos',
      valor: '23',
      descricao: 'Tickets de suporte pendentes',
      icone: 'support_agent',
      cor: 'danger',
    },
  ]);

  readonly activities = signal([
    {
      id: 1,
      titulo: 'Novo usuário registrado',
      descricao: 'João Silva completou o cadastro',
      icone: 'person_add',
      tempo: 'há 2 minutos',
    },
    {
      id: 2,
      titulo: 'Relatório gerado',
      descricao: 'Relatório mensal de vendas exportado',
      icone: 'assessment',
      tempo: 'há 15 minutos',
    },
    {
      id: 3,
      titulo: 'Sistema atualizado',
      descricao: 'Versão 2.1.0 implantada com sucesso',
      icone: 'system_update',
      tempo: 'há 1 hora',
    },
  ]);

  public voltar(): void {
    this.router.navigate(['/']);
  }

  public novoUsuario(): void {
    console.log('Abrir formulário de novo usuário');
  }

  public gerarRelatorio(): void {
    console.log('Gerar relatório');
  }

  public limparCache(): void {
    console.log('Limpar cache do sistema');
  }
}
