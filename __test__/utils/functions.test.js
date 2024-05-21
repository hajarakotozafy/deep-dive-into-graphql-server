const { generateNewID } = require("../../src/utils/functions");

describe("generate new ID function", () => {
    it("should generate a new ID correctly", () => {
        const Todos = [
            {id: 1},
            {id: 3},
            {id: 5}
        ];

        const newID = generateNewID(Todos);
        expect(newID).toBe(6);
    });

    it("should return 1 when Todos is empty", () => {
        const Todos = [];
        const newID = generateNewID(Todos);
        expect(newID).toBe(1);
    })
})