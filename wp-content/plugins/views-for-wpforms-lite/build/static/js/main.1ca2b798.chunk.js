(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){},106:function(e,a,t){},108:function(e,a,t){},110:function(e,a,t){},122:function(e,a,t){},124:function(e,a,t){},126:function(e,a,t){},128:function(e,a,t){},130:function(e,a,t){},132:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(29),c=t.n(n),o=t(8),i=t(6),r=t(2),m=t(47),u=t(48),d=t(54),p=t(49),E=t(55),v=t(10),y=t(7),N=t(3),f=function(e){return s.a.createElement("option",{value:e.formId},e.label)},b=(t(62),function(e){var a=e.viewTypes.map(function(a,t){return s.a.createElement("label",{key:"viewType".concat(t)},s.a.createElement("input",{type:"radio",value:a,checked:e.viewType==a,onChange:e.onchange})," ",a.charAt(0).toUpperCase()+a.slice(1))}),t=window._view_config,l=JSON.parse(t),n="";return n="nf"===l.prefix?"https://nfviews.com/pricing/?utm_source=view-edit-page&utm_medium=nfviews-advance-settings&utm_campaign=nf-views-lite-version":"cf7"===l.prefix?"https://cf7views.com/pricing/?utm_source=view-edit-page&utm_medium=cf7views-advance-settings&utm_campaign=cf7-views-lite-version":"https://formviewswp.com/pricing/?utm_source=view-edit-page&utm_medium=wpformsviews-advance-settings&utm_campaign=wpforms-views-lite-version",s.a.createElement("div",{className:"viewSourceCont pure-form viewSectionContainer view-type"},s.a.createElement("legend",null,"Select View Type"),s.a.createElement("fieldset",null,a,s.a.createElement("label",null,s.a.createElement("input",{type:"radio",disabled:"disabled",value:""})," List"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",disabled:"disabled",value:""})," DataTable"),s.a.createElement("div",{className:"views-pro-upsell"},s.a.createElement("i",{className:"fas fa-info-circle"}),"Want to use List or DataTable View Type? ",s.a.createElement("a",{className:"pro-upsell-link",href:n,target:"_blank"},"Check out Pro Version!"),".")))}),w=function(e){return s.a.createElement("li",{className:"pure-menu-item ".concat(e.activetab==e.tabName?"viewTabActive":"")},s.a.createElement("a",{href:"#",id:e.tabName,className:"pure-menu-link",onClick:e.tabClickHandler},e.label))},g=(t(64),function(e){var a=e.fieldProps,t=e.fieldId,l=e.allFields[t].fieldSettings,n=l.useCustomLabel?l.label:e.allFields[t].label;return s.a.createElement(y.b,{type:e.sectionName,draggableId:t,index:e.index},function(l,c){var o=c.isDragging?"activeField":"";return s.a.createElement("div",Object.assign({className:"".concat(o," field")},l.draggableProps,l.dragHandleProps,{ref:l.innerRef}),n,s.a.createElement("span",{className:"close",onClick:function(l){return a.removeField(l,t,e.colId)}},s.a.createElement("i",{className:"fas fa-trash-alt"})),s.a.createElement("span",{className:"settings",onClick:function(a){return e.openModal(a,"fieldSettings","Field Settings ( ID: ".concat(e.allFields[t].formFieldId,")"),t)}},s.a.createElement("i",{className:"fas fa-cog"})))})}),C=(t(104),function(e){var a=e.columnFields.map(function(a,t){return s.a.createElement(g,{openModal:e.openModal,sectionName:e.sectionName,allFields:e.allFields,key:t,index:t,colId:e.colId,fieldId:a,fieldProps:e.fieldProps})});return s.a.createElement("div",{className:"col-cont pure-u-1 pure-u-md-"+e.size},s.a.createElement("div",{className:"column"},s.a.createElement(y.c,{type:e.sectionName,droppableId:e.colId},function(t,l){var n=l.isDraggingOver?"activeColumn":"";return s.a.createElement("div",Object.assign({className:n+" droppableColumn"},t.droppableProps,{ref:t.innerRef}),a,t.placeholder,s.a.createElement("div",{className:"view-empty-placeholder",onClick:function(a){return e.openModal(a,"addField","Add Field",e.colId,e.sectionName)}},s.a.createElement("i",{className:"fas fa-plus"})))})))}),S=(t(106),function(e){var a=e.rowColumns,t=e.sectionName,n=e.rowId,c=a.map(function(a,t){return s.a.createElement(C,{title:e.allColumns[a].title,sectionName:e.sectionName,columnFields:e.allColumns[a].fields,key:t,openModal:e.openModal,allFields:e.allFields,fieldProps:e.fieldProps,colId:a,size:e.allColumns[a].size})}),o="";return("list"==e.viewType&&"loop"==e.sectionName||"loop"!=e.sectionName)&&(o=s.a.createElement("span",null,s.a.createElement("span",{className:"view-layout view-setting-icon",onClick:function(a){return e.openModal(a,"layout","Choose Layout",n,e.sectionName)}},s.a.createElement("i",{className:"fas fa-columns"})),s.a.createElement("span",{className:"view-row-remove view-setting-icon",onClick:function(a){return e.deleteRow(a,n,t)}},s.a.createElement("i",{className:"fas fa-times"})))),s.a.createElement(l.Fragment,null,s.a.createElement(y.c,{droppableId:"row".concat(n),type:"row"},function(e){return s.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:"row pure-g"}),s.a.createElement("div",{className:"rowSettingsPanel"},o),s.a.createElement("div",{className:"columnPanel"},c),e.placeholder)}),"table"==e.viewType&&"loop"==e.sectionName&&s.a.createElement("p",null,"Each field will be displayed as a column in the table."))}),h=(t(108),function(e){var a=e.sectionRows.map(function(a,t){return s.a.createElement(S,{rowColumns:e.allRows[a].cols,sectionName:e.sectionName,key:a,rowId:a,allColumns:e.allColumns,allFields:e.allFields,viewType:e.viewType,addFieldModal:e.addFieldModal,fieldProps:e.fieldProps,addRow:e.addRow,openModal:e.openModal,deleteRow:e.deleteRow})});return s.a.createElement("div",{className:"viewSectionContainer viewTabChild"},s.a.createElement("h2",{className:"viewSecHeading"}," ",e.sectionLabel," "),a,("list"==e.viewType&&"loop"==e.sectionName||"loop"!=e.sectionName)&&s.a.createElement("span",{className:"addRow",onClick:function(a){return e.addRow(a,e.sectionName)}},s.a.createElement("span",{className:"addRowIcon"},s.a.createElement("i",{className:"fas fa-plus"}))," ",s.a.createElement("span",{className:"addRowText"},"Add Row")))}),k=function(e){var a=e.viewSettingsProps,t="";return"wpforms"===e.viewPrefix&&(t=s.a.createElement("div",null,s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("label",null,s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},s.a.createElement("input",{disabled:"disabled",name:"starred",type:"checkbox"}),s.a.createElement("span",null,"Display only Starred Entries"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("label",null,s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},s.a.createElement("input",{disabled:"disabled",name:"viewed",type:"checkbox"}),s.a.createElement("span",null,"Display only Viewed Entries"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))))),s.a.createElement("div",null,s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("span",null,"Submissions Per Page"),"\xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{name:"perPage",type:"text",value:a.viewSettings.multipleentries.perPage,onChange:function(e){return a.saveViewSetting(e,"multipleentries")}})),s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("label",null,s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},s.a.createElement("input",{disabled:"disabled",name:"loggedin",type:"checkbox"}),s.a.createElement("span",null,"Display Only Logged in User Entries"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("label",null,s.a.createElement("input",{disabled:"disabled",name:"loggedin",type:"checkbox"}),s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},s.a.createElement("span",null,"Hide View Data until search is performed"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"pure-form advance-settings-row"},s.a.createElement("label",null,s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},s.a.createElement("input",{disabled:"disabled",name:"approvedSubmissions",type:"checkbox"}),s.a.createElement("span",null,"Display only Approved Submissions"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),t)},O=function(e){var a=e.viewSettingsProps;return s.a.createElement("div",{className:"pure-form viewInlineSec"},s.a.createElement("label",{className:""},"Sort direction"),s.a.createElement("select",{name:"direction",onChange:function(e){return a.saveViewSetting(e,"sort")},value:a.viewSettings.sort.direction},s.a.createElement("option",{value:"ASC"},"ASC"),s.a.createElement("option",{value:"DESC"},"DESC")),s.a.createElement("div",{className:"pure-form viewInlineSec"},s.a.createElement("label",{className:""},"Filter"),s.a.createElement("i",{className:"fas fa-info-circle"}),s.a.createElement("a",{className:"pro-upsell-link",href:e.upsellLink,target:"_blank"},"Available in Pro Version!")))},j=(t(110),t(4)),_=(t(112),function(e){var a=e.viewSettingsProps,t=window._view_config,n=JSON.parse(t),c="";c="nf"===n.prefix?"https://nfviews.com/pricing/?utm_source=view-edit-page&utm_medium=nfviews-advance-settings&utm_campaign=nf-views-lite-version":"cf7"===n.prefix?"https://cf7views.com/pricing/?utm_source=view-edit-page&utm_medium=cf7views-advance-settings&utm_campaign=cf7-views-lite-version":"https://formviewswp.com/pricing/?utm_source=view-edit-page&utm_medium=wpformsviews-advance-settings&utm_campaign=wpforms-views-lite-version";var o=s.a.createElement(j.a,null,s.a.createElement("i",{className:"fas fa-edit"})," Edit Entry",s.a.createElement("span",{className:"pro-upsell-text"},"PRO")),i=s.a.createElement(j.c,null,s.a.createElement("div",{className:"pure-form edit-settings-row"},s.a.createElement("span",null,"Enter Edit Page Link"),"\xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{disabled:"disabled",className:"edit-entry-pagelink",name:"editPage",type:"text"}),s.a.createElement("p",{className:"description"}," Enter the page link which contains your Form. Users will be redirected to this page to edit entry"),s.a.createElement("i",{className:"fas fa-info-circle"}),s.a.createElement("a",{href:c,target:"_blank"},"Available in Pro Version!")));return"cf7"===n.prefix&&(o="",i=""),s.a.createElement("div",{className:"advanceSettingCont viewSectionContainer pure-form"},s.a.createElement(l.Fragment,null,s.a.createElement("legend",{className:"legend"},"View Settings"),s.a.createElement(j.d,null,s.a.createElement(j.b,null,s.a.createElement(j.a,null," ",s.a.createElement("i",{className:" fas fa-cog"})," View Settings"),s.a.createElement(j.a,null,s.a.createElement("i",{className:"fas fa-sort"})," Sort & Filter"),o,s.a.createElement(j.a,null,s.a.createElement("i",{className:"fas fa-table"})," DataTable",s.a.createElement("span",{className:"pro-upsell-text"},"PRO"))),s.a.createElement(j.c,null,s.a.createElement(k,{viewPrefix:n.prefix,upsellLink:c,viewSettingsProps:a})),s.a.createElement(j.c,null,s.a.createElement(O,{upsellLink:c,viewSettingsProps:a})),i,s.a.createElement(j.c,null,s.a.createElement("div",{className:"pure-form settings-row"},s.a.createElement("label",null,s.a.createElement("a",{className:"pro-upsell-link",href:c,target:"_blank"},s.a.createElement("input",{disabled:"disabled",name:"responsive",type:"checkbox"}),s.a.createElement("span",null,"Make DataTable responsive"),s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))),s.a.createElement("div",{className:"pure-form settings-row"},s.a.createElement("label",{className:""},s.a.createElement("span",null,"PDF Orientation")),s.a.createElement("select",null,s.a.createElement("option",{value:"portrait"},"Portrait"),s.a.createElement("option",{value:"landscape"},"Landscape")),s.a.createElement("a",{className:"pro-upsell-link",href:c,target:"_blank"},s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"}))),s.a.createElement("div",{className:"pure-form settings-row"},s.a.createElement("label",{className:""},s.a.createElement("span",null,"PDF Page Size")),s.a.createElement("select",null,s.a.createElement("option",{value:"A3"},"A3"),s.a.createElement("option",{value:"A4"},"A4"),s.a.createElement("option",{value:"A5"},"A5"),s.a.createElement("option",{value:"LEGAL"},"LEGAL"),s.a.createElement("option",{value:"LETTER"},"LETTER"),s.a.createElement("option",{value:"TABLOID"},"TABLOID")),s.a.createElement("a",{className:"pro-upsell-link",href:c,target:"_blank"},s.a.createElement("span",{className:"pro-upsell-text"},"PRO"),s.a.createElement("i",{className:"fas fa-external-link-alt"})))))))}),I=t(53),L=t.n(I),P=(t(122),function(e){var a=e.modalProps;return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:"layoutBody"},s.a.createElement("ul",{className:"container"},s.a.createElement("li",{className:"layout-1 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-1")}},s.a.createElement("div",{className:"layoutCol pure-u-1-1"},s.a.createElement("div",{className:"layoutColStyle"}," "))),s.a.createElement("li",{className:"layout-1-2 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-2,1-2")}},s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2"))),s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2")))),s.a.createElement("li",{className:"layout-1-3 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-3,1-3,1-3")}},s.a.createElement("div",{className:"layoutCol pure-u-1-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/3"))),s.a.createElement("div",{className:"layoutCol pure-u-1-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/3"))),s.a.createElement("div",{className:"layoutCol pure-u-1-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/3")))),s.a.createElement("li",{className:"layout-1-4 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-4,1-4,1-4,1-4")}},s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4")))),s.a.createElement("li",{className:"layout-1-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-5,1-5,1-5,1-5,1-5")}},s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5")))),s.a.createElement("li",{className:"layout-1-6 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-6,1-6,1-6,1-6,1-6,1-6")}},s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6")))),s.a.createElement("li",{className:"layout-2-5-3-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"2-5,3-5")}},s.a.createElement("div",{className:"layoutCol pure-u-2-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"2/5"))),s.a.createElement("div",{className:"layoutCol pure-u-3-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/5")))),s.a.createElement("li",{className:"layout-3-5-2-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"3-5,2-5")}},s.a.createElement("div",{className:"layoutCol pure-u-3-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/5"))),s.a.createElement("div",{className:"layoutCol pure-u-2-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"2/5")))),s.a.createElement("li",{className:"layout-1-3-2-3 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-3,2-3")}},s.a.createElement("div",{className:"layoutCol pure-u-1-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/3"))),s.a.createElement("div",{className:"layoutCol pure-u-2-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"2/3")))),s.a.createElement("li",{className:"layout-2-3-1-3 pure-g",onClick:function(e){return a.updateColumnLayout(e,"2-3,1-3")}},s.a.createElement("div",{className:"layoutCol pure-u-2-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"2/3"))),s.a.createElement("div",{className:"layoutCol pure-u-1-3"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/3")))),s.a.createElement("li",{className:"layout-1-4-3-4 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-4,3-4")}},s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-3-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/4")))),s.a.createElement("li",{className:"layout-3-4-1-4 pure-g",onClick:function(e){return a.updateColumnLayout(e,"3-4,1-4")}},s.a.createElement("div",{className:"layoutCol pure-u-3-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4")))),s.a.createElement("li",{className:"layout-1-4-1-2-1-4 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-4,1-2,1-4")}},s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4")))),s.a.createElement("li",{className:"layout-1-5-3-5-1-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-5,3-5,1-5")}},s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-3-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5")))),s.a.createElement("li",{className:"layout-1-4-1-4-1-2 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-4,1-4,1-2")}},s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2")))),s.a.createElement("li",{className:"layout-1-2-1-4-1-4 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-2,1-4,1-4")}},s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4"))),s.a.createElement("div",{className:"layoutCol pure-u-1-4"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/4")))),s.a.createElement("li",{className:"layout-1-5-1-5-3-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"1-5,1-5,3-5")}},s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-3-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/5")))),s.a.createElement("li",{className:"layout-3-5-1-5-1-5 pure-g",onClick:function(e){return a.updateColumnLayout(e,"3-5,1-5,1-5")}},s.a.createElement("div",{className:"layoutCol pure-u-3-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"3/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5"))),s.a.createElement("div",{className:"layoutCol pure-u-1-5"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/5")))),s.a.createElement("li",{className:"layout-1-6-1-6-1-6-1-2 pure-g view-layout-last-row",onClick:function(e){return a.updateColumnLayout(e,"1-6,1-6,1-6,1-2")}},s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2")))),s.a.createElement("li",{className:"layout-1-2-1-6-1-6-1-6 pure-g view-layout-last-row",onClick:function(e){return a.updateColumnLayout(e,"1-2,1-6,1-6,1-6")}},s.a.createElement("div",{className:"layoutCol pure-u-1-2"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/2"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6"))),s.a.createElement("div",{className:"layoutCol pure-u-1-6"},s.a.createElement("div",{className:"layoutColStyle"},s.a.createElement("span",{className:"layoutName"},"1/6")))))))}),x=(t(124),function(e){var a=window._view_config,t=JSON.parse(a),l=e.modalProps,n="",c=Object.keys(l.formFields).map(function(e,a){var t="";return"beforeloop"!=l.activeSection&&"afterloop"!=l.activeSection&&(t="( ID:".concat(e," )")),s.a.createElement("li",{key:"add".concat(e),onClick:function(a){return l.addField(a,e)}},l.formFields[e].label,t)});return n="nf"===t.prefix?"https://nfviews.com/pricing/?utm_source=view-edit-page&utm_medium=nfviews-field-popup&utm_campaign=nf-views-lite-version":"cf7"===t.prefix?"https://cf7views.com/pricing/?utm_source=view-edit-page&utm_medium=cf7views-field-popup&utm_campaign=cf7-views-lite-version":"https://formviewswp.com/pricing/?utm_source=view-edit-page&utm_medium=wpformsviews-field-popup&utm_campaign=wpforms-views-lite-version","beforeloop"!==l.activeSection&&"afterloop"!==l.activeSection||(c.push(s.a.createElement("li",{key:"searchWidgetField"},s.a.createElement("a",{target:"_blank",href:n},"Search",s.a.createElement("span",{className:"pro-upsell-text"},"PRO")))),c.push(s.a.createElement("li",{key:"customHTMLWidgetField"},s.a.createElement("a",{target:"_blank",href:n},"Custom HTML",s.a.createElement("span",{className:"pro-upsell-text"},"PRO")))),c.push(s.a.createElement("li",{key:"datatableWidgetField"},s.a.createElement("a",{target:"_blank",href:n},"DataTable Buttons",s.a.createElement("span",{className:"pro-upsell-text"},"PRO"))))),s.a.createElement("ul",{className:"add-fields-list"},c)}),F=(t(126),function(e){var a=e.modalProps,t=a.currentId,l=a.fieldSettings,n=function(e){var a=e.target.className;l[a]="checkbox"===e.target.type?e.target.checked:e.target.value};return s.a.createElement("div",{className:"fieldSettings pure-form pure-form-aligned"},s.a.createElement("fieldset",null,s.a.createElement("div",{className:"pure-control-group"},s.a.createElement("label",null,"  Use Custom Label?"),s.a.createElement("input",{className:"useCustomLabel",defaultChecked:l.useCustomLabel,onChange:n,type:"checkbox"})),s.a.createElement("div",{className:"pure-control-group"},s.a.createElement("label",null," Custom Label"),s.a.createElement("input",{className:"label",defaultValue:l.label,onChange:n,type:"text"})),s.a.createElement("div",{className:"pure-control-group"},s.a.createElement("label",null," Css Class"),s.a.createElement("input",{className:"customClass",defaultValue:l.customClass,onChange:n,type:"text"})),s.a.createElement("div",{className:"pure-control-group form-action-btns"},s.a.createElement("button",{className:"pure-button pure-button-primary",onClick:function(e){return a.saveFieldSettings(e,t,l)}},"Save"),s.a.createElement("button",{className:"pure-button",onClick:a.closeModal},"Cancel"))))}),T=(t(128),function(e){var a=e.modalProps,t="";return"layout"==a.type?t=s.a.createElement(P,{modalProps:e.modalProps}):"addField"==a.type?t=s.a.createElement(x,{modalProps:e.modalProps}):"fieldSettings"==a.type&&(t=s.a.createElement(F,{modalProps:e.modalProps})),s.a.createElement(L.a,{ariaHideApp:!1,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,portalClassName:"modal-portal ".concat(a.type),className:"modal-container ".concat(a.type),role:"dialog",parentSelector:function(){return document.getElementById("views-container")},isOpen:a.isVisible},s.a.createElement("div",{className:"layoutHead"},s.a.createElement("h2",{className:"layoutHeading"},a.label," "),s.a.createElement("span",{onClick:a.closeModal,className:"closeLayoutOption"},s.a.createElement("i",{className:"fas fa-times"}))),t)}),R=(t(130),function(e){function a(){var e,t;Object(m.a)(this,a);for(var l=arguments.length,s=new Array(l),n=0;n<l;n++)s[n]=arguments[n];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={env:"local",viewSource:{formId:""},viewSettings:{multipleentries:{perPage:25},singleEntry:{},filter:{},sort:{direction:"ASC"}},sections:{beforeloop:{rows:[],tabname:"multipleentries",label:"Before Submission List"},loop:{rows:[],tabname:"multipleentries",label:"Submission List"},afterloop:{rows:[],tabname:"multipleentries",label:"After Submission List"},singleloop:{rows:[],tabname:"singleentries",label:"Single Submission"}},rows:{},columns:{},fields:{},formsList:[],formFields:{},defaultFields:{pagination:{label:"Pagination",type:"pagination"},paginationInfo:{label:"Pagination Info",type:"pagination_info"}},viewTypes:["table"],viewType:"table",activeTab:"multipleentries",activeSection:"",modal:{type:"layout",label:"layout",isVisible:!1,currentId:null}},t.updateViewSource=function(e){var a=window,l=a.confirm,s=a._view_config;if(l("Are you sure want to change the View Source? This will reset all your view layout settings.")){var n=JSON.parse(s),c=Object(N.cloneDeep)(t.state.viewSource);if(c.formId=e.target.value,"production"===t.state.env){var o=window,i=o.ajaxurl,m=o.jQuery,u={action:n.prefix+"_views_get_form_fields",form_id:e.target.value},d=Object(v.a)(Object(v.a)(t));m.post(i,u,function(e){var a=Object(N.cloneDeep)(d.state.sections),t=Object(N.cloneDeep)(d.state.rows),l=Object(N.cloneDeep)(d.state.columns),s=Object(N.cloneDeep)(d.state.fields);Object.keys(a).forEach(function(e,t){a[e]=Object(r.a)({},a[e],{rows:[]})}),Object.keys(t).forEach(function(e){return delete t[e]}),Object.keys(l).forEach(function(e){return delete l[e]}),Object.keys(s).forEach(function(e){return delete s[e]});var n=JSON.parse(e),o=Object(r.a)({},n),i=d.createNewRow(a,t,l,"loop"),m=i.sections,u=i.rows,p=i.columns;d.setState({formFields:o,sections:m,rows:u,columns:p,fields:s,viewSource:c})})}else t.setState({viewSource:c})}},t.updateViewType=function(e){if((0,window.confirm)("Are you sure want to change the View Type? This will reset all your View layout settings."))if("table"==e.target.value){var a=Object(N.cloneDeep)(t.state.sections),l=Object(N.cloneDeep)(t.state.rows),s=Object(N.cloneDeep)(t.state.columns),n=Object(N.cloneDeep)(t.state.fields);a.loop.rows.forEach(function(e,a){l[e].cols.forEach(function(e){s[e].fields.forEach(function(e){delete n[e]}),delete s[e]}),delete l[e]}),a.loop.rows=[];var c=t.createNewRow(a,l,s,"loop"),o=c.sections,i=c.rows,r=c.columns;t.setState({sections:o,rows:i,columns:r,fields:n,viewType:e.target.value})}else t.setState({viewType:e.target.value})},t.addRow=function(e,a){var l=Object(N.cloneDeep)(t.state.sections),s=Object(N.cloneDeep)(t.state.rows),n=Object(N.cloneDeep)(t.state.columns),c=t.createNewRow(l,s,n,a),o=c.sections,i=c.rows,r=c.columns,m=c.newRowId,u=Object(N.cloneDeep)(t.state.modal);u.isVisible=!0,u.type="layout",u.label="Choose Layout",u.currentId=m,t.setState({sections:o,rows:i,columns:r,modal:u,activeSection:a})},t.createNewRow=function(e,a,l,s){var n=t.generateRandomId("row"),c=t.generateRandomId("column");return e[s].rows.push(n),a[n]={cols:[c]},l[c]={title:"Column",fields:[],size:"1"},{sections:e,rows:a,columns:l,newRowId:n}},t.deleteRow=function(e,a,l){var s=Object(r.a)({},t.state.sections),n=Object(r.a)({},t.state.rows),c=Object(r.a)({},t.state.columns),o=Object(r.a)({},n[a]),m=!1;o.cols.forEach(function(e,a){var t=c[e].fields;"undefined"!==typeof t&&t.length>0&&(m=!0)}),m&&alert("Can't delete this row as it contains fields"),o.cols.forEach(function(e,a){delete c[e]}),delete n[a];var u=Object(i.a)(s[l].rows);u.splice(u.indexOf(a),1),s[l]=Object(r.a)({},s[l],{rows:u}),t.setState({sections:s,rows:n,columns:c})},t.onDragEnd=function(e){var a,l=e.destination,s=e.source,n=e.draggableId,c=e.type;if(l&&"row"!==c&&(s.droppableId!==l.droppableId||s.index!==l.index)){var m="",u="";if(s.droppableId===l.droppableId){var d=Object(i.a)(t.state.columns[s.droppableId].fields);d.splice(s.index,1),d.splice(l.index,0,n),m=d,u=d}else(u=Object(i.a)(t.state.columns[s.droppableId].fields)).splice(s.index,1),(m=Object(i.a)(t.state.columns[l.droppableId].fields)).splice(l.index,0,n);var p=Object(r.a)({},t.state.columns,(a={},Object(o.a)(a,s.droppableId,Object(r.a)({},t.state.columns[s.droppableId],{fields:u})),Object(o.a)(a,l.droppableId,Object(r.a)({},t.state.columns[l.droppableId],{fields:m})),a));t.setState({columns:p})}},t.updateColumnLayout=function(e,a){a=a.split(",");var l=Object(r.a)({},t.state.modal),s=Object(r.a)({},t.state.columns),n=Object(i.a)(t.state.rows[l.currentId].cols),c=n.length,m=a.length-c;if(m>0)for(var u=0;u<m;u++){var d=t.generateRandomId("column");n.push(d),s[d]={title:"Column",fields:[],size:""}}if(m<0){for(var p=a.length;p<c;p++){var E=n[p],v=n[a.length-1];s[v]=Object(r.a)({},s[v],{fields:[].concat(Object(i.a)(s[v].fields),Object(i.a)(s[E].fields))})}n.splice(a.length,Math.abs(m))}n.forEach(function(e,t){s[e]=Object(r.a)({},s[e],{size:a[t]})});var y=Object(r.a)({},t.state.rows,Object(o.a)({},l.currentId,Object(r.a)({},t.state.rows[l.currentId],{cols:n})));l.isVisible=!1,t.setState({rows:y,columns:s,modal:l})},t.addField=function(e,a){var l=Object(r.a)({},t.state.modal),s=Object(r.a)({},t.state.fields),n=Object(r.a)({},t.state.formFields),c=l.currentId,m=t.generateRandomId("field"),u=Object(r.a)({},t.state.columns,Object(o.a)({},c,Object(r.a)({},t.state.columns[c],{fields:[].concat(Object(i.a)(t.state.columns[c].fields),[m])}))),d="";d="beforeloop"==t.state.activeSection||"afterloop"==t.state.activeSection?t.state.defaultFields[a].label:n[a].label,s[m]={formFieldId:a,label:d,fieldSettings:{useCustomLabel:!1,label:d,customClass:""}},l.isVisible=!1,t.setState({fields:s,columns:u,modal:l})},t.removeField=function(e,a,l){var s=Object(N.cloneDeep)(t.state.columns),n=Object(N.cloneDeep)(t.state.fields);delete n[a];var c=Object(N.cloneDeep)(t.state.columns[l].fields);c.splice(c.indexOf(a),1),s[l].fields.splice(s[l].fields.indexOf(a),1),t.setState({fields:n,columns:s})},t.saveFieldSettings=function(e,a,l){var s=Object(r.a)({},t.state.modal),n=Object(N.cloneDeep)(t.state.fields);n[a].fieldSettings=l,s.type="layout",s.isVisible=!1,t.setState({fields:n,modal:s})},t.saveViewSetting=function(e,a){var l=Object(N.cloneDeep)(t.state.viewSettings);l[a][e.target.name]=e.target.value,t.setState({viewSettings:l})},t.openModal=function(e,a,l,s,n){var c=Object(r.a)({},t.state.modal);c.isVisible=!0,c.type=a,c.label=l,c.currentId=s,t.setState({modal:c,activeSection:n})},t.closeModal=function(){var e=Object(r.a)({},t.state.modal);e.type="layout",e.isVisible=!1,t.setState({modal:e})},t.tabClickHandler=function(e){t.setState({activeTab:e.target.id})},t.generateRandomId=function(e){return e+Math.floor(99899*Math.random()+100)},t}return Object(E.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=window,a=e.view_forms,t=e._view_form_fields,l=e._view_saved_settings,s=e._view_config;if(a){var n={},c=JSON.parse(l),o=JSON.parse(t);if(Object(N.isEmpty)(c)||(n={formFields:o,viewSource:{formId:c.formId},sections:c.sections,columns:c.columns,fields:c.fields,rows:c.rows,activeTab:c.activeTab,viewSettings:c.viewSettings,viewType:c.viewType}),!Object(N.isEmpty)(s)){var i=JSON.parse(s);Object.keys(i).forEach(function(e,a){n[e]=i[e]})}n.formsList=JSON.parse(a),n.env="production",this.setState(n)}}},{key:"render",value:function(){var e=this;console.log(this.state);var a=JSON.stringify({formId:this.state.viewSource.formId,sections:this.state.sections,rows:this.state.rows,columns:this.state.columns,fields:this.state.fields,activeTab:this.state.activeTab,viewSettings:this.state.viewSettings,viewType:this.state.viewType}),t=this.state.modal,l={type:t.type,label:t.label,isVisible:t.isVisible,currentId:t.currentId,activeSection:this.state.activeSection,closeModal:this.closeModal};switch(t.type){case"addField":l=Object(r.a)({},l,{formFields:"beforeloop"==this.state.activeSection||"afterloop"==this.state.activeSection?this.state.defaultFields:this.state.formFields,addField:this.addField});break;case"fieldSettings":l=Object(r.a)({},l,{fieldSettings:Object(N.cloneDeep)(this.state.fields[t.currentId].fieldSettings),updateFieldSettings:this.updateFieldSettings,saveFieldSettings:this.saveFieldSettings});break;default:l=Object(r.a)({},l,{updateColumnLayout:this.updateColumnLayout})}var n={removeField:this.removeField},c={viewSettings:this.state.viewSettings,activeTab:this.state.activeTab,saveViewSetting:this.saveViewSetting},o=Object(i.a)(this.state.formsList).map(function(e,a){return s.a.createElement(f,{key:"form-".concat(e.id),formId:e.id,label:e.label})}),m=Object(r.a)({},this.state.sections),u=this.state.activeTab,d=Object.keys(m).map(function(a,t){return u===m[a].tabname?s.a.createElement(h,{sectionLabel:m[a].label,sectionName:a,sectionTabName:m[a].tabname,sectionRows:m[a].rows,key:"section".concat(t),id:t,allRows:e.state.rows,allColumns:e.state.columns,allFields:e.state.fields,viewType:e.state.viewType,addFieldModal:e.AddFieldModal,fieldProps:n,addRow:e.addRow,openModal:e.openModal,deleteRow:e.deleteRow}):null}).filter(function(e){return e});return s.a.createElement("div",null,s.a.createElement("textarea",{className:"final-view-settings",readOnly:"readonly",type:"text",value:a,name:"final_view_settings"}),s.a.createElement("div",{className:"viewSourceCont pure-form viewSectionContainer"},s.a.createElement("fieldset",null,s.a.createElement("legend",null,"Select View Source"),s.a.createElement("select",{value:this.state.viewSource.formId,onChange:this.updateViewSource,className:"view-child"},o))),s.a.createElement(b,{onchange:this.updateViewType,viewType:this.state.viewType,viewTypes:this.state.viewTypes}),s.a.createElement("div",{className:"viewSecMainCont"},s.a.createElement("ul",{className:"viewTabHeadings pure-menu-list pure-menu-horizontal"},s.a.createElement(w,{tabName:"multipleentries",tabClickHandler:this.tabClickHandler,label:"Submission List",activetab:this.state.activeTab})),s.a.createElement(y.a,{onDragEnd:this.onDragEnd},d)),s.a.createElement(_,{viewSettingsProps:c}),s.a.createElement(T,{modalProps:l}))}}]),a}(l.Component));c.a.render(s.a.createElement(R,null),document.getElementById("views-container"))},56:function(e,a,t){e.exports=t(132)},62:function(e,a,t){},64:function(e,a,t){}},[[56,2,1]]]);
//# sourceMappingURL=main.1ca2b798.chunk.js.map