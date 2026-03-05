# Consumo Enterprise Da Biblioteca

Este guia define como um sistema consumidor deve integrar a `@dissoares/commons-material`
para herdar layout, tema e UX sem criar CSS proprio de base.

## 1. Instalacao

Adicionar no `package.json` do sistema consumidor:

```json
{
  "dependencies": {
    "@dissoares/commons-material": "^20.0.0"
  }
}
```

Executar:

```bash
npm install
```

## 2. Tema Global Obrigatorio

No `styles.scss` do sistema consumidor, importar somente o tema da biblioteca:

```scss
@use '@dissoares/commons-material/theme/styles/index.scss';
```

Regra: componentes base (`mat-card`, `mat-form-field`, `mat-button`, tipografia e espacos)
devem seguir tokens da biblioteca.

## 3. Providers Globais Obrigatorios

No `app.config.ts` do sistema consumidor:

```ts
import { proverCommonsMaterial } from '@dissoares/commons-material';

export const appConfig: ApplicationConfig = {
  providers: [
    ...proverCommonsMaterial({
      aparenciaCampoFormulario: 'outline',
      esconderMarcadorObrigatorio: false,
      subscriptSizingCampoFormulario: 'fixed',
      tooltipMostrarDelayMs: 300,
      snackbarDuracaoMs: 4000,
    }),
  ],
};
```

Esse provider padroniza globalmente:
- ripple do Material
- defaults de `MatFormField`
- defaults de `MatTooltip`
- defaults de `MatSnackBar`

## 4. Composicao De Layout

Para estrutura de aplicacao, usar composicoes da biblioteca, por exemplo:

```html
<cm-layout-sistema [sidebarOpen]="sidebarOpen">
  <app-header cmLayoutHeader></app-header>
  <app-sidebar cmLayoutSidebar></app-sidebar>
  <app-content cmLayoutContent></app-content>
  <app-footer cmLayoutFooter></app-footer>
</cm-layout-sistema>
```

## 5. Regras De Governanca

- Nao criar CSS de layout base no sistema consumidor.
- Nao sobrescrever classe interna de componentes Material.
- Evolucao visual deve acontecer na biblioteca.
- Toda mudanca visual global deve ser registrada em ADR.

## 6. Checklist De Aceite

- Sistema compila importando apenas tema/provides da biblioteca.
- Form fields novos seguem aparencia padrao sem estilo local.
- Snackbar e tooltip seguem configuracao global sem duplicacao.
- Layout principal utiliza composicao da biblioteca.