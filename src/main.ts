#!/usr/bin/env node
import { TEST } from './constants';

export function printTest() {
  console.log(TEST);
  console.log('Publish test');
}

printTest();
