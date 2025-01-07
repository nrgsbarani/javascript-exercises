const digitalClock = require('../advanced/digitalClock');

describe('digitalClock', () => {
  it('should display the current time', () => {
    jest.useFakeTimers();
    digitalClock();  // This function updates the clock, testing is more for visual in the browser
    jest.advanceTimersByTime(1000);
    expect(console.log).toHaveBeenCalled();  // You can check that it logs the time
  });
});
