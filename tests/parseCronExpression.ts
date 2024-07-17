import { parseCronExpression } from '../src/index';

// Define test cases for parseCronExpression
const testCasesCronExpression: { input: string, expected: string, description: string }[] = [
    {
      input: '0 12 * * *',
      expected: 'every day at noon',
      description: 'Parse a standard cron expression for every day at noon'
    }
];

// Test cases for parseCronExpression
describe('parseCronExpression', () => {
  testCasesCronExpression.forEach(({ input, expected, description }) => {
    test(description, () => {
      const result = parseCronExpression(input);
      expect(result).toBe(expected);
    });
  });
});

