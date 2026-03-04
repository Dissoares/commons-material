const fs = require('node:fs');
const path = require('node:path');

const arquivoDesignTokens = path.resolve(
  __dirname,
  '../projects/commons-material/src/lib/tokens/design-tokens.ts',
);
const arquivoTokensScss = path.resolve(
  __dirname,
  '../projects/commons-material/src/lib/theme/styles/_tokens.scss',
);

const conteudo = fs.readFileSync(arquivoDesignTokens, 'utf8');

function extrairMapa(nomeConstante) {
  const regex = new RegExp(`export const ${nomeConstante}:[\\s\\S]*?=\\s*\\{([\\s\\S]*?)\\};`, 'm');

  const match = conteudo.match(regex);

  if (!match) {
    throw new Error(`Não foi possível localizar ${nomeConstante} em design-tokens.ts`);
  }

  const corpo = match[1];
  const entradas = [...corpo.matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)].map((item) => ({
    chave: item[1],
    valor: item[2],
  }));

  if (!entradas.length) {
    throw new Error(`Nenhuma entrada encontrada em ${nomeConstante}`);
  }

  return entradas;
}

const espacamentos = extrairMapa('cmEspacamento');
const raios = extrairMapa('cmRaio');
const coresLight = extrairMapa('cmCoresLight');
const coresDark = extrairMapa('cmCoresDark');

const linhas = [
  '// Arquivo gerado automaticamente por tools/gerar-tokens-scss.cjs',
  '// Fonte de verdade: src/lib/tokens/design-tokens.ts',
  ':root {',
  ...espacamentos.map((item) => `  --${item.chave}: ${item.valor};`),
  '',
  ...raios.map((item) => `  --${item.chave}: ${item.valor};`),
  '',
  ...coresLight.map((item) => `  --${item.chave}: ${item.valor};`),
  '}',
  '',
  ":root[data-cm-theme='dark'],",
  '.cm-theme-dark {',
  ...coresDark.map((item) => `  --${item.chave}: ${item.valor};`),
  '}',
  '',
];

fs.writeFileSync(arquivoTokensScss, linhas.join('\n'), 'utf8');
console.log('Tokens SCSS sincronizados com sucesso.');
