// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { createCountString } from './functions.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You clicked on climate 4 times.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString('climate', 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You clicked on location 2 times.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString('location', 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
