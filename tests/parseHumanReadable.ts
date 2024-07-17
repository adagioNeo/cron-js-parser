// Import the methods from your library
import { parseHumanReadable } from '../src/index';

// Define test cases for parseHumanReadable
const testCasesHumanReadable: { input: string, expected: string, description: string }[] = [
  {
    input: 'every day at noon',
    expected: '0 12 * * *',
    description: 'Parse a simple human-readable expression for every day at noon'
  }
];

// Test cases for parseHumanReadable
describe('parseHumanReadable', () => {
  testCasesHumanReadable.forEach(({ input, expected, description }) => {
    test(description, () => {
      const result = parseHumanReadable(input);
      expect(result).toBe(expected);
    });
  });
});
