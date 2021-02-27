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
        expect(() => testList.peek()).toThrow("Linked List Empty");
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
        // add a peek or tostring
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
        testList.insertAt("third", 2);
        expect(testList.toString()).toBe("4, yessir, third, 2, test");
    });
    it("will throw when insertAt 1 while empty", () => {
        expect(() => testList.insertAt("fail", 1)).toThrow("Location not Found");
    });
    it("will push multiple things and removeFrom the first one", () => {
        testList.push(93);
        testList.push("0");
        testList.push("seven");
        testList.removeFrom(0);
        expect(testList.toString()).toBe("0, 93");
    });
    it("will push one thing and removeFrom to remove it", () => {
        testList.push(13);
        testList.removeFrom(0);
        expect(testList.toString()).toBe("");
    })
    it("will push nothing and when trying to removeFrom it will throw", () => {
        expect(() => testList.removeFrom(0)).toThrow("LinkedList Empty");
    });
    it("will push then removeFrom the last item", () => {
        testList.push(59);
        testList.push(5);
        testList.push(9);
        testList.removeFrom(2);
        expect(testList.toString()).toBe("9, 5");
    });
    it("will push and removeFrom will throw when NAN", () => {
        testList.push(64);
        testList.push(59);
        testList.push(5);
        expect(() => testList.removeFrom("z")).toThrow("Location not Found");
    });
    it("will push and removeElement from beginning", () => {
        testList.push("f");
        testList.push(9);
        testList.push(8);
        testList.removeElement(8);
        expect(testList.toString()).toBe("9, f");
    });
    it("will throw when empty and trying to removeElement", () => {
        expect(() => testList.removeElement(9)).toThrow("LinkedList Empty");
    });
    it("will throw when element entered in removeElement is not in list", () => {
        testList.push("e");
        testList.push(9);
        testList.push("8");
        expect(() => testList.removeElement(8)).toThrow("Element not Found");
    });
    it("will push and removeElement from end", () => {
        testList.push("e");
        testList.push(9);
        testList.push("8");
        testList.removeElement("e");
        expect(testList.toString()).toBe("8, 9");
    });
    it("will push and removeElement from middle", () => {
        testList.push(13);
        testList.push("e");
        testList.push(9);
        testList.push("whoops")
        testList.push("8");
        testList.removeElement("whoops");
        expect(testList.toString()).toBe("8, 9, e, 13");
    });
    it("will addToEnd from while Empty", () => {
        testList.addToEnd(95);
        expect(testList.toString()).toBe("95");
    });
    
    it("will addToEndfrom when not Empty", () => {
        testList.push(95);
        testList.addToEnd(89);
        expect(testList.toString()).toBe("95, 89");
    });

    it("will addToEnd multiple times", () => {
        testList.addToEnd("p4");
        testList.push("third");
        testList.addToEnd(74);
        testList.addToEnd("yessir");
        expect(testList.toString()).toBe("third, p4, 74, yessir");
    });
});
