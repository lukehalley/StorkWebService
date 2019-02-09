import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href);
import * as faker from 'faker';

const url = `http://87.44.18.111:4200`;

// tslint:disable-next-line:no-unused-expression
fixture`User Accounts.`.page(url);
const fNameValid = faker.name.firstName();
const sNameValid = faker.name.lastName();
const usernameValid = faker.internet.userName();
const emailValid = faker.internet.email();
const passValid = faker.internet.password();
const addressValid = faker.address.streetAddress();
const phoneValid = faker.phone.phoneNumber();

const fNameInvalid = faker.name.firstName();
const sNameInvalid = faker.name.lastName();
const usernameInvalid = faker.internet.userName();
const emailInvalid = faker.internet.email();
const passInvalid = faker.internet.password();
const addressInvalid = faker.address.streetAddress();
const phoneInvalid = faker.phone.phoneNumber();

const registerNavButton = 'div#storkNavbar a:nth-child(2)';
const addStorkButton = 'p > button[type="submit"]';
const editStorkButton = 'footer > a:nth-child(1)';
const storkId = 'STR1234';
const storkIdEdit = 'STR4321';
const storkNickname = 'YourNickname1234';
const storkNicknameEdit = 'YourNickname4321';
const storkTitle =
  'body > app-root > app-stork-create > div > div > div:nth-child(1) > div > p';

// Inputs
const emailField = 'input[name="inputUserLoginEmail"]';
const usernameField = 'input[name="inputUserSignUpUsername"]';
const passwordField = 'input[name="inputUserLoginPassword"]';
const firstNameField = 'input[name="inputUserSignUpFName"]';
const secondNameField = 'input[name="inputUserSignUpSName"]';
const addressField = 'input[name="inputUserSignUpAddress"]';
const phoneNumberField = 'input[name="inputUserSignUpPhoneNumber"]';
const signupSubmitButton = 'p > button[type="submit"]';
const loginSubmitButton = 'form > button[type="submit"]';
// Stork
const inputStorkID = 'input[name="inputStorkID"]';
const inputStorkNickname = 'input[name="inputStorkNickname"]';

test('Valid Sign Up + Sign In With Valid Credentials', async t => {
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText(usernameField, usernameValid)
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .typeText(firstNameField, fNameValid)
    .typeText(secondNameField, sNameValid)
    .typeText(addressField, addressValid)
    .typeText(phoneNumberField, phoneValid)
    .click(signupSubmitButton)
    .expect(getLocation())
    .eql(url + '/login')
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .click(loginSubmitButton)
    .expect(getLocation())
    .eql(url + '/storks/your-storks');
});

test('Sign Up With A Duplicate Email', async t => {
  const signupErrorExists = Selector('#swal2-title').withExactText(
    'Sign Up Unsuccessful!'
  ).exists;
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText(usernameField, usernameInvalid)
    .typeText(emailField, emailValid)
    .typeText(passwordField, passInvalid)
    .typeText(firstNameField, fNameInvalid)
    .typeText(secondNameField, sNameInvalid)
    .typeText(addressField, addressInvalid)
    .typeText(phoneNumberField, phoneInvalid)
    .click(signupSubmitButton)
    .expect(signupErrorExists)
    .ok()
    .click(
      'div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled'
    );
});

test('Sign Up With A Duplicate Username', async t => {
  const signupErrorExists = Selector('#swal2-title').withExactText(
    'Sign Up Unsuccessful!'
  ).exists;
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText(usernameField, usernameValid)
    .typeText(emailField, emailInvalid)
    .typeText(passwordField, passInvalid)
    .typeText(firstNameField, fNameInvalid)
    .typeText(secondNameField, sNameInvalid)
    .typeText(addressField, addressInvalid)
    .typeText(phoneNumberField, phoneInvalid)
    .click(signupSubmitButton)
    .expect(signupErrorExists)
    .ok()
    .click(
      'div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled'
    );
});

test('Sign In With Invalid Credentials', async t => {
  const loginErrorExists = Selector('#swal2-title').withExactText(
    'Login Unsuccessful!'
  ).exists;
  await t
    .typeText(emailField, emailValid)
    .typeText(passwordField, 'wrongpassword')
    .click(loginSubmitButton)
    .expect(loginErrorExists)
    .ok();
});

test('Register, Edit and Delete A Stork', async t => {
  await t
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .click(loginSubmitButton)
    .expect(getLocation())
    .eql(url + '/storks/your-storks')
    .click(registerNavButton)
    .expect(getLocation())
    .eql(url + '/storks/register-stork')
    .typeText(inputStorkID, storkId)
    .typeText(inputStorkNickname, storkNickname)
    .click(addStorkButton)
    .expect(getLocation())
    .eql(url + '/storks/your-storks')
    .expect(Selector('p.title').withExactText(storkNickname).exists)
    .ok()
    .expect(Selector('p.subtitle').withExactText(storkId).exists)
    .ok()
    .click(editStorkButton)
    .expect(getLocation())
    .contains(url + '/storks/edit/')
    .expect(Selector(storkTitle).withExactText('Edit Your Stork.').exists)
    .ok()
    .click(inputStorkID)
    .pressKey('ctrl+a delete')
    .click(inputStorkNickname)
    .pressKey('ctrl+a delete')
    .typeText(inputStorkID, storkIdEdit)
    .typeText(inputStorkNickname, storkNicknameEdit)
    .click(addStorkButton)
    .expect(getLocation())
    .eql(url + '/storks/your-storks')
    .expect(Selector('p.title').withExactText(storkNicknameEdit).exists)
    .ok()
    .expect(Selector('p.subtitle').withExactText(storkIdEdit).exists)
    .ok();
});
