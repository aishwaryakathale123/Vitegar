import {test as base} from './login_Fixture.js'
import { Org_details } from '../Page/Organization.js'
import {Contact_details} from '../Page/contact.js'
import {Leads_details} from '../Page/Leads.js'
import {Opportunities_details} from '../Page/Opportunities.js'
import {campaigns_details} from '../Page/Campaigns.js'
import {Product_details} from '../Page/Products.js'


export let test = base.extend({

    organization : async ({loginpage},use) => {
        let org = new Org_details(loginpage)
        await use(org)
    },

    contact : async ({loginpage},use) => {
        let contac = new Contact_details(loginpage)
        await use(contac)
    },

    leads : async ({loginpage},use) => {
        let led = new Leads_details(loginpage)
        await use(led)
    },

    opportunity : async ({loginpage},use) => {
        let opp = new Opportunities_details(loginpage)
        await use(opp)
    },

    campaign : async ({loginpage},use) => {
        let camp = new campaigns_details(loginpage)
        await use(camp)
    },

    product : async ({loginpage},use) => {
        let prod = new Product_details(loginpage)
        await use(prod)
    }
  
})