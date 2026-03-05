# Google Angular Standards Baseline

Este documento define o baseline tecnico para manter a biblioteca em nivel enterprise.

## 1. Arquitetura
- Preferir componentes standalone e composicao.
- Aplicar separacao de responsabilidades: `components`, `core`, `theme`, `tokens`.
- Evitar acoplamento direto com APIs de browser fora de adaptadores em `core/platform`.
- API publica deve expor apenas contratos estaveis.

## 2. SOLID na pratica
- S: componentes com responsabilidade unica.
- O: APIs extensveis por input/output, sem alterar comportamento legado.
- L: contratos consistentes entre componentes base e compostos.
- I: interfaces pequenas e focadas no dominio.
- D: depender de abstracoes (tokens/adapters), nao de implementacoes concretas.

## 3. Angular Style Guide
- Nome de classe de componente com sufixo `Component`.
- Nome de seletor com prefixo da biblioteca (`cm-`).
- Inputs/outputs com nomes semanticos e estaveis.
- Evitar logica pesada em templates.

## 4. Angular Material e Theming
- Tokens de design como fonte de verdade para cores, espacos e raio.
- Evitar valores hard-coded quando existir token correspondente.
- Dark mode deve ser suportado por contrato (`data-cm-theme` e classe utilitaria).
- A aplicacao de tema global deve ser opcional e documentada.

## 5. Acessibilidade e UX
- Todos os componentes interativos devem ter suporte a teclado.
- Garantir `aria-label` quando nao houver rotulo textual visivel.
- Contraste e foco visivel obrigatorios.
- Estados de loading, erro e vazio devem ser definidos em API.

## 6. Testes e Qualidade
- Unit tests para comportamento publico de cada componente/servico.
- Testes de acessibilidade para componentes interativos.
- Padronizar estrategia de testes zoneless ou zoneful (nao misturar sem justificativa).
- `lint`, `build` e `test` devem ser gates obrigatorios no CI.

## 7. Versionamento e compatibilidade
- Seguir semantic versioning.
- Breaking changes exigem guia de migracao.
- Documentar matriz de compatibilidade Angular/Material por versao.
