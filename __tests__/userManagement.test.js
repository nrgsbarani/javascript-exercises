const {
  addUser,
  removeUser,
  showUsers,
} = require("../advanced/userManagement");

describe("User Management", () => {
  it("should add a user correctly", () => {
    addUser("Hesam");
    expect(showUsers()).toContain("Hesam");
  });

  it("should remove a user correctly", () => {
    addUser("Reza");
    removeUser("Reza");
    expect(showUsers()).not.toContain("Reza");
  });

  it("should show all users correctly", () => {
    addUser("Hesam");
    addUser("Reza");
    expect(showUsers()).toEqual(["Hesam", "Reza"]);
  });
});
