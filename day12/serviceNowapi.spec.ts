import test, { expect } from "playwright/test";

let sysId: any;

test(`Servicenow to create incident`, async ({ request }) => {

   // const context = await browser.newContext();
   // const req = context.request
const desc="Post request through API"

const uri="https://dev216320.service-now.com/api/now/table/incident"
    
    const response = await request.post(`${uri}`, {
        headers: {
            "Authorization": "Basic YWRtaW46VVkybU9VZV43cEBm",
            "Content-Type": "application/json"
        },
        //Body/payload
        data: {
            "short_description": desc
        }
    })
    const res = await response.json();  //retreive the created records as json output
    console.log(res)
    const statusCode = response.status() //response of the post call
    console.log(`The status code of the post call ${statusCode}`)  //200, 201
    const text = response.statusText()
    console.log(`The status text of the post call ${text}`)
    console.log(response.ok())
    sysId = res.result.sys_id;
    console.log(`The sys_id is ${sysId}`)
    const incidentNumber = res.result.number
    console.log(`The created incident number is ${incidentNumber}`)
})

test.skip(`Fetch the specific data using direct input`, async ({ request }) => {
    const res = await request.get(`https://dev216320.service-now.com/api/now/table/incident/10a3412953785210a09cf301a0490ec2`, {
        headers: {
            "Authorization": "Basic YWRtaW46VVkybU9VZV43cEBm",
            "Content-Type": "application/json"
        },
    })

    const response = await res.json();  //retreive the created records as json output
    console.log(response)


})
test(`Fetch the specific data`, async ({ request }) => {
    const res = await request.get(`https://dev216320.service-now.com/api/now/table/incident/${sysId}`, {
        headers: {
            "Authorization": "Basic YWRtaW46VVkybU9VZV43cEBm",
            "Content-Type": "application/json"
        },
    })
    const response = await res.json();  //retreive the created records as json output
    console.log("*************************")
    console.log(response)
})
