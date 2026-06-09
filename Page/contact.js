import logi from '../testdata/login.json' 
import {random} from '../utils/random_number.js'

export class Contact_details {

    constructor(page) {

        this.page = page
        this.contact = page.locator('(//a[text()="Contacts"])[1]')
        this.createContact = page.locator('//img[@title="Create Contact..."]')
        this.selectMRS = page.locator('(//select[@name="salutationtype"])[1]')
        this.FirstName = page.locator('//input[@name="firstname"]')
        this.LastName = page.locator('//input[@name="lastname"]')
        this.organizationIcon = page.locator('(//img[@title="Select"])[1]')
        this.Save = page.locator('(//input[@type="submit"])[1]')
    }

    async sign_in(){
        await this.page.goto(logi.url)
        await this.page.locator('//input[@name="user_name"]').fill(logi.username)
        await this.page.locator('//input[@name="user_password"]').fill(logi.password)
        await this.page.getByRole('button', { name: 'Login' }).click()     //this method is created for login details so we can use this method anywhere
    }

    async create_contact(FirstName,LastName) {
        await this.contact.click()
        await this.createContact.click()
        await this.selectMRS.selectOption({ label: 'Mrs.' });
        //await this.selectMRS.click()
        let random_num = random()
        await this.FirstName.fill(FirstName + random_num)
        await this.LastName.fill(LastName + random_num)
        await this.Save.click()
    }
}