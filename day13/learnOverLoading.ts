class EleAction{

   click(ele:string):void

   
   click(ele:string,forceClick?:boolean):void

      click(ele:string,forceClick?:boolean):void{
  if(forceClick){
    console.log("Call the method with force Click" +ele)
  }else{
    console.log("Call the click method with only Click" +ele)
  }
   }
}
const eleClick=new EleAction();
eleClick.click("Login button")
