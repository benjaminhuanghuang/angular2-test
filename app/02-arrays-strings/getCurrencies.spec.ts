import { getCurrencies } from "./getCurrencies"

describe("getCurrencies testing", () => {
    it("should return the supported currencies", () => {
        const result = getCurrencies()
        expect(result).toContain('USD');
        expect(result).toContain('EUR');
    })
});  // suit
