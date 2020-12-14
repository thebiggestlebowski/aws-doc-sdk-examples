const mockCreateVault = jest.fn();
jest.mock("@aws-sdk/client-glacier/commands/CreateVaultCommand", () => ({
    Glacier: function Glacier() {
        this.CreateVaultCommand = mockCreateVault;
    },
}));
const { run } = require("../../glacier/src/createVault");

test("has to mock glacier#createvault", async (done) => {
    await run();
    expect(mockCreateVault).toHaveBeenCalled;
    done();
});
