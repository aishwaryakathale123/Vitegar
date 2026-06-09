import {test as base} from '@playwright/test'
import {Log_details} from '../Page/login.js'

export let test = base.extend({
    loginpage : async ({page},use) => {
        let logi = new Log_details(page)
        await logi.sign_in()
        await logi.details()

        await use(page)
    }
})