import { useEffect } from 'react';
import { expect, test, vi } from 'vitest';

import { useTask } from './store';
import { render } from '@testing-library/react';

function TestComponent({ selector, effect }) {
  const items = useTask(selector);

  useEffect(() => {
    effect(items);
  }, [effect, items]);

  return null;
}

test('should return default value at the start', () => {
  const selector = (store) => store.tasks;
  const effect = vi.fn();
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledWith([]);
});
