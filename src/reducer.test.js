import reducer from './reducer';

import {
  setRegions,
  selectRegion,
  setCategories,
  selectCategory,
} from './actions';

describe('reducer', () => {
  describe('setRegions', () => {
    it('should set regions array', () => {
      const regions = [
        { id: 101, name: '서울' },
      ];
      const initialState = {
        regions: [],
      };

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).not.toHaveLength(0);
    });
  });

  describe('selectRegion', () => {
    it('should mark selected region', () => {
      const initialState = {
        selectedRegion: '',
      };

      const state = reducer(initialState, selectRegion('서울'));

      expect(state.selectedRegion).toBe('서울');
    });
  });

  describe('setCategories', () => {
    it('should set categories array', () => {
      const categories = [
        { id: 101, name: '중식' },
      ];
      const initialState = {
        categories: [],
      };

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).not.toHaveLength(0);
    });
  });

  describe('selectCategory', () => {
    it('should mark selected category', () => {
      const initialState = {
        selectedCategory: '',
      };

      const state = reducer(initialState, selectCategory('중식'));

      expect(state.selectedCategory).toBe('중식');
    });
  });
});
