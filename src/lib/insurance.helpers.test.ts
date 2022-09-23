import { expect } from '@jest/globals';
import { countries } from 'data/countries';
import { packages } from 'data/packages';
import { calculateAddOn, calculatePremium } from 'lib/insurance.helpers';

describe('Calculating Premiums', () => {
  describe('HK premium for 10years old ', () => {
    it('Should be 100 for regular', () => {
      expect(calculatePremium(1, 0, 10)).toMatchSnapshot();
    });

    it('Should be 150 for sale', () => {
      expect(calculatePremium(1, 50, 10)).toMatchSnapshot();
    });

    it('Should be 175 for super safe', () => {
      expect(calculatePremium(1, 75, 10)).toMatchSnapshot();
    });
  });

  describe('US premium for 10years old ', () => {
    it('Should be 200 for regular', () => {
      expect(calculatePremium(2, 0, 10)).toMatchSnapshot();
    });

    it('Should be 300 for sale', () => {
      expect(calculatePremium(2, 50, 10)).toMatchSnapshot();
    });

    it('Should be 350 for super safe', () => {
      expect(calculatePremium(2, 75, 10)).toMatchSnapshot();
    });
  });

  describe('AU premium for 10years old ', () => {
    it('Should be 300 for regular', () => {
      expect(calculatePremium(3, 0, 10)).toMatchSnapshot();
    });

    it('Should be 450 for sale', () => {
      expect(calculatePremium(3, 50, 10)).toMatchSnapshot();
    });

    it('Should be 525 for super safe', () => {
      expect(calculatePremium(3, 75, 10)).toMatchSnapshot();
    });
  });
});

describe('Calculating Premiums Addons', () => {
  describe('HK Addons for 10years old ', () => {
    it('Should be 0 for regular', () => {
      expect(calculateAddOn(countries[0], packages[0], 10)).toMatchSnapshot();
    });

    it('Should be 50 for sale', () => {
      expect(calculateAddOn(countries[0], packages[1], 10)).toMatchSnapshot();
    });

    it('Should be 75 for super safe', () => {
      expect(calculateAddOn(countries[0], packages[2], 10)).toMatchSnapshot();
    });
  });

  describe('US Addons for 10years old ', () => {
    it('Should be 0 for regular', () => {
      expect(calculateAddOn(countries[1], packages[0], 10)).toMatchSnapshot();
    });

    it('Should be 100 for sale', () => {
      expect(calculateAddOn(countries[1], packages[1], 10)).toMatchSnapshot();
    });

    it('Should be 150 for super safe', () => {
      expect(calculateAddOn(countries[1], packages[2], 10)).toMatchSnapshot();
    });
  });

  describe('AU Addons for 10years old ', () => {
    it('Should be 0 for regular', () => {
      expect(calculateAddOn(countries[2], packages[0], 10)).toMatchSnapshot();
    });

    it('Should be 150 for sale', () => {
      expect(calculateAddOn(countries[2], packages[1], 10)).toMatchSnapshot();
    });

    it('Should be 225 for super safe', () => {
      expect(calculateAddOn(countries[2], packages[2], 10)).toMatchSnapshot();
    });
  });
});
