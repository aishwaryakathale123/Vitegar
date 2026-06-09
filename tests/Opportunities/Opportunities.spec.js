import { test, expect } from '@playwright/test'
import login_details from '../../testdata/login.json'
import opp_json from '../../testdata/Opportunities.json'
import { Opportunities_details } from '../../Page/Opportunities.js'
import { random } from '../../utils/random_number.js'

//-----------------------Simple way------------

test('Organization',async({page})=>{
    await page.goto('http://localhost:8888/index.php?action=index&module=Home')

    //login page-
    await page.waitForTimeout(2000)
    await page.locator('//input[@name="user_name"]').fill(login_details.Username)
    await page.locator('//input[@name="user_password"]').fill(login_details.Password)
    await page.locator('//input[@id="submitButton"]').click()

    await page.locator('(//a[text()="Opportunities"])[1]').click()
    await page.locator('//img[@title="Create Opportunity..."]').click()
    await page.locator('//input[@name="potentialname"]').fill(Opportunities_details.OpportunityName)

    let [txt1]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@title="Select"])[1]').click()
    ])
    await txt1.locator('//a[text()="ABC Technologies"]').click()
    await page.locator('(//input[@type="submit"])[1]').click()

})

//-----------------------Using POM--------------

test.only('Create Opportunities', async ({ page }) => {

    let opp = new Opportunities_details(page)

    await opp.sign_in()
    // Verify login successful
    await expect(page).toHaveURL(/module=Home/);

    //Open Opportunities 
    await page.locator('(//a[text()="Opportunities"])[1]').click();

     //Verify Opportunities page opened
    await expect(page).toHaveURL(/module=Potentials/);

    //Click Opportunity
    await page.locator('//img[@title="Create Opportunity..."]').click()

    //verify Create Opportunity page
    //await expect(page.locator('//span[@class="lvtHeaderText"]')).toHaveText('Creating New Opportunity');
    
    let opportunityName = await opp.create_opportunities(opp_json.OpportunityName);
    await expect(page.locator('//span[@class="dvHeaderText"]')).toContainText(opportunityName);
    
    //Create Opportunity
    //await opp.create_opportunities(opp_json.OpportunityName)


})