# Component Evolution Checklist

Use este checklist antes de publicar um componente novo ou alterado.

## API
- [ ] Inputs e outputs sao minimos e semanticos.
- [ ] Nomes sao consistentes com o dominio.
- [ ] Contratos sao retrocompativeis.

## UX e A11y
- [ ] Navegacao por teclado validada.
- [ ] Focus ring visivel.
- [ ] Labels e roles ARIA definidos quando necessario.
- [ ] Contraste adequado em light e dark mode.

## Theming
- [ ] Usa design tokens oficiais da biblioteca.
- [ ] Nao usa cor/espaco hard-coded sem justificativa.
- [ ] Comportamento em tema dark validado.

## Engenharia
- [ ] Unit tests cobrindo casos principais e bordas.
- [ ] Sem warnings de lint.
- [ ] Build da biblioteca validado.
