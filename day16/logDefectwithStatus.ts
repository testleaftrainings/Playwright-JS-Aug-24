import { TestInfo } from "@playwright/test";
import { createIssue } from "./Jira/JiraIntegration";

export async function logDefect(testInfo:TestInfo){
    console.log(testInfo.status)
    if(testInfo.status=="timedOut" || testInfo.status=="failed" ){
        const summary=`${testInfo.title} is failed`
        const description=`Test failed due to ${testInfo.error}`
      const issueKey=  createIssue(summary,description)
      return issueKey
        }
    
}
