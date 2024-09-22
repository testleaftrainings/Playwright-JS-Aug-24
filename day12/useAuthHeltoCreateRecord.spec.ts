import test from "@playwright/test";
import { authGenerator } from "./authHelper";

let access_Token: any
let base_Url: any
let LeadId:any
let lastName="Maheswari"

test.beforeAll(`Calling auth function`,async()=>{
    const auth=await authGenerator();
    access_Token=auth.accessToken;
    base_Url=auth.baseUrl
})

test(`To Create lead in Salesforce`, async ({ request }) => {

    const response = await request.post(`${base_Url}/services/data/v58.0/sobjects/Lead`, {
        headers: {
            "Authorization": "Bearer " + access_Token,
            "Content-Type": "application/json"
        },
        data: {
            "Lastname": lastName,
            "Company": "TCS",
            "Phone": "7864789020"
        }
    })

    const responseData = await response.json()
    console.log(responseData)
    LeadId = responseData.id;
    console.log(LeadId)

})

test(`To get the record`,async({page})=>{

 //login with credentials
 //click on applauncher
 //search for leads
 //click on leads links
 //search the lastname in search field 
 //verify the created lead

})

test(`To delete the record`,async({page})=>{

    //login with credentials
    //click on applauncher
    //search for leads
    //click on leads links
    //search the lastname in search field 
    //verify the created lead
    //click the on arrow to select the record to delete
   //verify the delete toast message
   })

   test(`To get the  deleted record`,async({page})=>{
    //use leadid as the endpoint resource path parameter
    //resource not found -->404
    //ui part 
    //No items display
   })