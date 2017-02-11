import { Selector } from 'testcafe'
import Page from './prototype.page'

export default class Profile extends Page {
    constructor() {
        super()
        this.cardProfile = Selector('[data-test=card-profile]')
    }
}