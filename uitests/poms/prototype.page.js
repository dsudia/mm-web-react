import { Selector } from 'testcafe'

export default class Page {
    constructor() {
        this.buttonAuthMenu = Selector('[data-test=button-auth-menu]')
        this.buttonOpenSignUp = Selector('[data-test=button-open-sign-up')
        this.radioTeacher = Selector('[data-test=radio-teacher]')
        this.fieldFirstName = Selector('[data-test=field-first-name]')
        this.fieldLastName = Selector('[data-test=field-last-name]')
        this.fieldDisplayName = Selector('[data-test=field-display-name]')
        this.fieldEmail = Selector('[data-test=field-email]')
        this.fieldPassword = Selector('[data-test=field-password]')
        this.fieldConfPassword = Selector('[data-test=field-confPassword]')
        this.buttonSubmitSignUp = Selector('[data-test=button-submit-sign-up]')
    }
}