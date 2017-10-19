/* eslint-disable class-methods-use-this */
// @flow

import EventIncrementer from '../../src/scripts/models/eventincrementer';
import type { Runnable } from '../../src/scripts/models/eventincrementer';
import assertNotify from './util';

class TwiceIncrementer extends EventIncrementer {
  // noinspection JSUnusedGlobalSymbols
  planIncrementEvent(incrementTask: Runnable): void {
    incrementTask();
    incrementTask();
  }
}


describe('test executor', () => {
  it('should call notifier twice', () => {
    assertNotify((notifier) => {
      const executor = new TwiceIncrementer(notifier);
      executor.setup();
    }, 2);
  });
});