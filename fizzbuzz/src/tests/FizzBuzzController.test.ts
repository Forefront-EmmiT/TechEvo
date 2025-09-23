import { expect, test, vi } from 'vitest';
import { FizzBuzzController } from '../controllers/FizzBuzzController';
import { OutputComponent } from '../components/OutputComponent';

test('Calculate 15', () => {
    const mockForm = {} as HTMLFormElement;
    const inputForm = {} as HTMLInputElement;
    
    const mockOutput = {
        updateOutput: vi.fn()
    } as unknown as OutputComponent;

    const controller = new FizzBuzzController(mockForm, inputForm, mockOutput);
    
    controller.startCount(15n);
    expect(controller.fizzCount).toBe(5)
    expect(controller.buzzCount).toBe(3)
}) 