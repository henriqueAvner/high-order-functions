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
  it('Retorna o valor null de elephants[param] quando o parametro é uma chave válida', () => {
    const param = 'age';
    const result = handlerElephants(param);
    expect(result).toBe(null);
  });
  it('Retorna o tamanho da array de elefantes quando é executado com o parâmetro count', () => {
    const result = handlerElephants('count');
    expect(result).toBe(4);
  });
  it('Retorna a localização do elefante quando se passa location como parâmetro', () => {
    expect(handlerElephants('location').toBe('NW'));
  });
  it('Para o argumento averageAge, deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
