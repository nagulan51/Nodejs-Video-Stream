!function(t){function e(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return t[a].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var a,n;a=[i(2),i(3),i(4)],n=function(t,e){var i=function(t,i,a){function n(t,e){var i=t.indexOf("MEDIAID");return i>0&&e?t.replace("MEDIAID",e):i===-1?t:void 0}function s(t){var e=window.location.toString();if(window.top!==window&&(e=document.referrer),i.link){var a=n(i.link,t);e=a?a:e}return e}function r(t){var e=null;if(i.code){var a=n(i.code,t);e=a?a:e}return e}function l(e){var i=t.getPlaylist()[e.index];y=s(i.mediaid),z&&(z.innerHTML=y),k=r(i.mediaid),k&&M&&(k=decodeURIComponent(k),M.innerHTML=k)}function o(t){L=!!t.active}function c(){if(x.isArray(i.sites)){var n=[];x.each(i.sites,function(t){x.isString(t)&&e[t]?n.push(e[t]):x.isObject(t)&&n.push(t)}),i.sites.indexOf("link")<0&&n.push(e.link),H=n}i.heading=x.isString(i.heading)?i.heading:"Share Video",b.addClass(a,"jw-plugin-sharing"),g(),t.on("playlistItem",l),t.addButton(void 0,i.heading,F,"share",V)}function h(){var e=d("button",["jw-icon","jw-icon-close","jw-sharing-close-icon"]),i=t.getConfig().localization||{},a=i.close||"Close";return m(e,a),new E(e).on("click tap",v),e}function d(t,e,i){var a=document.createElement(t);return e&&b.addClass(a,e?e.concat(["jw-reset"]):["jw-reset"]),i&&(i.nodeName?a.appendChild(i):a.innerHTML=i),a}function g(){i.code&&H.push(e.embed);var t=h();a.appendChild(t),j=d("div",["jw-sharing-content"]),a.appendChild(j),A=d("div",["jw-sharing-heading"],i.heading),j.appendChild(A),B=d("div",["jw-sharing-icons"]),j.appendChild(B);for(var n=0;n<H.length;n++){var s=d("div",["jw-sharing-icon-container"]),r=d("span",["jw-sharing-icon","jw-sharing-icon-"+H[n].label]);H[n].icon&&(r.style.backgroundImage='url("'+H[n].icon+'")',b.addClass(r,"jw-sharing-user-icon")),"link"===H[n].label?(z=d("textarea",["jw-sharing-textarea"]),z.setAttribute("readonly","true"),z.addEventListener("click",p),m(s,H[n].label),s.appendChild(z)):"embed"===H[n].label?(M=d("textarea",["jw-sharing-textarea"]),M.setAttribute("readonly","true"),M.addEventListener("click",u),m(s,H[n].label),s.appendChild(M)):(m(s,H[n].label),new E(r,{useHover:!0}).on("click tap",f,H[n])),s.appendChild(r),B.appendChild(s),_.push(r)}}function p(t){w(t),C("link")}function u(t){w(t),C("embed")}function w(t){t.target.select(),document.execCommand("copy")?(b.addClass(a,"jw-plugin-sharing-textarea-copied"),setTimeout(function(){b.removeClass(a,"jw-plugin-sharing-textarea-copied")},1e3)):window.prompt("Copy the text below",t.target.value),t.target.blur()}function F(e){L||U||(S=t.getState(),"playing"===S&&t.pause(),U=!0,b.addClass(a,"jw-show"),b.addClass(t.getContainer(),"jw-flag-overlay-open-sharing"),D(e))}function v(e){U&&("paused"===t.getState()&&"playing"===S&&t.play(),U=!1,b.removeClass(a,"jw-show"),b.removeClass(t.getContainer(),"jw-flag-overlay-open-sharing"),D(e))}function f(){if(x.isFunction(this.src))this.src(y);else{var t=encodeURIComponent(y),e=this.src.replace(/\[URL\]/gi,t);this.src===e&&(e=this.src+t),window.open(e,"_blank"),window.focus()}C(this.label)}function D(t){I.trigger(U?"open":"close",{visible:U,method:t?"interaction":"api"})}function C(t){I.trigger("click",{method:t})}function m(t,e){t&&e&&(t.setAttribute("aria-label",e),t.setAttribute("role","button"),t.setAttribute("tabindex","0"))}var b=t.utils,x=t._,E=b.UI;x.extend(this,t.Events);var y,k,j,A,B,z,M,S,I=this,L=!1,U=!1,_=[],H=[e.facebook,e.twitter,e.email,e.link],V="jw-sharing-dock-btn";this.open=function(t){F(t)},this.close=function(t){v(t)},t.on("ready",c),t.on("cast",o)};i.version=t.version;var a=window.jwplayerPluginJsonp||window.jwplayer().registerPlugin;a("sharing",t.minPlayerVersion,i)}.apply(e,a),!(void 0!==n&&(t.exports=n))},,function(t,e){t.exports={version:"2.0.0",minPlayerVersion:"7.0.0"}},function(t,e,i){var a,n;a=[],n=function(){var t={facebook:{label:"facebook",src:"http://www.facebook.com/sharer/sharer.php?u=[URL]"},twitter:{label:"twitter",src:"http://twitter.com/intent/tweet?url=[URL]"},googleplus:{label:"googleplus",src:"https://plus.google.com/share?url=[URL]"},linkedin:{label:"linkedin",src:"https://www.linkedin.com/cws/share?url=[URL]"},pinterest:{label:"pinterest",src:"http://pinterest.com/pin/create/button/?url=[URL]"},reddit:{label:"reddit",src:"http://www.reddit.com/submit?url=[URL]"},tumblr:{label:"tumblr",src:"http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]"},email:{label:"email",src:"mailto:?body=[URL]"},link:{label:"link"},embed:{label:"embed"}};return t}.apply(e,a),!(void 0!==n&&(t.exports=n))},function(t,e,i){var a=i(5);"string"==typeof a&&(a=[["all-players",a,""]]),i(7).style(a,"all-players"),a.locals&&(t.exports=a.locals)},function(t,e,i){e=t.exports=i(6)(),e.push([t.id,'.jw-sharing-icon-email{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%23AAB4C8%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0%200h100v100H0z%22%2F%3E%3Cg%20id%3D%22_x30_009388e-50af-4137-8185-2140a6cde635.psd%22%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M85%2024.8H15L50%2052l35-27.2zm-70%207.7v38.7c0%202.2%201.8%203.9%203.9%203.9h62.2c2.2%200%203.9-1.7%203.9-3.8V32.5L50%2059.7%2015%2032.5z%22%20id%3D%22icon-email%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-embed{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22175.5%22%20height%3D%22100%22%20viewBox%3D%22412.6%20557.2%20175.5%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M528.8%20558.4c3.9%202.3%205.3%207.2%203%2011.1L483%20653.3c-2.3%203.9-7.2%205.1-11.1%203-3.9-2.3-5.3-7.2-3-11.1l48.8-83.8c2.1-4.1%207.2-5.3%2011.1-3zM556.5%20575.2l29.2%2029.2c3.2%203.2%203.2%208.4%200%2011.6l-29.2%2029.2c-3.2%203.2-8.4%203.2-11.8%200-3.2-3.2-3.2-8.4%200-11.6l23.4-23.4-23.4-23.4c-3.2-3.2-3.2-8.4%200-11.6%203.4-3.3%208.5-3.3%2011.8%200zM455.9%20575.2c3.2%203.2%203.2%208.4%200%2011.6l-23.4%2023.4%2023.4%2023.4c3.2%203.2%203.2%208.4%200%2011.6-3.2%203.2-8.4%203.2-11.8%200L414.9%20616c-3.2-3.2-3.2-8.4%200-11.6l29.2-29.2c3.3-3.3%208.4-3.3%2011.8%200z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-facebook{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%22-477%20-120%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%233B5998%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M-477-120h100v100h-100z%22%2F%3E%3Cpath%20id%3D%22f%22%20class%3D%22st1%22%20d%3D%22M-408-20v-38.7h13l1.9-15.1H-408v-9.6c0-4.4%201.2-7.3%207.5-7.3h8v-13.5c-1.4-.2-6.1-.6-11.6-.6-11.5%200-19.4%207-19.4%2019.9v11.1h-13v15.1h13V-20h15.5z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-googleplus{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%23DD4B39%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0%200h100v100H0z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M81.4%2047.1h-5.7v-5.7H70v5.7h-5.7v5.7H70v5.7h5.7v-5.7h5.7m-42.8-5.7V54H50c-.6%202.9-3.4%208.6-11.4%208.6-6.9%200-12.3-5.7-12.3-12.6s5.4-12.6%2012.3-12.6c4%200%206.6%201.7%208%203.1l5.4-5.1C48.6%2032%2044%2030%2038.6%2030c-11.1%200-20%208.9-20%2020s8.9%2020%2020%2020c11.4%200%2019.1-8%2019.1-19.4%200-1.4%200-2.3-.3-3.4H38.6z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-link{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%2299.7%22%20viewBox%3D%220%200%20100%2099.7%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M43.6%2026.5L35.1%2018c-4.7-4.7-12.3-4.7-17%200-4.7%204.7-4.7%2012.3%200%2016.9l17%2016.9c4.7%204.7%2012.2%204.7%2016.9.1l8.5%208.5-4.2%204.2c-7%207-18.5%207-25.5%200L5.3%2039.2c-7-7-7-18.4%200-25.4l8.5-8.5c7-7%2018.5-7%2025.5%200L52.1%2018l-8.5%208.5z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M56.4%2073.2l8.5%208.5c4.7%204.7%2012.3%204.7%2017%200%204.7-4.7%204.7-12.3%200-16.9l-17-16.9c-4.7-4.7-12.2-4.7-16.9-.1l-8.5-8.5%204.2-4.2c7-7%2018.5-7%2025.5%200l25.5%2025.4c7%207%207%2018.4%200%2025.4l-8.5%208.5c-7%207-18.5%207-25.5%200L47.9%2081.7l8.5-8.5z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-linkedin{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%22-240%20-120%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%230077B5%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M-240-120h100v100h-100z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M-205.2-42.5h-11.4v-36.8h11.4v36.8zm-5.8-41.8c-3.7%200-6.6-3-6.6-6.6%200-3.7%203-6.6%206.6-6.6%203.7%200%206.6%203%206.6%206.6.1%203.7-2.9%206.6-6.6%206.6zm48.6%2041.8h-11.4v-17.9c0-4.3-.1-9.8-5.9-9.8-5.9%200-6.9%204.6-6.9%209.4v18.2H-198v-36.8h11v5h.2c1.5-2.9%205.3-5.9%2010.8-5.9%2011.6%200%2013.7%207.6%2013.7%2017.5v20.3h-.1z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-pinterest{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%20-120%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%23BD081C%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0-120h100v100H0z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M51.4-100C35-100%2026.8-88.3%2026.8-78.5c0%205.9%202.2%2011.2%207.1%2013.2.8.3%201.5%200%201.7-.9.2-.6.5-2.1.7-2.8.2-.9.1-1.2-.5-1.9-1.4-1.6-2.3-3.8-2.3-6.8%200-8.7%206.5-16.5%2017-16.5%209.3%200%2014.3%205.7%2014.3%2013.2%200%209.9-4.4%2018.3-10.9%2018.3-3.6%200-6.3-3-5.4-6.6%201-4.4%203-9.1%203-12.2%200-2.8-1.5-5.2-4.6-5.2-3.7%200-6.6%203.8-6.6%208.9%200%203.3%201.1%205.5%201.1%205.5s-3.8%2016-4.4%2018.8c-1.3%205.6-.2%2012.4-.1%2013.1.1.4.6.5.8.2.3-.4%204.7-5.9%206.2-11.3.4-1.5%202.4-9.5%202.4-9.5%201.2%202.3%204.7%204.3%208.4%204.3%2011.1%200%2018.6-10.1%2018.6-23.6-.1-10.2-8.7-19.7-21.9-19.7z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-reddit{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%23CFE3F8%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%20.st2%7Bfill%3A%23FF4500%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M0%200h100v100H0z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M60.8%2073.4c2.6-1.3%204.4-4.4%204.4-8%200-3.1-1.4-5.9-3.4-7.4.2%201.6.2%203.2.2%204.9%200%203.7-.5%207.3-1.2%2010.5zM35.8%2084v.1h8.5c-.9-1-1.7-2-2.4-3.3-.5-.1-1-.2-1.5-.2-2.6-.1-4.6%201.5-4.6%203.4zM59.6%2080.5c-.6%200-1.1.1-1.6.2-.8%201.4-1.6%202.4-2.5%203.4h8.6V84c0-1.9-2.1-3.5-4.5-3.5zM32.2%2032.1c-.6-.4-1.4-.7-2.2-.7-2.1%200-3.9%201.7-3.9%203.9%200%201.2.5%202.2%201.3%202.9.9-2.2%202.5-4.3%204.8-6.1zM73.9%2035.4c0-2.1-1.7-3.9-3.9-3.9-.9%200-1.6.3-2.3.8%202.2%201.8%203.8%203.9%204.7%206.2.9-.8%201.5-1.9%201.5-3.1z%22%2F%3E%3Cpath%20d%3D%22M75.9%2035.4c0-3.3-2.6-5.9-5.9-5.9-1.5%200-2.9.6-4%201.6-3.8-2.5-9-4.1-14.6-4.4h-2.1c-6%20.1-11.4%201.7-15.5%204.3-1-.9-2.4-1.5-3.9-1.5-3.3%200-5.9%202.6-5.9%205.9%200%202.1%201.1%204%202.8%205-.1.6-.1%201.1-.1%201.7%200%205.7%204.7%2010.7%2011.7%2013.4-3.3%201.6-5.7%205.4-5.7%209.9%200%205.1%203%209.3%207%2010.4-.2-.8-.5-1.6-.7-2.4-2.5-1.3-4.3-4.4-4.3-8%200-3.1%201.3-5.8%203.3-7.4.1-.9.2-1.7.3-2.5.6.2%201.3.5%202%20.7%202.9.9%206.2%201.4%209.6%201.4s6.7-.5%209.6-1.4c.7-.2%201.3-.4%202-.7.1.8.2%201.6.3%202.5%202%201.5%203.4%204.3%203.4%207.4%200%203.6-1.8%206.7-4.4%208-.2.8-.4%201.6-.7%202.4%204-1%207.1-5.3%207.1-10.4%200-4.5-2.4-8.3-5.7-9.9%206.9-2.7%2011.6-7.7%2011.6-13.4%200-.5%200-1.1-.1-1.6%201.7-1%202.9-3%202.9-5.1zm-4.8%206.7c0%207.4-9.5%2013.5-21.2%2013.5s-21.2-6-21.2-13.5%209.5-13.5%2021.2-13.5%2021.2%206.1%2021.2%2013.5zm-45-6.7c0-2.1%201.7-3.9%203.9-3.9.8%200%201.6.2%202.2.7-2.2%201.8-3.9%203.8-4.7%206.1-.9-.7-1.4-1.8-1.4-2.9zm41.6-3.2c.6-.5%201.4-.8%202.3-.8%202.1%200%203.9%201.7%203.9%203.9%200%201.2-.6%202.3-1.5%203-.8-2.2-2.5-4.3-4.7-6.1zM51.4%2026.6l3-9.6%208.2%201.9c0-.7.1-1.3.4-1.9l-9-2.1c-.5-.1-1%20.2-1.2.7l-3.5%2011.1h.6c.5-.1%201-.1%201.5-.1z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M38%2058c-2%201.5-3.3%204.2-3.3%207.4%200%203.6%201.8%206.7%204.3%208-.8-3.2-1.2-6.8-1.2-10.5%200-1.7.1-3.3.2-4.9zM67.6%2021.8c1.6%200%202.9-1.3%202.9-2.9S69.2%2016%2067.6%2016s-2.9%201.3-2.9%202.9c0%201.6%201.3%202.9%202.9%202.9z%22%2F%3E%3Cpath%20d%3D%22M62.8%2019c0%202.7%202.2%204.8%204.9%204.8s4.9-2.2%204.9-4.9-2.3-4.9-5-4.9c-2%200-3.7%201.2-4.5%202.9-.2.7-.3%201.4-.3%202.1zm4.8-2.9c1.6%200%202.9%201.3%202.9%202.9s-1.3%202.9-2.9%202.9-2.9-1.3-2.9-2.9%201.3-2.9%202.9-2.9z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M39.8%2062.9c0%209.8%203.2%2018.2%207.6%2021.2h4.9c4.4-3%207.6-11.4%207.6-21.2%200-2.3-.2-4.6-.5-6.7-2.9.9-6.2%201.4-9.6%201.4s-6.7-.5-9.6-1.4c-.2%202.1-.4%204.4-.4%206.7z%22%2F%3E%3Cpath%20d%3D%22M60.8%2073.4c.8-3.2%201.2-6.8%201.2-10.5%200-1.7-.1-3.3-.2-4.9-.1-.8-.2-1.7-.3-2.5-.6.2-1.3.5-2%20.7.3%202.1.5%204.4.5%206.7%200%209.8-3.2%2018.2-7.6%2021.2h-4.9c-4.4-3-7.6-11.4-7.6-21.2%200-2.3.2-4.6.5-6.7-.7-.2-1.3-.4-2-.7-.1.8-.2%201.7-.3%202.5-.2%201.6-.2%203.2-.2%204.8%200%203.7.4%207.3%201.2%2010.5.2.8.4%201.6.7%202.4.3%201%20.7%201.9%201%202.7h-.4c-3.6%200-6.5%202.5-6.5%205.5%200%20.5.1.9.2%201.4.1.4.5.7%201%20.7H64.9c.4%200%20.8-.3%201-.7.2-.5.2-1%20.2-1.4%200-3-2.9-5.5-6.5-5.5h-.5c.4-.9.7-1.8%201-2.7.2-.7.5-1.5.7-2.3zM44.3%2084.1h-8.5V84c0-1.9%202-3.5%204.5-3.5.5%200%201.1.1%201.5.2.8%201.4%201.6%202.4%202.5%203.4zm19.8%200h-8.6c.9-1%201.7-2%202.4-3.3.5-.1%201-.2%201.6-.2%202.5%200%204.5%201.6%204.6%203.5%200-.1%200%200%200%200z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M49.9%2028.6c-11.7%200-21.2%206-21.2%2013.5s9.5%2013.5%2021.2%2013.5%2021.2-6%2021.2-13.5-9.5-13.5-21.2-13.5zm-7.7%2014.2c-2%200-3.6-1.6-3.6-3.6s1.7-3.6%203.6-3.6c1.9%200%203.6%201.7%203.6%203.6s-1.6%203.6-3.6%203.6zm16.2%206.7c-1.8%201.7-4.5%202.6-8.4%202.6-3.9%200-6.6-.8-8.3-2.6-.4-.4-.4-1%200-1.4s1-.4%201.4%200c1.4%201.4%203.6%202%206.9%202%203.3%200%205.6-.7%206.9-2%20.4-.4%201-.4%201.4%200%20.5.3.5%201%20.1%201.4zm-.6-6.7c-2%200-3.6-1.6-3.6-3.6s1.7-3.6%203.6-3.6c2%200%203.6%201.7%203.6%203.6%200%202-1.6%203.6-3.6%203.6z%22%2F%3E%3Cpath%20class%3D%22st2%22%20d%3D%22M45.8%2039.3c0-2-1.6-3.6-3.6-3.6s-3.6%201.7-3.6%203.6%201.7%203.6%203.6%203.6c1.9%200%203.6-1.7%203.6-3.6zM57.8%2035.7c-2%200-3.6%201.7-3.6%203.6%200%202%201.7%203.6%203.6%203.6%202%200%203.6-1.6%203.6-3.6s-1.6-3.6-3.6-3.6z%22%2F%3E%3Cpath%20d%3D%22M58.4%2048c-.4-.4-1-.4-1.4%200-1.4%201.4-3.6%202-6.9%202-3.3%200-5.6-.7-6.9-2-.4-.4-1-.4-1.4%200s-.4%201%200%201.4c1.7%201.7%204.5%202.6%208.3%202.6%203.9%200%206.6-.8%208.3-2.6.4-.3.4-1%200-1.4z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-share{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2215%22%20height%3D%2212%22%20viewBox%3D%220%200%2015%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eshare%3C%2Ftitle%3E%3Cpath%20d%3D%22M12.5%205c-.9%200-1.6-.5-2.1-1.1l-4.9%202%203.2%201.9c.4-.5%201.1-.8%201.8-.8C11.9%207%2013%208.1%2013%209.5S11.9%2012%2010.5%2012C9.2%2012%208.2%2011%208%209.8L4%207.5c-.4.3-.9.5-1.5.5C1.1%208%200%206.9%200%205.5S1.1%203%202.5%203c.9%200%201.6.5%202.1%201.1l5.5-2.3c.3-1%201.3-1.8%202.4-1.8C13.9%200%2015%201.1%2015%202.5S13.9%205%2012.5%205z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-tumblr{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%22-360%20-120%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%2335465C%3B%7D%20.st1%7Bclip-path%3Aurl%28%23SVGID_2_%29%3Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M-360-120h100v100h-100z%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22SVGID_1_%22%20d%3D%22M-327.2-100h34.5v60h-34.5z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22SVGID_2_%22%3E%3Cuse%20xlink%3Ahref%3D%22%23SVGID_1_%22%20overflow%3D%22visible%22%2F%3E%3C%2FclipPath%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M-303.6-40c-12.7%200-17.6-9.4-17.6-16v-19.6h-6.1v-7.8c9.1-3.3%2011.3-11.5%2011.8-16.2%200-.3.3-.4.4-.4h8.8v15.3h12v9.1h-12V-57c0%202.5.9%205.9%205.5%205.9h.3c1.6%200%203.7-.5%204.8-1l2.9%208.6c-1.1%201.6-6%203.4-10.4%203.5h-.4%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-icon-twitter{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%22-120%20-120%20100%20100%22%3E%3Cstyle%3E.st0%7Bfill%3A%2355ACEE%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M-120-120h100v100h-100z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M-40-88.6c-2.2%201-4.6%201.6-7.1%201.9%202.5-1.5%204.5-3.9%205.4-6.8-2.4%201.4-5%202.4-7.8%203-2.2-2.4-5.4-3.9-9-3.9-6.8%200-12.3%205.5-12.3%2012.3%200%201%20.1%201.9.3%202.8-10.2-.5-19.3-5.4-25.4-12.9-1.1%201.8-1.7%203.9-1.7%206.2%200%204.3%202.2%208%205.5%2010.2-2-.1-3.9-.6-5.6-1.5v.2c0%206%204.2%2010.9%209.9%2012.1-1%20.3-2.1.4-3.2.4-.8%200-1.6-.1-2.3-.2%201.6%204.9%206.1%208.4%2011.5%208.5-4.2%203.4-9.5%205.3-15.3%205.3-1%200-2-.1-2.9-.2%205.4%203.5%2011.9%205.5%2018.9%205.5%2022.6%200%2035-18.8%2035-35v-1.6c2.4-1.7%204.4-3.8%206.1-6.3z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-sharing-dock-btn .jw-dock-image{background-image:url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2215%22%20height%3D%2212%22%20viewBox%3D%220%200%2015%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eshare%3C%2Ftitle%3E%3Cpath%20d%3D%22M12.5%205c-.9%200-1.6-.5-2.1-1.1l-4.9%202%203.2%201.9c.4-.5%201.1-.8%201.8-.8C11.9%207%2013%208.1%2013%209.5S11.9%2012%2010.5%2012C9.2%2012%208.2%2011%208%209.8L4%207.5c-.4.3-.9.5-1.5.5C1.1%208%200%206.9%200%205.5S1.1%203%202.5%203c.9%200%201.6.5%202.1%201.1l5.5-2.3c.3-1%201.3-1.8%202.4-1.8C13.9%200%2015%201.1%2015%202.5S13.9%205%2012.5%205z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat}.jw-plugin-sharing{-webkit-box-align:center;align-items:center;background-color:rgba(0,0,0,.75);display:none;-webkit-box-pack:center;justify-content:center;position:relative}.jwplayer .jw-overlays .jw-show.jw-plugin-sharing{width:100%;height:100%;bottom:0}.jw-plugin-sharing.jw-show{display:-webkit-box;display:flex}.jw-plugin-sharing:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-50px;padding:2px 5px;left:50%;position:absolute;text-align:center;-webkit-transform:translateY(10px);transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-plugin-sharing-textarea-copied:after{opacity:1;-webkit-transform:translateY(0);transform:translateY(0);visibility:visible}.jw-plugin-sharing .jw-sharing-close-icon{-webkit-box-align:center;align-items:center;background-position:50%;background-repeat:no-repeat;background-size:34px auto;color:#fff;cursor:pointer;display:-webkit-box;display:flex;font-size:1em;height:44px;-webkit-box-pack:center;justify-content:center;position:absolute;right:5px;text-align:right;top:5px;width:44px}.jw-plugin-sharing .jw-sharing-content{padding:0 44px}.jw-breakpoint-0 .jw-plugin-sharing .jw-sharing-content{padding:5px}.jw-plugin-sharing .jw-sharing-heading{color:#fff;margin-bottom:15px;padding:0 5px}.jw-breakpoint-0 .jw-plugin-sharing .jw-sharing-heading{display:none}.jw-plugin-sharing .jw-sharing-icons{display:-webkit-inline-box;display:inline-flex;flex-wrap:wrap}.jw-plugin-sharing .jw-sharing-icon-container{position:relative}.jw-plugin-sharing .jw-sharing-icon{background-position:50%;background-repeat:no-repeat;background-size:34px auto;cursor:pointer;display:block;height:44px;width:44px}.jw-plugin-sharing .jw-sharing-textarea{cursor:pointer;left:0;opacity:0;position:absolute;top:0;z-index:1;height:100%;width:100%}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(a[s]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&a[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){var a;a=function(t,e,i){function a(t,e){s(e,r(t))}function n(t,e){var i=d[t];if(i)if(e){var a=i[e];if(a)for(var n=0;n<a.parts.length;n+=1)a.parts[n]()}else{for(var s=Object.keys(i),r=0;r<s.length;r+=1)for(var l=i[s[r]],o=0;o<l.parts.length;o+=1)l.parts[o]();delete d[t]}}function s(t,e){for(var i=0;i<e.length;i++){var a=e[i],n=(d[t]||{})[a.id];if(n){for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(c(t,a.parts[s]))}else{for(var r=[],s=0;s<a.parts.length;s++)r.push(c(t,a.parts[s]));d[t]=d[t]||{},d[t][a.id]={id:a.id,parts:r}}}}function r(t){for(var e=[],i={},a=0;a<t.length;a++){var n=t[a],s=n[0],r=n[1],l=n[2],o={css:r,media:l};i[s]?i[s].parts.push(o):e.push(i[s]={id:s,parts:[o]})}return e}function l(t){u().appendChild(t)}function o(t){var e=document.createElement("style");return e.type="text/css",e.setAttribute("data-jwplayer-id",t),l(e),e}function c(t,e){var i,a,n,s=g[t];s||(s=g[t]={element:o(t),counter:0});var r=s.counter++;return i=s.element,a=h.bind(null,i,r,!1),n=h.bind(null,i,r,!0),a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media)return;a(e=t)}else n()}}function h(t,e,i,a){var n=i?"":a.css;if(t.styleSheet)t.styleSheet.cssText=w(e,n);else{var s=document.createTextNode(n),r=t.childNodes,l=r[e];l?t.replaceChild(s,l):t.appendChild(s)}}var d={},g={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},u=p(function(){return document.head||document.getElementsByTagName("head")[0]});i.exports={style:a,clear:n};var w=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}.call(e,i,e,t),!(void 0!==a&&(t.exports=a))}]);