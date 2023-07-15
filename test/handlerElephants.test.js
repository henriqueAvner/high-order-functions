const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined quando não há parâmetros', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });

  it('Retorna uma mensagem de erro quando o parâmetro não é uma string', () => {
    expect(handlerElephants(null)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna uma lista de nomes quando o parâmetro é "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna o valor correto de elephants[param] quando o parametro é uma chave válida', () => {
    const param = 'age';
    const result = handlerElephants(param);
    expect(result).toBe(null);
  });
  it('Retorna o tamanho da array de elefantes quando é executado com o parâmetro count', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });
});
