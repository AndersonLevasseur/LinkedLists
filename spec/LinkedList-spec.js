const LinkedList = require('../LinkedList');


describe("Linked List", () => {
    let testList;
    beforeEach(() => {
        testList = new LinkedList();
    });
    it("will push and peek a string when starting empty", () => {
        testList.push("test");
        expect(testList.peek()).toBe("test");
    });
    it("will push and peek a number when starting empty", () => {
        testList.push(1);
        expect(testList.peek()).toBe(1);
        expect(testList.peek()).not.toBe("1");
    });
    it("will push multiple things and peek will only return the first", () => {
        testList.push("test");
        testList.push(4);
        testList.push(2384);
        expect(testList.peek()).toBe(2384);
        expect(testList.toString()).toBe("2384, 4, test");
    });
    it("will throw when peeking while empty", () => {
        expect(testList.peek()).toThrow("Linked List Empty");
    });
    it("will push multiple things and toString will return data in a string", () => {
        testList.push(43);
        testList.push("3f");
        testList.push(92);
        expect(testList.toString()).toBe("92, 3f, 43");
    });
    it("will push nothing and toString will reutrn an empty string", () => {
        expect(testList.toString()).toBe("");
        expect(testList.toString()).not.toBe();
        expect(testList.toString()).not.toBe(" ");
    });
    it("will push multiple strings and pop", () => {
        testList.push("first");
        testList.push("second");
        testList.push("third");
        expect(testList.pop()).toBe("third");
    });
    it("will push after popping", () => {
        testList.push("test");
        testList.pop();
        testList.push(3);
        expect(testList.toString()).toBe("3");
    });
    it("will push 4 times then insertAt 2", () => {
        testList.push("test");
        testList.push(2);
        testList.push("yessir");
        testList.push(4);
        testList.insertAt("third", 1);
        expect(testList.toString()).toBe("4, yessir, third, 2, test");
    });
    it("will insertAt 1 while empty", () => {
        expect(testList.insertAt("fail", 1)).toThrow("Location not Found");
    });
});
