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

test('should add an item to the store and rerun effect', () => {
  const selector = (store) => ({ tasks: store.tasks, addTask: store.addTask });
  const effect = vi.fn().mockImplementation((items) => {
    if (items.tasks.length === 0) {
      items.addTask({
        id: 1,
        title: 'a',
        status: 'b',
      });
    }
  });
  render(<TestComponent selector={selector} effect={effect} />);
  expect(effect).toHaveBeenCalledTimes(2);
  expect(effect).toHaveBeenCalledWith(expect.objectContaining({ tasks: [{ id: 1, title: 'a', status: 'b' }] }));
});
