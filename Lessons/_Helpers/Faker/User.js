let faker_1 = require("@faker-js/faker");
function createRandomUser() {
    return {
        _id: faker_1.faker.string.uuid(),
        avatar: faker_1.faker.image.avatar(),
        birthday: faker_1.faker.date.birthdate(),
        email: faker_1.faker.internet.email(),
        firstName: faker_1.faker.person.firstName(),
        lastName: faker_1.faker.person.lastName(),
        sex: faker_1.faker.person.sexType(),
        subscriptionTier: faker_1.faker.helpers.arrayElement(['free', 'basic', 'business']),
    };
}
console.log(createRandomUser());
