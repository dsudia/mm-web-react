fixture `Register`
  .page `http://localhost:3000`

test(`Register a user with valid info`, async t => {
    await t
        .click("#profile-menu")
        .click("#sign-up-button")
})