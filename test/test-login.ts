import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href);

fixture `Login to Stork as a User.`
    .page `http://87.44.18.111:4200`;

test('Login to Stork as a User.', async t => {
    await t
        .typeText('input[name="inputUserLoginEmail"]', 'l')
        .typeText('input[name="inputUserLoginPassword"]', 'p')
        .click('form > button[type="submit"]')
        .expect(getLocation()).eql('http://87.44.18.111:4200/storks/your-storks');
});