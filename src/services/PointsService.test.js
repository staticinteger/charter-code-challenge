import {
  calculatePointsOnPurchase,
  calculateTotalPoints
} from './PointsService';

describe('PointsService', () => {
  describe('calculatePointsOnPurchase', () => {
    it('should calculate correct number of points on purchases', () => {
      expect(calculatePointsOnPurchase({ amount: 50 })).toEqual(0);
      expect(calculatePointsOnPurchase({ amount: 51 })).toEqual(1);
      expect(calculatePointsOnPurchase({ amount: 100 })).toEqual(50);
      expect(calculatePointsOnPurchase({ amount: 101 })).toEqual(52);
      expect(calculatePointsOnPurchase({ amount: 150 })).toEqual(150);
    });

    it('should return 0 if invalid purchase object or amount is empty/null/undefined', () => {
      expect(calculatePointsOnPurchase({})).toEqual(0);
      expect(calculatePointsOnPurchase()).toEqual(0);
      expect(calculatePointsOnPurchase({ amount: null })).toEqual(0);
      expect(calculatePointsOnPurchase({ amount: undefined })).toEqual(0);
    });
  })

  describe('calculateTotalPoints', () => {
    it('should calculate correct total points for purchases', () => {
      expect(calculateTotalPoints([
        { amount: 50 },
        { amount: 51 },
        { amount: 100 },
        { amount: 101 },
        { amount: 150 }
      ])).toEqual(253);
    });

    it('should return 0 if invalid purchases array or array is empty', () => {
      expect(calculateTotalPoints([])).toEqual(0);
      expect(calculateTotalPoints()).toEqual(0);
      expect(calculateTotalPoints({})).toEqual(0);
      expect(calculateTotalPoints(null)).toEqual(0);
      expect(calculateTotalPoints(undefined)).toEqual(0);
    });
  });
});