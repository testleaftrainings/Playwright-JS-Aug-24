//generate token
//username,password,client id and client secret -->
//post

import test from "playwright/test"; 

let accessToken: any
let baseUrl: any
let LeadId: any
test.describe.serial(`Salesforce API config`, async () => {
    test(`TO generate token for salesforce`, async ({ request }) => {
        const uri = "https://login.salesforce.com/services/oauth2/token"
        const clientId = "3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV"
        const clientSecret = "149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654"
        const username = "vidyar@testleaf.com"
        const password = "Sales@123"
        const grantType = "password"
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
        accessToken = res.access_token;
        baseUrl = res.instance_url;
        console.log(`The generated access token -  ${accessToken}`)
        console.log(`The generated instance Url -  ${baseUrl}`)
    })

    test(`To Create lead in Salesforce`, async ({ request }) => {

        const response = await request.post(`${baseUrl}/services/data/v58.0/sobjects/Lead`, {
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type": "application/json"
            },
            data: {
                "Lastname": "Radhakrishnan",
                "Company": "Wipro",
                "Phone": "7864789020"
            }
        })

        const responseData = await response.json()
        console.log(responseData)
        LeadId = responseData.id;
        console.log(LeadId)
    })
    test(`To Update the exisiting lead in Salesforce`, async ({ request }) => {
        const endPoint = `${baseUrl}/services/data/v58.0/sobjects/Lead/${LeadId}`
        console.log(endPoint)
        const response = await request.patch(`${endPoint}`,
            {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": "application/json"
                },
                data: {
                    "Email": "vinoth@gmail.com",
                    "Firstname": "Vinoth"
                }
            })
        // const responseData = await response.json()  // no json output for patch request
        // console.log(responseData)
        console.log(response.statusText())
    })

    test(`To get the exisiting lead in Salesforce`, async ({ request }) => {

        const endPoint = `${baseUrl}/services/data/v58.0/sobjects/Lead/${LeadId}`
        console.log(endPoint)
        const response = await request.get(`${endPoint}`,
            {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": "application/json"
                },               
            })
        const responseData = await response.json()  
        console.log(responseData)
        console.log(response.statusText())
    })
    test(`To delete the exisiting lead in Salesforce`, async ({ request }) => {

        const endPoint = `${baseUrl}/services/data/v58.0/sobjects/Lead/${LeadId}`
        console.log(endPoint)
        const response = await request.delete(`${endPoint}`,
            {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": "application/json"
                },
               
            })
        // const responseData = await response.json()  
        // console.log(responseData)
        console.log(response.status())
    })

    test(`To get the deleted lead in Salesforce`, async ({ request }) => {

        const endPoint = `${baseUrl}/services/data/v58.0/sobjects/Lead/${LeadId}`
        console.log(endPoint)
        const response = await request.get(`${endPoint}`,
            {
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": "application/json"
                },
               
            })
        const responseData = await response.json()  
        console.log(responseData)
        console.log(response.statusText())
    })


})