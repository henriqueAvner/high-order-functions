const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Para os parâmetros Monday e 09:00-AM a função deve     retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
    });
  it('Para os parâmetros Thuesday e  09:00-AM a função retorna a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    });
  it('Para os parâmetros Wednesday  e 09:00-PM  a função retorna a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
    });
  it('Para o argumento day escrito de forma errada, retorne a mensagem The day must be valid. Example: Monday', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toBe('The day must be valid. Example: Monday');
    });
  it('Para o argumento hour escrito de forma errada, deve-se retornar  mensagem The hour should represent a number', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toBe('The hour should represent a number');
    });
  it('Para argumentos em que a abreviação está incorreta, deve-se retornar a mensagem The abbreviation must be \'AM\' or \'PM\'', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toBe('The abbreviation must be \'AM\' or \'PM\'');
    });
  it('Para a hora acima de 24, retornará a string The hour must be between 0 and 12', () => {
    expect(getOpeningHours('Friday', '28:00-PM')).toBe('The hour must be between 0 and 12');
    });
  it('Para os minutos acima de 59, retornará a string The minutes must be between 0 and 59', () => {
    expect(getOpeningHours('Friday', '09:89-AM')).toBe('The minutes must be between 0 and 59');
    }); 
    
});
