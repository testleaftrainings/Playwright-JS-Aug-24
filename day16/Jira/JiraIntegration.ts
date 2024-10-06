
//Endpoint
//api username
//api Key
//projeck key

import axios from "axios"

//npm install axios
const url="https://vidya-bharathi.atlassian.net/rest/api/2/issue"
const userId="vidyar1926@gmail.com"
const apiKey="ATATT3xFfGF0TSalhYW6UDGIkc_o5H6Vde8jIeU92Vn-pRWO6ItFmYto5InIsFcl5cAvazlx-JbX66187A05pjKnuVouUqX2JB6PvXPoU59pKxkV-IHN8OF7KcH4riRXj9kxFKaZgqImC1otv6ID8tSV6Pyy0eOYMsXTpMkvftOT6OcPAnIHoo8=1DD53F22"

async function createIssue(summary:string,desc:string){
    const issueBody={        
            "fields":{
                "project":{
                    "key":"PWAUG"
                },
                "summary":summary,
                "description":desc,
                "issuetype":{
                    "name":"Bug"
                }
            }
        
    }

    const resp= await axios.post(url,issueBody,{
        headers:{
            "Content-Type":"application/json"
        },
        auth:{
            username:userId,
            password:apiKey
        }
    })

    console.log(resp.status)
    return resp.data.key
}

//createIssue("Creating issue through axios","Learning to integrate api with PW")

export {createIssue}