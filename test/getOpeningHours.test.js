const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
    it('Para os parâmetros Monday e 09:00-AM a função deve     retornar a string The zoo is closed', () => {
        expect(getOpeningHours('Monday','09:00-AM')).toBe('The zoo is closed');
      });
      it('Para os parâmetros Thuesday e  09:00-AM a função retorna a string The zoo is open', () => {
        expect(getOpeningHours('Tuesday','09:00-AM')).toBe('The zoo is open');
      });
      it('Para os parâmetros Wednesday  e 09:00-PM  a função retorna a string The zoo is closed', () => {
        expect(getOpeningHours('Wednesday','09:00-PM')).toBe('The zoo is closed');
      });
});

   