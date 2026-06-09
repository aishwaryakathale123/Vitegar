import logi from '../testdata/login.json'
import { random } from '../utils/random_number'

export class Opportunities_details {
    constructor(page){
        this.page = page
        this.OpenOpportuity = page.locator('(//a[text()="Opportunities"])[1]')
        this.ClickOpportunity = page.locator('//img[@title="Create Opportunity..."]')
        this.OpportunityName = page.locator('//input[@name="potentialname"]')
        this.save= page.locator('(//input[@type="submit"])[1]')
    }
    
     async create_opportunities(OpportunityName) {

        await this.OpenOpportuity.click()
        await this.ClickOpportunity.click()

        let random_num = random();
        let randomOpportunityName = OpportunityName+random_num;
        await this.OpportunityName.fill(randomOpportunityName);
        await this.save.click();
        return randomOpportunityName;
}
}