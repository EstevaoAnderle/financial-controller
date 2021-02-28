// Responsável por realizar a formatação dos dados. Neste caso, ele formata para o real brasileiro.

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value) {
  return moneyFormatter.format(value);
}

export { formatMoney };
