import {test} from '../../Custom_fixtures/Vitegar_fixtures'
import campaign1 from '../../testdata/Campaigns.json'

test('',async ({campaign}) => {
    await campaign.create_campaign(campaign1.CampaignName)
})
