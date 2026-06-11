import {test,expect} from '@playwright/test'
import { campaigns_details } from '../../Page/campaigns.js';
import campaign_json from '../../testdata/Campaigns.json';
import login_details from '../../testdata/login.json'
import { Log_details } from '../../Page/login.js'
import { random } from '../../utils/random_number.js'
import { dropdown } from '../../utils/dropdown.js'
import {window} from '../../utils/window_handling.js'

//--------------simple way---------------

test('',async({page})=>{
    await page.goto('http://localhost:8888/index.php?action=index&module=Home')

    //login page-
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.locator('//input[@id="submitButton"]').click()

    //Compaigns-
    await page.locator('//a[text()="More"]').hover()
    await page.locator('//a[text()="Campaigns"]').click()

    await page.locator('//img[@title="Create Campaign..."]').click()
    await page.locator('//input[@name="campaignname"]').fill('CRM Discount Offer')
    await page.locator('//select[@name="campaigntype"]').selectOption({value:"Webinar"})

     let [txt1]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@title="Select"]').click()
    ])
    await txt1.locator('(//a[text()="CRM Automation Software"])[1]').click()
    await page.locator('(//input[@type="submit"])[1]').click()
})


//------------------------------------------Using POM--------------------

test('Campaigns POM',async({page})=>{

     let campaign = new campaigns_details(page);
    
    //Login
    await campaign.sign_in();

    // Verify login successful
    await expect(page).toHaveURL(/module=Home/);

    // Open Campaigns module
    await page.locator('//a[text()="More"]').hover();
    await page.locator('//a[text()="Campaigns"]').click();

    // Verify Campaigns page opened
    await expect(page).toHaveURL(/module=Campaigns/);

     // Click Create Campaign
    await page.locator('//img[@title="Create Campaign..."]').click()

     // Verify Create Campaign page
    await expect(page.locator('//span[@class="lvtHeaderText"]')).toContainText('Creating New Campaign');

    // Enter Campaign Name with random_number
     const campaignName = await campaign.create_campaign(campaign_json.CampaignName);

    // Verify entered value
    await expect(campaign.CampaignName).toHaveValue(campaignName);

     // Using dropdown utility select value
    await dropdown(page.locator('//select[@name="campaigntype"]'),'Webinar')

    //select product- pop up handling through utils
    let popup = await window(page,page.locator('//img[@title="Select"]').click())
    await popup.locator('(//a[text()="CRM Automation Software"])[1]').click()

    // Save Campaign
    await campaign.save.click();

    // Verify Campaign Created Successfully
    await expect(page.locator('.dvHeaderText')).toContainText(campaign_json.CampaignName);

})