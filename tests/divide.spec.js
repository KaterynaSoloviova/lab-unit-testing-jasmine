// UNCOMMENT THE CODE BELOW TO START



describe("Iteration 2", () => {
    describe("Function - divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(8, 2)).toEqual(4);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the two arguments is not a number", () => {
            expect(divide("1", 2)).toEqual(undefined);
            expect(divide("1", "apple")).toEqual(undefined);
            expect(divide([1], 2)).toEqual(undefined);
            expect(divide([1], [2])).toEqual(undefined);
        })

    })
})
