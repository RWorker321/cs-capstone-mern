// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';

// Test cases

test("Test Case 1", () => {
    // Render React Component to dom
    
    const root = document.createElement("div");
    ReactDOM.render(<App />, root)

    // Use Dom Apis {querySelector} to make assertions
    expect(root.querySelector("h1").textContent).to

});
