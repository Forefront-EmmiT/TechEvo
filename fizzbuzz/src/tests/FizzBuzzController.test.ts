import { expect, test } from 'vitest';
import { FizzBuzzController } from '../controllers/FizzBuzzController';
import { FIZZBUZZ_CONSTANTS } from '../constants/constants';

test('Increase fizzBuzzCount by 1 when given FizzBuzz', () => {
    const mockForm = {} as HTMLFormElement;
    const inputForm = {} as HTMLInputElement;
    const controller = new FizzBuzzController(mockForm, inputForm);

    controller.countRuleMatches(FIZZBUZZ_CONSTANTS.FIZZBUZZ);
    expect(controller.fizzBuzzCount).toBe(1)
}) 