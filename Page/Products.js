import logi from '../testdata/login.json'
import { random } from '../utils/random_number.js'

export class Product_details {
    constructor(page){
        this.page = page
        this.ClickProduct = page.locator('(//a[text()="Products"])[1]')
        this.CreateProduct = page.locator('//img[@title="Create Product..."]')
        this.ProductName = page.locator('//input[@name="productname"]')
        this.Save = page.locator('(//input[@type="submit"])[1]')
    }

    async sign_in(){
        await this.page.goto(logi.url)
        await this.page.locator('//input[@name="user_name"]').fill(logi.username)
        await this.page.locator('//input[@name="user_password"]').fill(logi.password)
        await this.page.getByRole('button', { name: 'Login' }).click()     //this method is created for login details so we can use this method anywhere
    }

    async create_product(ProductName){
        await this.ClickProduct.click()
        await this.CreateProduct.click()
        let random_num = random();
        let randomProductName = ProductName + random_num
        await this.ProductName.fill(randomProductName)
        await this.Save.click()
    }
}