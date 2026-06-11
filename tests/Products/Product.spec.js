import { test, expect } from '@playwright/test'
import login_details from '../../testdata/login.json'
import productData from '../../testdata/Product.json'
import {Product_details} from '../../Page/Products.js'
import  random  from '../../utils/random_number.js'

//-----------------------------Simple Way------------------

// test('Product',async({page})=>{
//     await page.goto(login_deatils.url)

//     //login page-
//     await page.locator('//input[@name="user_name"]').fill(login_deatils.Username)
//     await page.locator('//input[@name="user_password"]').fill(login_deatils.Password)
//     await page.locator('//input[@id="submitButton"]').click()
//     await page.locator('//a[text()="Products"]').click()
//     await page.locator('//img[@alt="Create Product..."]').click()
//     await page.locator('//input[@name="productname"]').fill(product_details.ProductName)
//     await page.locator('(//input[@type="submit"])[1]').click()
// })

//--------------------------Using POM----------------

test('Create Product', async ({ page }) => {

    const pro = new Product_details(page);

    await pro.sign_in();

    await expect(page).toHaveURL(/module=Home/);

    await page.locator('(//a[text()="Products"])[1]').click();

    await page.locator('//img[@title="Create Product..."]').click();

    let productName = await pro.create_product(productData.ProductName);
    await expect(page.locator('.lvtHeaderText')).toContainText(productData.ProductName);

});