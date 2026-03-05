# Contributing Guide

## Fluxo minimo para contribuicao
1. Criar branch por escopo (`feat/...`, `fix/...`, `chore/...`).
2. Atualizar ou criar ADR para decisoes arquiteturais.
3. Implementar com cobertura de testes.
4. Executar `npm run lint`, `npm run build`, `npm test -- --watch=false`.
5. Abrir PR com contexto, evidencias e riscos.

## Requisitos de PR
- Descricao clara da motivacao e impacto.
- Checklist de testes preenchido.
- Sem regressao de acessibilidade.
- Sem quebra de API publica sem migracao documentada.

## Checklist rapido
- [ ] Segue `docs/standards/google-angular-standards.md`
- [ ] Atualizou docs quando necessario
- [ ] Incluiu testes relevantes
- [ ] CI local validado
