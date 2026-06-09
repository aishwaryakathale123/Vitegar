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

    //  async sign_in(){
    //     await this.page.goto(logi.url)
    //     await this.page.locator('//input[@name="user_name"]').fill(logi.username)
    //     await this.page.locator('//input[@name="user_password"]').fill(logi.password)
    //     await this.page.getByRole('button', { name: 'Login' }).click()     //this method is created for login details so we can use this method anywhere
    // }

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