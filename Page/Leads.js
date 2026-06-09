import logi from '../testdata/login.json'
import { random } from '../utils/random_number.js'

export class Leads_details{
    constructor(page){

        this.page = page;
        this.ClickLead = page.locator('(//a[text()="Leads"])[1]')
        this.CreateLead = page.locator('//img[@title="Create Lead..."]')
        this.addLead = page.locator('//img[@title="Create Lead..."]')
        this.Mrs = page.locator('(//select[@name="salutationtype"])[1]')
        this.FirstName = page.locator('//input[@name="firstname"]')
        this.LastName = page.locator('//input[@name="lastname"]')
        this.Company = page.locator('//input[@name="company"]')
        this.Mobile = page.locator('//input[@name="mobile"]')
        this.button = page.locator('(//input[@type="submit"])[1]')
    }
    
    async create_lead(FirstName,LastName,Company,Mobile){

        await this.ClickLead.click()
        await this.addLead.click()
        await this.Mrs.selectOption({ label: 'Mrs.' });
        
        let random_num = random();

        let randomFN = FirstName + random_num
        await this.FirstName.fill(randomFN)

        let randomLN = LastName + random_num
        await this.LastName.fill(randomLN)

        let randomComp = Company + random_num
        await this.Company.fill(randomComp)

        await this.Mobile.fill(Mobile)

        await this.button.click()

    }
}


