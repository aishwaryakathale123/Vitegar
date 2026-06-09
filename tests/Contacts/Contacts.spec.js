import { test, expect } from '@playwright/test'
import contact_json from '../../testdata/Contact.json'
import { Org_details } from '../../Page/organization.js'
import { Contact_details } from '../../Page/Contact.js'
import { random } from '../../utils/random_number.js'
import {dropdown} from '../../utils/dropdown.js'
import { window } from '../../utils/window_handling.js'

//--------------------------Simple way---------------------------

// test('Leads',async({page})=>{
//     await page.goto(login_details.url)

//     //login page-
//     await page.waitForTimeout(2000)
//     await page.locator('//input[@name="user_name"]').fill(login_details.Username)
//     await page.locator('//input[@name="user_password"]').fill(login_details.Password)
//     await page.locator('//input[@id="submitButton"]').click()

//     //creating contact-
//     await page.locator('(//a[text()="Contacts"])[1]').click()
//     await page.locator('//img[@title="Create Contact..."]').click()
//     await expect(page.locator('//span[@class="lvtHeaderText"]')).toContainText('Creating New Contact');

//     await page.locator('(//select[@name="salutationtype"])[1]').selectOption({value:"Mrs."})
//     await page.locator('//input[@name="firstname"]').fill(Contact_details.FirstName)
//     await page.locator('//input[@name="lastname"]').fill(Contact_details.LastName)

//     let [txt1]=await Promise.all([
//         page.waitForEvent('popup'),
//         page.locator('(//img[@title="Select"])[1]').click()
//     ])
//     await txt1.locator('//a[text()="ABC Technologies"]').click()
//     await page.locator('(//input[@type="submit"])[1]').click()
// })

//-------------------------------Using POM-----------------------

test('Create Contact',async({page})=>{

    let org = new Org_details(page)
    let contact = new Contact_details(page)

    await org.sign_in()

    //check Contacts module is visible
    await expect(contact.contact).toBeVisible();
    await contact.contact.click()

     //check Create Contact icon is visible
    await expect(contact.createContact).toBeVisible();
    await contact.createContact.click()

     //check Create Contact page
    await expect(page.locator('//span[@class="lvtHeaderText"]')).toContainText('Creating New Contact')

    //select Mrs. using utils dropdown
    await dropdown(page.locator('(//select[@name="salutationtype"])[1]'),"Mrs.");

    // Fill Contact Details
    await contact.create_contact(
        contact_json.FirstName,
        contact_json.LastName
    );
    //check entered values
    await expect(contact.FirstName).toHaveValue(data.randomFN);
    await expect(contact.LastName).toHaveValue(data.randomLN);

    //pop up handling using utils
    let popup = await window(page,contact.organizationIcon.click());
    
    // Verify popup opened
    await expect(popup).toHaveURL(/module=Accounts/);
    await popup.locator('//a[text()="ABC Technologies"]').click();

    //save contact
    await contact.Save.click()

    // Verify Contact Created Successfully
    await expect(page.locator('.dvHeaderText')).toContainText(contact_json.LastName)
})


