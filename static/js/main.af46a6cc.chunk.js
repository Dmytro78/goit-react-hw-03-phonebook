(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=(n(17),n(12)),o=n(3),u=n(4),l=n(6),b=n(5),m=n(7),j=n.n(m),d=n(0);function h(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsx)("ul",{className:j.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(d.jsxs)("li",{className:j.a.listItem,children:["".concat(e,": ").concat(a),Object(d.jsx)("button",{className:j.a.btn,type:"button",onClick:function(){return n(c)},children:"delete"})]},c)}))})}var f=n(21),p=n(11),O=n(2),C=n.n(O),v=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.submit=function(e){e.preventDefault(),t.reset(),t.props.onSubmit(t.state)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.submit,className:C.a.form,children:[Object(d.jsxs)("label",{className:C.a.label,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",className:C.a.input,value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:C.a.label,children:["Phone",Object(d.jsx)("input",{type:"tel",name:"number",className:C.a.input,value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",className:C.a.button,children:"Submit"})]})}}]),n}(a.Component),x=function(t){var e=t.filterInput,n=t.filterValue;return Object(d.jsx)("label",{children:Object(d.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})})},g=n(9),_=n.n(g),y=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(f.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(f.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(f.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(f.a)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(n," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"));else{var c={name:n,number:a,id:Object(f.a)()};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:_.a,children:"Phonebook"}),Object(d.jsx)(v,{onSubmit:this.addContact}),Object(d.jsx)("h2",{className:_.a,children:"Contacts"}),Object(d.jsx)(x,{value:t,onChange:this.changeFilter}),Object(d.jsx)(h,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__2zpua",button:"Form_button__SLP99"}},7:function(t,e,n){t.exports={list:"ContactList_list__11_1A",listItem:"ContactList_listItem__2FDC4"}},9:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.af46a6cc.chunk.js.map