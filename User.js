module.exports = class User {

    constructor(userName, userId, age) {
        this.userName = userName;
        this.userId = userId;
        this.age = age;
    }
    // 0 if same 
    // negative #1 is greter 
    // positive #2 is greater
    static ageCompareHigh(user1, user2) {
        // TODO: check that age exists
        return user2.age - user1.age;
    }

    static ageCompareLow(user1, user2) {
        return user1.age - user2.age;
    }

    static nameCompare(user1, user2) {
        return user1.userName.localeCompare(user2.userName);
    }

    static idCompareLow(user1, user2) {
        return user1.userId - user2.userId;
    }

    static idCompareHigh(user1, user2) {
        return user1.userId - user2.userId;
    }
}