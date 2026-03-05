import {
  PageSectionComponent,
  ThemeToggleComponent,
  ToolbarComponent,
} from '@dissoares/commons-material';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../core/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [
    PageSectionComponent,
    ThemeToggleComponent,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ToolbarComponent,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly usuarioForm: FormGroup = this.fb.group({
    nome: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    cargo: [null, Validators.required],
    departamento: [null, Validators.required],
    dataAdmissao: [new Date(), Validators.required],
    ativo: [true],
  });

  readonly usuarios = signal<Array<Usuario>>([
    {
      id: 1,
      nome: 'Ana Silva',
      email: 'ana.silva@exemplo.com',
      cargo: 'Desenvolvedora Senior',
      departamento: 'Tecnologia',
      dataAdmissao: new Date('2022-03-15'),
      ativo: true,
    },
    {
      id: 2,
      nome: 'Carlos Oliveira',
      email: 'carlos.oliveira@exemplo.com',
      cargo: 'Product Manager',
      departamento: 'Produto',
      dataAdmissao: new Date('2021-07-20'),
      ativo: true,
    },
  ]);

  readonly cargos = signal([
    'Desenvolvedor Junior',
    'Desenvolvedor Pleno',
    'Desenvolvedor Senior',
    'Tech Lead',
    'Product Manager',
    'Designer',
    'Analista QA',
  ]);

  readonly departamentos = signal(['Tecnologia', 'Produto', 'Design', 'Marketing', 'Vendas', 'RH']);

  public voltar(): void {
    this.router.navigate(['/']);
  }

  public salvarUsuario(): void {
    if (this.usuarioForm.valid) {
      const novoUsuario: Usuario = {
        ...this.usuarioForm.value,
        id: Date.now(),
      };

      this.usuarios.set([...this.usuarios(), novoUsuario]);
      this.limparFormulario();
      console.log('Usuário salvo:', novoUsuario);
    }
  }

  public editarUsuario(usuario: Usuario): void {
    this.usuarioForm.patchValue(usuario);
    console.log('Editando usuário:', usuario);
  }

  public excluirUsuario(id: number): void {
    this.usuarios.set(this.usuarios().filter((u) => u.id !== id));
    console.log('Usuário excluído:', id);
  }

  public limparFormulario(): void {
    this.usuarioForm.reset({
      nome: '',
      email: '',
      cargo: '',
      departamento: '',
      dataAdmissao: new Date(),
      ativo: true,
    });
  }
}
