import {test,expect} from '@playwright/test'
import leads_details from '../../testdata/Leads.json'
import { log_details } from '../../Page/login.js';
import { Leads_details } from '../../Page/Leads.js'
import login_details from '../../testdata/login.json'
import { random } from '../../utils/random_number.js'


 //------------------------------------Simple way------------------//
// test('Leads',async({page})=>{
//     await page.goto(login_details.url)

//     //login page-
//     await page.waitForTimeout(2000)
//     await page.locator('//input[@name="user_name"]').fill(login_details.Username)
//     await page.locator('//input[@name="user_password"]').fill(login_details.Password)
//     await page.locator('//input[@id="submitButton"]').click()

//     await page.locator('(//a[text()="Leads"])[1]').click()
//     await page.locator('//img[@title="Create Lead..."]').click()
//     await page.locator('(//select[@name="salutationtype"])[1]').selectOption({value:"Mrs."})
//     await page.locator('//input[@name="firstname"]').fill(leads_details['First Name'])
//     await page.locator('//input[@name="lastname"]').fill(leads_details['Last Name'])
//     await page.locator('//input[@name="company"]').fill(leads_details.Company)
//     await page.locator('//input[@name="mobile"]').fill(leads_details.Mobile)
//     await page.locator('(//input[@type="submit"])[1]').click()

// })

//-----------------------Using POM----------------------------//

test('Leads1',async({page})=>{

    let lead = new Leads_details(page)

    await lead.sign_in()
    
    //Verify login successful
    await expect(page).toHaveTitle(/vtiger/i)

    //click on lead
    await lead.ClickLead.click()

    //Click Create Lead
    await lead.CreateLead.click()

    // Select Mrs
    await lead.Mrs.selectOption({value:"Mrs."})

    //Fill lead details
     await lead.create_lead(
        leads_details.FirstName,
        leads_details.LastName,
        leads_details.Company,
        leads_details.Mobile
    )
})




