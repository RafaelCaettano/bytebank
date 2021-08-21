import { TestBed } from '@angular/core/testing';

import { HelpResolver } from './help.resolver';

describe('HelpResolver', () => {
  let resolver: HelpResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HelpResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
