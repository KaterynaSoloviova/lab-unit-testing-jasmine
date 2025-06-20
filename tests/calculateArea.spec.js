// UNCOMMENT THE CODE BELOW TO START


describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {

        it("should be defined", () => {
            expect(calculateArea).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(calculateArea.length).toBe(2);
        });

        it("should return a number representing the area of a rectangle", () => {
            expect(calculateArea(13, 2)).toEqual(26);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(calculateArea(1)).toEqual(undefined);
            expect(calculateArea()).toEqual(undefined);
            expect(calculateArea(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(calculateArea("1", 2)).toEqual(undefined);
            expect(calculateArea("1", "apple")).toEqual(undefined);
            expect(calculateArea([1], 2)).toEqual(undefined);
            expect(calculateArea([1], [2])).toEqual(undefined);
        })
    })
})
