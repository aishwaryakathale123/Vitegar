import {test} from '../../Custom_fixtures/Vitegar_fixtures.js'
import leads1 from '../../testdata/Leads.json'

test('',async ({leads}) => {
    await leads.create_lead(leads1.FirstName,leads1.LastName,leads1.Company,leads1.Mobile)
})
