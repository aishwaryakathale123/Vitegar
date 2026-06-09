import logi from '../testdata/login.json' 
import { random } from '../utils/random_number'

export class campaigns_details{
    constructor(page){
        this.page = page
        this.ClickMore = page.locator('//a[text()="More"]')
        this.ClickCampaign = page.locator('//a[text()="Campaigns"]')
        this.CreateCampaign = page.locator('//img[@title="Create Campaign..."]')
        this.CampaignName = page.locator('//input[@name="campaignname"]')
        this.save = page.locator('(//input[@type="submit"])[1]')
    }

    // async sign_in(){
    //     await this.page.goto(logi.url)
    //     await this.page.locator('//input[@name="user_name"]').fill(logi.username)
    //     await this.page.locator('//input[@name="user_password"]').fill(logi.password)
    //     await this.page.getByRole('button', { name: 'Login' }).click()     //this method is created for login details so we can use this method anywhere
    // }

    //using utils random_number
     async create_campaign(campaignName) {

        await this.ClickMore.hover()
        await this.ClickCampaign.click()
        await this.CreateCampaign.click()

        const random_num = random();
        const uniqueCampaignName = campaignName + random_num;
        await this.CampaignName.fill(uniqueCampaignName);
        return uniqueCampaignName;
    }

}