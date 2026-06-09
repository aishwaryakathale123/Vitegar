import {test} from '../../Custom_fixtures/Vitegar_fixtures.js'
import orgnize from '../../testdata/Organization.json'

test('',async ({organization}) => {
    await organization.create_org(orgnize.OrganizationName,orgnize.Phone)
})
