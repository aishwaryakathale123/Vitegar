import {test} from '@playwright/test'
import login_json from '../testdata/login.json'
import { Log_details } from '../Page/login.js'

test('login_page',async ({page}) => {

    // create object
    let login = new Log_details(page)

    // open url
    await page.goto(login_json.url)

    // use locators from POM file
    await login.username.fill(login_json.username)
    await login.password.fill(login_json.password)
    await login.button.click() 
})




