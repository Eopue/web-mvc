/**
 * Created by Chaohong.Mao on 2016/12/6.
 */
!function(){"use strict";function e(){return{restrict:"A",require:"?ngModel",scope:{config:"=?ngIpConfig"},link:function(e,i,r,n){function t(e){e?(c="boolean"==typeof e.requirePort&&e.requirePort,s=c||"boolean"==typeof e.allowPort&&e.allowPort):(s=!1,c=!1),s||!n.$viewValue?n.$parsers[0](n.$viewValue):n.$setViewValue(n.$viewValue.replace(g,""))}function l(e){(e.which<46&&0!==e.which&&8!=e.which&&13!=e.which||47==e.which||e.which>58||58==e.which&&!s)&&e.preventDefault()}function a(e){if(!e)return n.$setValidity("ipAddress",!0),e;f=i[0].selectionStart;var r=!0,t=null;e=e.replace(p,""),e=e.replace(u,".");var l=e.split("."),a=l.length;4>a?r=!1:a>4&&(l.length=4,a=4);for(var h=0;a>h;h++){var d=l[h];if(s)if(3>h)d=d.replace(g,"");else if(d=d.replace(w,""),-1!=d.indexOf(":")){var v=d.split(":");d=v[0],t=v[1].replace(o,"").substring(0,5),(!t||t>65535)&&(r=!1)}else c&&(r=!1);d.length>1?(d=d.replace(o,"").substring(0,3),d>255&&(r=!1)):d||(r=!1),l[h]=d}return e=l.join("."),null!==t&&(e+=":"+t),n.$setValidity("ipAddress",r),n.$setViewValue(e),n.$render(),i[0].setSelectionRange(f,f),e}if(n){var s=!1,c=!1,o=new RegExp("^0","g"),p=new RegExp("^\\.","g"),u=new RegExp("\\.\\.+","g"),g=new RegExp(":","g"),w=new RegExp("^:","g"),f=0;e.$watchCollection("config",t),i.bind("keypress",l),n.$parsers.push(a)}}}}angular.module("ng-ip-address",[]).directive("ngIpAddress",e)}();