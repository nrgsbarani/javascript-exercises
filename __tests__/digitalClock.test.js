/**
 * @jest-environment jsdom
 */

const digitalClock = require("./../advanced/digitalClock");

describe("digitalClock", () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="clock"></div>';
  });

  it("should display the current time in HH:MM:SS format", () => {
    // Mock Date and use fake timers
    jest.useFakeTimers();
    const mockDate = new Date("2023-01-01T12:34:56");
    jest.setSystemTime(mockDate);

    digitalClock(); // Call the function

    const clockElement = document.getElementById("clock");
    expect(clockElement).not.toBeNull();
    expect(clockElement.textContent).toBe("12:34:56");

    // Advance time by 1 second
    jest.advanceTimersByTime(1000);
    jest.setSystemTime(new Date("2023-01-01T12:34:57"));

    digitalClock(); // Update the time manually
    expect(clockElement.textContent).toBe("12:34:57");
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
});
