const printMessage = require("../simple/printMessage");

describe("printMessage", () => {
  it("should print the correct message to the console", () => {
    console.log = jest.fn(); // Mock کردن console.log

    const message = "Hello, world!";
    printMessage(message);

    expect(console.log).toHaveBeenCalledWith(message);
  });
});
