"use strict"

const app = {
	name:'Circle K Solutions',
	env : 'dev',
	url : function (){
		if (app.env == 'dev') {
		return '//localhost:3000';	
		}else{
			return '//circleksolutions.com';
		}
	}
}



/*
START : MATERIALIZE INITIALIZATIONS
*/

//navbar dropdown
$(".dropdown-trigger").dropdown({ hover: true });

//navbar mobile
$('.sidenav').sidenav();

//tabs
$('.tabs').tabs({
	swipeable:true
});

//feature discovery
$('.tap-target').tapTarget();

//init modal
$('.modal').modal();

//init form select
$('select').formSelect();


/*
END : MATERIALIZE INITIALIZATIONS
*/