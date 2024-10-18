import{r as c,T as f,c as _,w as e,o as V,f as n,a as l,b as a,u as r,n as g}from"./app-DUaxyTnE.js";import{_ as v}from"./ActionMessage-CynE9vWV.js";import{_ as y}from"./FormSection-CbWQ46ZO.js";import{_ as d}from"./InputError-lqbg1omR.js";import{_ as p}from"./InputLabel-DiKbimlS.js";import{_ as P}from"./PrimaryButton-FwAC97u8.js";import{_ as u}from"./TextInput-D6m3rTYN.js";import"./SectionTitle-CSCYiTil.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},j={__name:"UpdatePasswordForm",setup($){const m=c(null),i=c(null),s=f({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),m.value.focus()),s.errors.current_password&&(s.reset("current_password"),i.value.focus())}})};return(U,o)=>(V(),_(y,{onSubmitted:w},{title:e(()=>o[3]||(o[3]=[n(" Update Password ")])),description:e(()=>o[4]||(o[4]=[n(" Ensure your account is using a long, random password to stay secure. ")])),form:e(()=>[l("div",b,[a(p,{for:"current_password",value:"Current Password"}),a(u,{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:r(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=t=>r(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),a(d,{message:r(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[a(p,{for:"password",value:"New Password"}),a(u,{id:"password",ref_key:"passwordInput",ref:m,modelValue:r(s).password,"onUpdate:modelValue":o[1]||(o[1]=t=>r(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(d,{message:r(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[a(p,{for:"password_confirmation",value:"Confirm Password"}),a(u,{id:"password_confirmation",modelValue:r(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=t=>r(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),a(d,{message:r(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[a(v,{on:r(s).recentlySuccessful,class:"mr-3"},{default:e(()=>o[5]||(o[5]=[n(" Saved. ")])),_:1},8,["on"]),a(P,{class:g({"opacity-25":r(s).processing}),disabled:r(s).processing},{default:e(()=>o[6]||(o[6]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};
