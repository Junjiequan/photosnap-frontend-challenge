const ScrollToTop = require("./ScrollToTop")
// @ponicode
describe("ScrollToTop.default", () => {
    test("0", () => {
        let callFunction = () => {
            ScrollToTop.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
