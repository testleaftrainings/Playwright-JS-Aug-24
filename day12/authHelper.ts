import { chromium } from "playwright"


export async function authGenerator(){
    const uri = "https://login.salesforce.com/services/oauth2/token"
    const clientId = "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
    const clientSecret = "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
    const username = "vidyar@testleaf.com"
    const password = "Sales@123"
    const grantType = "password"

    const browser =await chromium.launch();
    const browserContext=await browser.newContext()
    const request=browserContext.request;
    const response = await request.post(`${uri}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        },
        form: {
            "grant_type": grantType,
            "client_id": clientId,
            "client_secret": clientSecret,
            "username": username,
            "password": password
        }
    })
    const res = await response.json();

    return{
        accessToken : res.access_token,
        baseUrl : res.instance_url
        }

}