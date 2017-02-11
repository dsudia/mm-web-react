import { Selector } from 'testcafe'
import Page from './prototype.page'

export default class Profile extends Page {
    constructor() {
        super()
        this.cardProfile = Selector('[data-test=card-profile]')
        this.itemDisplayName = Selector('[data-test=item-display-name]')
        this.itemFirstName = Selector('[data-test=item-first-name]')
        this.itemLastName = Selector('[data-test=item-last-name]')
        this.itemEmail = Selector('[data-test=item-email]')
    }
}