import { greet } from "./greet"

describe("greet testing", () => {
    it("should include the name in the message", () => {
        expect(greet('zoo')).toContain('Welcome zoo');
    })

    it("should increment the input it positive", () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
});  // suit
