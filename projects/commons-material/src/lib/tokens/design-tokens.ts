export type TokenEspacamento =
  | 'cm-space-1'
  | 'cm-space-2'
  | 'cm-space-3'
  | 'cm-space-4'
  | 'cm-space-5'
  | 'cm-space-6';

export type TokenRaio = 'cm-radius-sm' | 'cm-radius-md' | 'cm-radius-lg';

export const cmEspacamento: Readonly<Record<TokenEspacamento, string>> = {
  'cm-space-1': '0.25rem',
  'cm-space-2': '0.5rem',
  'cm-space-3': '0.75rem',
  'cm-space-4': '1rem',
  'cm-space-5': '1.25rem',
  'cm-space-6': '1.5rem',
};

export const cmRaio: Readonly<Record<TokenRaio, string>> = {
  'cm-radius-sm': '0.5rem',
  'cm-radius-md': '0.75rem',
  'cm-radius-lg': '1rem',
};
