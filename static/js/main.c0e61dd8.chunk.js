(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),i=(t(16),t(17),t(10)),c=t(4),o=t(5),u=t(7),m=t(6),d=(t(18),t(19),function(e){var a,t=null,n=null;switch(!e.valid&&e.shouldValidate&&e.touched&&(a="invalid-form1 "),!e.valid&&e.touched&&(n=r.a.createElement("p",null,"Please enter a valid ",e.valueType.toLowerCase())),e.elType){case"input":t=r.a.createElement("input",Object.assign({className:"input ".concat(a)},e.properties,{value:e.value,onChange:e.onChange}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:"input ".concat(a)},e.properties,{value:e.value,onChange:e.onChange}));break;case"select":t=r.a.createElement("select",{className:"input ".concat(a),value:e.value,onChange:e.onChange},e.properties.options.map((function(e,a){return r.a.createElement("option",{key:a,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:"input ".concat(a)},e.properties,{value:e.value,onChange:e.onChange}))}return r.a.createElement("div",{className:"inputDiv"},r.a.createElement("label",{className:"inputLabel"},e.label),t,n)}),p=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={formObj:"",form:[{id:"Name",valid:!1,validation:{required:!0,touched:!1},elType:"input",properties:{type:"text",placeholder:"Name"},value:""},{id:"Street",valid:!1,validation:{required:!0,touched:!1},elType:"input",properties:{type:"text",placeholder:"Street"},value:""},{id:"Zip Code",valid:!1,validation:{required:!0,minLength:5,touched:!1},elType:"input",properties:{type:"text",placeholder:"Zip Code"},value:""},{id:"Country",valid:!1,validation:{required:!0,touched:!1},elType:"input",properties:{type:"text",placeholder:"Country"},value:""},{id:"Email",valid:!1,validation:{required:!0,touched:!1},elType:"input",properties:{type:"email",placeholder:"Email"},value:""},{id:"Delivery",valid:!0,validation:{},elType:"select",value:"fastest",properties:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]}}],formIsValid:!1},e.inputChangeHandler=function(a,t){var n=a.target.value,r=Object(i.a)(e.state.form);r=r.map((function(a,r){return r===t&&(a.value=n,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0),a}));var l=!0;l=e.state.form.every((function(e){return e.valid&&l})),e.setState({form:r,formIsValid:l})},e.submitHandler=function(a){a.preventDefault();var t=e.state.form.reduce((function(e,a,t){return e[a.id]=a.value,e}),{});e.setState({formObj:t}),console.log(t)},e}return Object(o.a)(t,[{key:"checkValidity",value:function(e,a){var t=!0;return a.required&&(t=""!==e.trim()&&t),a.minLength&&(t=e.length>=a.minLength&&t),t}},{key:"render",value:function(){var e=this,a=this.state.form.map((function(a,t){return r.a.createElement(d,{key:t,elType:a.elType,value:a.value,properties:a.properties,onChange:function(a){return e.inputChangeHandler(a,t)},valid:a.valid,shouldValidate:a.validation,touched:a.touched,valueType:a.id})}));return r.a.createElement("form",{className:"form1-body",onSubmit:function(a){return e.submitHandler(a)}},r.a.createElement("p",{className:"form1-create-account"},"create account"),a,r.a.createElement("button",{className:"form1Btn",disabled:!this.state.formIsValid},"Join the crew!"))}}]),t}(n.Component),v=(t(20),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={submitted:!1},n.displayHandler=function(e){var a=e.target.name;"username"===a&&(document.querySelector(".form2-body-username-req").style.display="block"),"password"===a&&(document.querySelector(".form2-body-password-req").style.display="block")},n.blurHandler=function(e){var a=e.target.name;"username"===a&&(document.querySelector(".form2-body-username-req").style.display="none"),"password"===a&&(document.querySelector(".form2-body-password-req").style.display="none")},n.inputHandler=function(e){var a=e.target,t=a.value,n=a.name,r={special:document.querySelector(".special"),upperUsr:document.querySelector(".upper-usr"),consNum:document.querySelector(".consNum"),sixLength:document.querySelector(".sixLength")},l={lowerPsw:document.querySelector(".lower-psw"),upperPsw:document.querySelector(".upper-psw "),oneNum:document.querySelector(".oneNum"),eightLength:document.querySelector(".eightLength")};"username"===n&&(t.search(/[!@#$%^&*()?]/g)>=0?(r.special.classList.add("valid"),r.special.classList.remove("invalid")):(r.special.classList.remove("valid"),r.special.classList.add("invalid")),t.search(/[A-Z]/g)>=0?(r.upperUsr.classList.add("valid"),r.upperUsr.classList.remove("invalid")):(r.upperUsr.classList.remove("valid"),r.upperUsr.classList.add("invalid")),t.search(/\d\d/g)>=0?(r.consNum.classList.add("valid"),r.consNum.classList.remove("invalid")):(r.consNum.classList.remove("valid"),r.consNum.classList.add("invalid")),t.length>5?(r.sixLength.classList.add("valid"),r.sixLength.classList.remove("invalid")):(r.sixLength.classList.remove("valid"),r.sixLength.classList.add("invalid"))),"password"===n&&(t.search(/[a-z]/g)>=0?(l.lowerPsw.classList.add("valid"),l.lowerPsw.classList.remove("invalid")):(l.lowerPsw.classList.remove("valid"),l.lowerPsw.classList.add("invalid")),t.search(/[A-Z]/g)>=0?(l.upperPsw.classList.add("valid"),l.upperPsw.classList.remove("invalid")):(l.upperPsw.classList.remove("valid"),l.upperPsw.classList.add("invalid")),t.search(/\d/g)>=0?(l.oneNum.classList.add("valid"),l.oneNum.classList.remove("invalid")):(l.oneNum.classList.remove("valid"),l.oneNum.classList.add("invalid")),t.length>7?(l.eightLength.classList.add("valid"),l.eightLength.classList.remove("invalid")):(l.eightLength.classList.remove("valid"),l.eightLength.classList.add("invalid")))},n.submitForm=function(e){e.preventDefault();var a={fullName:n.fullNameRef.current.value,username:n.usernameRef.current.value,password:n.passwordRef.current.value,email:n.emailRef.current.value};console.log(a),n.setState({submitted:!0})},n.fullNameRef=r.a.createRef(),n.usernameRef=r.a.createRef(),n.passwordRef=r.a.createRef(),n.emailRef=r.a.createRef(),n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.submitForm,className:"form2-body"},!this.state.submitted&&r.a.createElement("div",{className:"form2-body-div"},r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Sign Up")),r.a.createElement("label",{htmlFor:"full-name",className:"form2-body-label"},"Full Name"),r.a.createElement("br",null),r.a.createElement("input",{id:"full-name",type:"text",className:"form2-body-input",required:!0,pattern:"(?=.*[a-zA-Z]).{1,}",title:"Name cannot be empty",ref:this.fullNameRef}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username",name:"username",className:"form2-body-label"},"Username"),r.a.createElement("br",null),r.a.createElement("input",{onChange:function(a){return e.inputHandler(a)},onBlur:function(a){return e.blurHandler(a)},onFocus:function(a){return e.displayHandler(a)},id:"username",name:"username",type:"text",className:"form2-body-input",required:!0,pattern:"(?=.*[!@#$%^&*()?])(?=.*\\d\\d)(?=.*[A-Z]).{6,}",title:"Username must contain a special character (!@#$%^&*()?), an uppercase letter, two consecutive numbers, and at least 6 characters",ref:this.usernameRef}),r.a.createElement("br",null),r.a.createElement("div",{className:"form2-body-username-req"},r.a.createElement("p",{className:"special invalid"},"Must contain a special character (!@#$%^&*()?)"),r.a.createElement("p",{className:"upper-usr invalid"},"Must contain an uppercase letter"),r.a.createElement("p",{className:"consNum invalid"},"Must contain two consecutive numbers"),r.a.createElement("p",{className:"sixLength invalid"},"Must contain at least 6 characters")),r.a.createElement("label",{htmlFor:"password-form2",className:"form2-body-label"},"Password"),r.a.createElement("br",null),r.a.createElement("input",{onChange:function(a){return e.inputHandler(a)},onBlur:function(a){return e.blurHandler(a)},onFocus:function(a){return e.displayHandler(a)},id:"password-form2",name:"password",type:"password",className:"form2-body-input",required:!0,pattern:"(?=.*[a-z])(?=.*\\d)(?=.*[A-Z]).{8,}",title:"Password must contain one lowercase letter, one uppercase letter, one number, and at least 8 characters",ref:this.passwordRef}),r.a.createElement("br",null),r.a.createElement("div",{className:"form2-body-password-req"},r.a.createElement("p",{className:"lower-psw invalid"},"Must contain an lowercase letter"),r.a.createElement("p",{className:"upper-psw invalid"},"Must contain an uppercase letter"),r.a.createElement("p",{className:"oneNum invalid"},"Must contain a number"),r.a.createElement("p",{className:"eightLength invalid"},"Must contain at least 8 characters")),r.a.createElement("label",{htmlFor:"email-form2",className:"form2-body-label"},"Email"),r.a.createElement("br",null),r.a.createElement("input",{id:"email-form2",type:"email",className:"form2-body-input",required:!0,ref:this.emailRef}),r.a.createElement("br",null),r.a.createElement("button",{className:"form2-body-btn",type:"submit"},"Submit")),this.state.submitted&&r.a.createElement("div",{className:"submitted-form2-div"},r.a.createElement("p",null,"fullName: ",this.fullNameRef.current.value),r.a.createElement("p",null,"username: ",this.usernameRef.current.value),r.a.createElement("p",null,"password: ",this.passwordRef.current.value),r.a.createElement("p",null,"email: ",this.emailRef.current.value)))}}]),t}(n.Component)),f=t(1),h=(t(21),function(){var e=Object(n.useState)(1),a=Object(f.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(""),i=Object(f.a)(s,2),c=i[0],o=i[1],u=Object(n.useState)(""),m=Object(f.a)(u,2),d=m[0],p=m[1],v=Object(n.useState)(""),h=Object(f.a)(v,2),b=h[0],y=h[1],g=Object(n.useState)(""),E=Object(f.a)(g,2),N=E[0],L=E[1],w=Object(n.useState)(""),q=Object(f.a)(w,2),C=q[0],S=q[1],j=Object(n.useState)(""),O=Object(f.a)(j,2),x=O[0],R=O[1],k=Object(n.useState)(""),P=Object(f.a)(k,2),H=P[0],F=P[1],T=Object(n.useState)(""),A=Object(f.a)(T,2),V=A[0],M=A[1],U=Object(n.useState)(""),_=Object(f.a)(U,2),Z=_[0],I=_[1],z=Object(n.useState)(!1),B=Object(f.a)(z,2),$=B[0],D=B[1],J=function(e){var a=e.target.name;"next"===a&&l((function(e){return e+1})),"previous"===a&&l((function(e){return e-1}))};return Object(n.useEffect)((function(){var e=document.querySelector(".c1"),a=document.querySelector(".c2"),n=document.querySelector(".c3");1===t&&(e.classList.add("active"),e.classList.remove("good"),a.classList.remove("active"),a.classList.add("inactive"),a.classList.remove("good"),n.classList.remove("active"),n.classList.add("inactive")),2===t&&(e.classList.remove("active"),e.classList.add("good"),a.classList.add("active"),a.classList.remove("inactive"),a.classList.remove("good"),n.classList.remove("active"),n.classList.add("inactive")),3===t&&(e.classList.remove("active"),e.classList.add("good"),a.classList.remove("active"),a.classList.remove("inactive"),a.classList.add("good"),n.classList.add("active"),n.classList.remove("inactive"))}),[t]),r.a.createElement("form",{className:"form3-body"},$&&r.a.createElement("div",{className:"form3-success"}," Registration Successful"),!$&&r.a.createElement("h1",{className:"center"},"Registration Form"),1!==t||$?null:r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Personal Information"),r.a.createElement("input",{type:"text",className:"form3-input",id:"form3_fname",placeholder:"First Name",required:!0,onChange:function(e){return o(e.target.value)},value:c}),r.a.createElement("input",{type:"text",className:"form3-input",id:"form3_lname",placeholder:"Last Name",required:!0,onChange:function(e){return p(e.target.value)},value:d}),r.a.createElement("input",{type:"number",className:"form3-input",id:"form3_age",placeholder:"Age",required:!0,onChange:function(e){return y(e.target.value)},value:b}),c.length>0&&d.length>0&&b>9?r.a.createElement("div",{className:"form3-body-btn"},r.a.createElement("button",{onClick:function(e){return J(e)},name:"next"},"Next")):null),2!==t||$?null:r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Location"),r.a.createElement("input",{type:"text",className:"form3-input",id:"form3_city",placeholder:"Current City / Town",required:!0,onChange:function(e){return L(e.target.value)},value:N}),r.a.createElement("input",{type:"text",className:"form3-input",id:"form3_state",placeholder:"State",required:!0,onChange:function(e){return S(e.target.value)},value:C}),r.a.createElement("input",{type:"zip",className:"form3-input",id:"form3_zip",placeholder:"Zip Code",required:!0,onChange:function(e){return R(e.target.value)},value:x}),N.length>0&&C.length>0&&x.length>=5?r.a.createElement("div",{className:"form3-body-btn"},r.a.createElement("button",{onClick:function(e){return J(e)},name:"previous"},"Previous"),r.a.createElement("button",{onClick:function(e){return J(e)},name:"next"},"Next")):null),3!==t||$?null:r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Account Information"),r.a.createElement("input",{type:"text",className:"form3-input",id:"form3_usr",placeholder:"Username",required:!0,onChange:function(e){return F(e.target.value)},value:H}),r.a.createElement("input",{type:"password",className:"form3-input",id:"form3_psw",placeholder:"Password",required:!0,onChange:function(e){return M(e.target.value)},value:V}),r.a.createElement("input",{type:"password",className:"form3-input",id:"form3_pswConf",placeholder:"Confirm Password",required:!0,onChange:function(e){return I(e.target.value)},value:Z}),H.length>0&&V.length>0&&V===Z?r.a.createElement("div",{className:"form3-body-btn"},r.a.createElement("button",{onClick:function(e){return J(e)},name:"previous"},"Previous"),r.a.createElement("button",{onClick:function(e){D(!0)}},"Submit")):null),!$&&r.a.createElement("div",{className:"div-circle"},r.a.createElement("span",{className:"circle c1"},"\xa0"),r.a.createElement("span",{className:"circle c2"},"\xa0"),r.a.createElement("span",{className:"circle c3"},"\xa0")))});var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.c0e61dd8.chunk.js.map