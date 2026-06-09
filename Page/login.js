import logi from '../testdata/login.json' 

export class Log_details{
    constructor(page){
        this.page= page;
        this.username= page.locator('//input[@type="text"]')
        this.password= page.locator('//input[@type="password"]')
        this.button= page.getByRole('button',{name:'Login'})
    }

    async sign_in(){
        await this.page.goto(logi.url)
    
    }
    
    async details(){
        await this.username.fill(logi.username)
        await this.password.fill(logi.password)
        await this.button.click()
    }

}
