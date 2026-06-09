import {test} from '../../Custom_fixtures/Vitegar_fixtures'
import opportunity1 from '../../testdata/Opportunities.json'

test('',async ({opportunity}) => {
    await opportunity.create_opportunities(opportunity1.OpportunityName)
})
