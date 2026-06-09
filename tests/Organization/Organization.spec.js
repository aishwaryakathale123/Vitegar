 import {test, expect} from '@playwright/test'
 import login_details from '../../testdata/login.json'
 import { Log_details } from '../../Page/login.js'
 import org_json from '../../testdata/organization.json'
 import Organization_deatils from '../../testdata/Organization.json'
 import { Org_details } from '../../Page/Organization.js'
import { random } from '../../utils/random_number.js'

// //------------------------------------Simple way----------
// test('Organization',async({page})=>{
//     await page.goto(login_details.url)

//     //login page-
//     await page.waitForTimeout(2000)
//     await page.locator('//input[@name="user_name"]').fill(login_details.Username)
//     await page.locator('//input[@name="user_password"]').fill(login_details.Password)
//     await page.locator('//input[@id="submitButton"]').click()

//     //Created Organization-
//     await page.locator('(//a[text()="Organizations"])[1]').click()
//     await page.locator('//img[@title="Create Organization..."]').click()
//     await page.locator('//input[@name="accountname"]').fill(Organization_deatils.OrganizationName)
//     await page.locator('#phone').fill(Organization_deatils.Phone)
//     await page.locator('(//input[@value="  Save  "])[1]').click()

// })

//-------------------------------- Using POM-------------------------

test('Create Organization', async ({ page }) => {

    let org = new Org_details(page) 

    await org.sign_in()
    // Verify login successful
    await expect(page).toHaveURL(/module=Home/);

    // Open Organizations module
    await page.locator('(//a[text()="Organizations"])[1]').click()
    // Verify Organizations page opened
    await expect(page).toHaveURL(/module=Accounts/);
    
     // Click Create Organization
    await page.locator('//img[@title="Create Organization..."]').click()

    // Verify Create Organization page
    await expect(page.locator('//span[@class="lvtHeaderText"]')).toContainText('Creating New Organization');

    // Create Organization with random number
    const orgName = await org.create_org(org_json.OrganizationName,org_json.Phone)

    // Verify Organization created successfully
    await expect(page.locator('.dvHeaderText')).toContainText(org_json.OrganizationName)
})