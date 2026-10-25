import {NextRequest,NextResponse} from "next/server";
export const runtime="nodejs";
const recipient="info@sjresponsesystems.com";
const fields={name:80,organization:120,email:160,useCase:80,challenge:700,context:400} as const;
const options=new Set(["Retail / venues","Dealerships / property","Facilities / operations","Wildlife / land","Other / exploring"]);
const response=(message:string,status:number)=>NextResponse.json({message},{status,headers:{"Cache-Control":"no-store"}});
export async function POST(request:NextRequest){
  if(!process.env.SJRS_GRAPH_TENANT_ID||!process.env.SJRS_GRAPH_CLIENT_ID||!process.env.SJRS_GRAPH_CLIENT_SECRET||!process.env.SJRS_GRAPH_SENDER)return response("Online submission is not configured. Please use email instead.",503);
  if(Number(request.headers.get("content-length")||"0")>6000)return response("Submission too large.",413);
  let raw:unknown;try{raw=await request.json()}catch{return response("Invalid submission.",400)}
  if(!raw||typeof raw!=="object"||Array.isArray(raw))return response("Invalid submission.",400);
  const data=raw as Record<string,unknown>;
  if(Object.keys(data).some(k=>!(k in fields)&&k!=="website"))return response("Invalid fields.",400);
  if(data.website)return response("Invalid submission.",400);
  const values:Record<string,string>={};
  for(const [key,max] of Object.entries(fields)){const value=data[key];if(typeof value!=="string"||value.trim().length>max||(key!=="context"&&!value.trim()))return response("Please complete all required fields.",400);values[key]=value.trim()}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)||!options.has(values.useCase))return response("Invalid contact information.",400);
  const tenant=process.env.SJRS_GRAPH_TENANT_ID!;
  try{
    const tokenResponse=await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({client_id:process.env.SJRS_GRAPH_CLIENT_ID!,client_secret:process.env.SJRS_GRAPH_CLIENT_SECRET!,scope:"https://graph.microsoft.com/.default",grant_type:"client_credentials"}),signal:AbortSignal.timeout(10000)});
    if(!tokenResponse.ok)return response("Delivery is temporarily unavailable. Please email us directly.",503);
    const token=await tokenResponse.json() as {access_token?:string};
    if(!token.access_token)return response("Delivery is temporarily unavailable.",503);
    const text=["Sentinel Vision early partner inquiry",...Object.entries(values).map(([k,v])=>`${k}: ${v}`)].join("\n\n");
    const delivery=await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(process.env.SJRS_GRAPH_SENDER!)}/sendMail`,{method:"POST",cache:"no-store",headers:{"Authorization":`Bearer ${token.access_token}`,"Content-Type":"application/json"},body:JSON.stringify({message:{subject:"Sentinel Vision — Early Partner Inquiry",body:{contentType:"Text",content:text},toRecipients:[{emailAddress:{address:recipient}}],replyTo:[{emailAddress:{address:values.email}}]},saveToSentItems:true}),signal:AbortSignal.timeout(12000)});
    if(!delivery.ok)return response("Delivery could not be confirmed. Please email us directly.",503);
    return response("Your inquiry was accepted for delivery.",200);
  }catch{return response("Delivery is temporarily unavailable. Please email us directly.",503)}
}