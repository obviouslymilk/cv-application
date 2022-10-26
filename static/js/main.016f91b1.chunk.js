(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},16:function(e,a,n){},18:function(e,a,n){},20:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(3),o=n.n(r),i=n(1);var c=function(e){var a=e.title,n=e.children;return l.a.createElement("section",null,l.a.createElement("h2",null,a),n)};var d=function(e){var a=e.type,n=e.name,t=e.onChange,r=e.value,o=e.placeholder;return l.a.createElement("input",{type:a,name:n,onChange:t,value:r,placeholder:o})};var u=function(e){var a=e.data,n=a.from,t=a.to,r=a.position,o=a.company,i=a.location,c=e.onChange;return l.a.createElement("div",{id:e.id,className:"instance"},l.a.createElement(d,{type:"text",name:"from",placeholder:"From",value:n,onChange:c}),l.a.createElement(d,{type:"text",name:"to",placeholder:"To",value:t,onChange:c}),l.a.createElement(d,{type:"text",name:"position",placeholder:"Position",value:r,onChange:c}),l.a.createElement(d,{type:"text",name:"company",placeholder:"Company Name",value:o,onChange:c}),l.a.createElement(d,{type:"text",name:"location",placeholder:"Location",value:i,onChange:c}),l.a.createElement("button",{onClick:e.onDelete},"Delete"))};var m=function(e){var a=e.data.map(function(a){return l.a.createElement(u,{key:a.id,id:a.id,data:a,onChange:e.onChange,onDelete:e.onDelete})});return l.a.createElement(c,{title:"Experience"},a,l.a.createElement("button",{onClick:e.onAdd,className:"add"},"Add"))};var p=function(e){var a=e.info,n=a.firstName,t=a.lastName,r=a.title,o=a.adress,i=a.phone,u=a.email,m=a.desc;return l.a.createElement(c,{title:"Personal information"},l.a.createElement(d,{type:"text",placeholder:"First Name",name:"firstName",value:n,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"Last Name",name:"lastName",value:t,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"Title",name:"title",value:r,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"Adress",name:"adress",value:o,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"Phone Number",name:"phone",value:i,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"E-mail",name:"email",value:u,onChange:e.onChange}),l.a.createElement(d,{type:"text",placeholder:"Description",name:"desc",value:m,onChange:e.onChange}))};var h=function(e){var a=e.data,n=a.from,t=a.to,r=a.title,o=a.location,i=e.onChange;return l.a.createElement("div",{id:e.id,className:"instance"},l.a.createElement(d,{type:"text",name:"from",placeholder:"From",value:n,onChange:i}),l.a.createElement(d,{type:"text",name:"to",placeholder:"To",value:t,onChange:i}),l.a.createElement(d,{type:"text",name:"title",placeholder:"Degree",value:r,onChange:i}),l.a.createElement(d,{type:"text",name:"location",placeholder:"University",value:o,onChange:i}),l.a.createElement("button",{onClick:e.onDelete},"Delete"))};var s=function(e){var a=e.data.map(function(a){return l.a.createElement(h,{key:a.id,id:a.id,data:a,onChange:e.onChange,onDelete:e.onDelete})});return l.a.createElement(c,{title:"Education"},a,l.a.createElement("button",{onClick:e.onAdd,className:"add"},"Add"))};n(14);var E=function(e){return l.a.createElement("div",{id:"CVForm"},l.a.createElement(p,{info:e.personal,onChange:e.handlePersonalChange}),l.a.createElement(m,{data:e.experience,onChange:e.handleExperienceChange,onAdd:e.handleExperienceAdd,onDelete:e.handleExperienceDelete}),l.a.createElement(s,{data:e.education,onChange:e.handleEducationChange,onAdd:e.handleEducationAdd,onDelete:e.handleEducationDelete}))};var v=function(e){var a=e.data;return l.a.createElement("div",{className:"instance-preview"},l.a.createElement("p",null,a.from," - ",a.to),l.a.createElement("div",null,l.a.createElement("h4",null,a.title,", ",a.location)))};var f=function(e){var a=e.data.map(function(e){return l.a.createElement(v,{key:e.id,id:e.id,data:e})});return l.a.createElement(c,{title:"Education"},a)};var g=function(e){var a=e.data;return l.a.createElement("div",{className:"instance-preview"},l.a.createElement("p",null,a.from," - ",a.to),l.a.createElement("div",null,l.a.createElement("h4",null,a.position),l.a.createElement("p",null,a.company,", ",a.location)))};var C=function(e){var a=e.data.map(function(e){return l.a.createElement(g,{key:e.id,id:e.id,data:e})});return l.a.createElement(c,{title:"Experience",id:"experience"},a)};var x=function(e){var a=e.personal;return l.a.createElement("section",{className:"personal"},l.a.createElement("h1",null,a.firstName," ",a.lastName),l.a.createElement("h2",null,a.title),l.a.createElement("div",null,l.a.createElement("strong",null,"Adress")," ",a.adress),l.a.createElement("div",null,l.a.createElement("strong",null,"Phone")," ",a.phone),l.a.createElement("div",null,l.a.createElement("strong",null,"E-mail")," ",a.email),l.a.createElement("p",null,a.desc))};n(16);var y=function(e){return l.a.createElement("div",{id:"CVPreview"},l.a.createElement(x,{personal:e.personal}),l.a.createElement(C,{data:e.experience}),l.a.createElement(f,{data:e.education}))};var b=function(e){return l.a.createElement("main",null,l.a.createElement(E,{personal:e.personal,experience:e.experience,education:e.education,handlePersonalChange:e.handlePersonalChange,handleEducationChange:e.handleEducationChange,handleEducationAdd:e.handleEducationAdd,handleEducationDelete:e.handleEducationDelete,handleExperienceChange:e.handleExperienceChange,handleExperienceAdd:e.handleExperienceAdd,handleExperienceDelete:e.handleExperienceDelete}),l.a.createElement(y,{personal:e.personal,experience:e.experience,education:e.education}))},D=n(21),N={personal:{firstName:"John",lastName:"Doe",title:"Fullstack Web Developer",adress:"Coolname St. 12a",phone:"1234567890",email:"johndoe@email.com",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},experience:[{id:Object(D.a)(),from:"2013",to:"2015",position:"Junior Web Developer",company:"Some Hospital",location:"MD"},{id:Object(D.a)(),from:"2016",to:"2018",position:"Junior Project Manager",company:"Web Company",location:"NY"}],education:[{id:Object(D.a)(),from:"1999",to:"2005",title:"Master of Computer Science",location:"University of Maryland"},{id:Object(D.a)(),from:"2008",to:"2010",title:"Master of Game Design",location:"University of Maryland"}]};n(18);var A=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"CV Editor"))};var j=function(){return l.a.createElement("footer",null,l.a.createElement("a",{href:"https://github.com/obviouslymilk/cv-application"},"GitHub"))};var O=function(){var e=Object(t.useState)(N.personal),a=Object(i.a)(e,2),n=a[0],r=a[1],o=Object(t.useState)(N.experience),c=Object(i.a)(o,2),d=c[0],u=c[1],m=Object(t.useState)(N.education),p=Object(i.a)(m,2),h=p[0],s=p[1];function E(e){return Array.from(e)}return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement(b,{personal:n,experience:d,education:h,handlePersonalChange:function(e){var a,t=e.target,l=t.name,o=t.value,i=(a=n,Object.assign({},a));i[l]=o,r(i)},handleEducationChange:function(e){var a=e.target,n=a.name,t=a.value,l=e.target.parentElement.id,r=h.indexOf(h.find(function(e){return e.id===l})),o=E(h);o[r][n]=t,s(o)},handleEducationAdd:function(){var e=E(h);e.push({id:Object(D.a)(),from:"",to:"",title:"",location:""}),s(e)},handleEducationDelete:function(e){var a=e.target.parentElement.id,n=E(h);n=n.filter(function(e){return e.id!==a}),s(n)},handleExperienceChange:function(e){var a=e.target,n=a.name,t=a.value,l=e.target.parentElement.id,r=d.indexOf(d.find(function(e){return e.id===l})),o=E(d);o[r][n]=t,u(o)},handleExperienceAdd:function(){var e=E(d);e.push({id:Object(D.a)(),from:"",to:"",position:"",company:"",location:""}),u(e)},handleExperienceDelete:function(e){var a=e.target.parentElement.id,n=E(d);n=n.filter(function(e){return e.id!==a}),u(n)}}),l.a.createElement(j,null))};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)))},5:function(e,a,n){e.exports=n(20)}},[[5,2,1]]]);
//# sourceMappingURL=main.016f91b1.chunk.js.map