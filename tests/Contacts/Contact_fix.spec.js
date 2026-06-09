import {test} from '../../Custom_fixtures/Vitegar_fixtures.js'
import cont from '../../testdata/Contact.json'

test('',async ({contact}) => {
    await contact.create_contact(cont.FirstName,cont.LastName)
})
