import logi from '../testdata/login.json'
import {random} from '../utils/random_number.js'              

export class Org_details{
    constructor(page){
        this.page = page
        this.clickOrg = page.locator('(//a[text()="Organizations"])[1]')
        this.createOrg = page.locator('//img[@title="Create Organization..."]')
        this.OrganizationName= page.locator('//input[@name="accountname"]')
        this.Phone = page.locator('#phone')
        this.button = page.locator('(//input[@value="  Save  "])[1]')
    }

     async create_org(OrganizationName, Phone) {
        await this.clickOrg.click()
        await this.createOrg.click()
        let random_num = random();
        let randomOrgName = OrganizationName + random_num;
        let randomPhone = Phone + random_num;
        await this.OrganizationName.fill(randomOrgName);
        await this.Phone.fill(randomPhone);
        await this.button.click();
        return randomOrgName;
}

} 