export async function window(page,action){

    let [popup] = await Promise.all([        //if we want to use it any where store this it into a variable and just perform a click 
        page.waitForEvent('popup'),
        action
    ])
    await popup.waitForLoadState()
    return popup
}