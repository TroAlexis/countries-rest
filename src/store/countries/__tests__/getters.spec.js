import { filteredCountries } from '@/store/countries/getters';

describe('countries/getters', () => {
  it('filteredCountries filters using filter object', () => {
    const state = {
      data: [
        { name: 'Russian Federation', region: 'Europe' },
        { name: 'USA', region: 'Americas' },
        { name: 'Italy', region: 'Europe' },
        { name: 'Argentina', region: 'Americas' },
      ],
      filters: {
        region: {
          value: 'Americas',
          func: ({ region }, value) => region === value,
        },
      },
    };

    const result = filteredCountries(state);

    expect(result).toEqual([
      { name: 'USA', region: 'Americas' },
      { name: 'Argentina', region: 'Americas' },
    ]);
  });
});
