import * as faker from 'faker'
import Page from '../poms/prototype.page'
import Profile from '../poms/profile.page'



fixture `register a user`
    .page `http://localhost:3000`

const page = new Page()
const profile = new Profile()

test('fill out teacher registration form with valid data', async t => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const displayName = `${firstName}${lastName}`
    const email = faker.internet.email().toLowerCase()
    const password = faker.internet.password()

    await t
        .navigateTo('http://localhost:3000')
        .click(page.buttonAuthMenu)
        .click(page.buttonOpenSignUp)
        .click(page.radioTeacher)
        .typeText(page.fieldFirstName, firstName)
        .typeText(page.fieldLastName, lastName)
        .typeText(page.fieldDisplayName, displayName)
        .typeText(page.fieldEmail, email)
        .typeText(page.fieldPassword, password)
        .typeText(page.fieldConfPassword, password)
        .click(page.buttonSubmitSignUp)
        .expect(profile.cardProfile).ok('Expected profile card to be visible.')
        .expect(profile.itemDisplayName.innerText).contains(displayName)
        .expect(profile.itemFirstName.innerText).contains(firstName)
        .expect(profile.itemLastName.innerText).contains(lastName)
        .expect(profile.itemEmail.innerText).contains(email)
})
