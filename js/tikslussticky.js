
/* tikslus Sticky by Pushpendra Singh Chouhan : pushpendra.as400@gmail.com
version: 1.0.0
http://tikslus.com
*/

(function ($) {

//create sticky
$.fn.tikslussticky = function(options) {
var defaults = {
   
   content: '',// content can be any html or function
   bkColor: '#000',
   fontColor:'#fff',
   opacity: '0.7',
   customClass: '',
   customID: '',
   fontSize:'14',
   fontBold:true,
   stickAt:'top-left',//top-left,top-center,top-right,center-right,center-left,bottom-left,bottom-right,bottom-center,custom
   customLeft:"",
   customRight:"",
   cutomTop:"",
   customBottom:"",
   callbackPost:function(){},
   callbackPre:function(){},

   padding:'5px',
   height:'',
   width:''
    }
	
	


  // Extend our default options with those provided.
  var options = $.extend(defaults, options);
  if(options.customID==""){alert("You must assign an ID to the sticky"); return false;}
  $("body").append("<div id='"+options.customID+"' style='position:fixed;' class='sticky'></div>");
    //call the callbackPre
	//callbackPre is called before sticky creation
  if(options.callbackPre &&  typeof options.callbackPre == 'function')
		{
		options.callbackPre(undefined != arguments[0] ? arguments[0] : '');
		}

  
  //create some css styles
var styles={
'.bottom-left':"left:0px !important;bottom:0px !important;top:inherit !important;",
'.center-right':"right:0px !important;left:inherit !important;bottom:inherit !important;",
'.top-left':"top:0px;left:0px;",
'.top-center':'top:0px;bottom:inherit !important;',
'.bottom-center':'bottom:0px;top:inherit !important;right:inherit !important;',
'.top-right':'right:0px;top:0px;,left:inherit !important;bottom:inherit !important',
'.bottom-left':'bottom:0px;left:0px;right:inherit;top:inherit',
'.bottom-right':'bottom:0px;right:0px;left:inherit !important;top:inherit'

};
 
var style=""; 
$.each(styles,function(k,v){
style= style + k + "{" + v + "}";
});
  
  $("head").append("<style>"+style+"</style>");
  
    
  
 $("#"+options.customID).html(options.content);
  $("#"+options.customID).css({"zIndex":9000000,"backgroundColor":options.bkColor,"color":options.fontColor,"fontSize":options.fontSize + "px","opacity":options.opacity,"padding":options.padding });
  if(options.fontBold==true){
  $("#"+options.customID).css({"fontWeight":"Bold"});
  }
  if(options.height!=""){
  $("#"+options.customID).css({"height":options.height});
  }
  if(options.width!=""){
  $("#"+options.customID).css({"width":options.width});
  }
  
  
  var top;
  var left;


  
  switch(options.stickAt){
  case 'top-left':
  $("#"+options.customID).addClass("top-left");
  break;
  
   case 'top-center':
  left=(($(window).width() - $("#"+options.customID).outerHeight())/2) + $(window).scrollTop();
   $("#"+options.customID).css({"left":left+"px"}).addClass("top-center");
  break;
  
    case 'top-right':
   $("#"+options.customID).addClass('top-right');
    break;
  
  
  case 'center-right':
top=(($(window).height() - $("#"+options.customID).outerHeight())/2) + $(window).scrollTop();
$("#"+options.customID).addClass("center-right").css({"top":top+"px"});
  break;
  
  
  case 'center-left':
  top=(($(window).height() - $("#"+options.customID).outerHeight())/2) + $(window).scrollTop();
    $("#"+options.customID).css({"top":top+"px"}).addClass("center-left");
  break;
 
  case 'bottom-center':
left=(($(window).width() - $("#"+options.customID).width())/2) + $(window).scrollTop();

  $("#"+options.customID).addClass('bottom-center').css({"left":left+"px"});
  break;

  case 'bottom-left':
  $("#"+options.customID).addClass('bottom-left');
  break;
  case 'bottom-right':
  $("#"+options.customID).addClass('bottom-right');
  break;
   case 'custom':
  $("#"+options.customID).css({"left":options.customLeft,"bottom":options.customBottom,"top":options.customTop,"right":options.customRight});
  break;
  default:
  $("#"+options.customID).addClass("top-left"); 
   
  }
  
  
  
  //lasty add  customclass
  $("#"+options.customID).addClass(options.customClass);
  
  //call the callback
  if(options.callbackPost &&  typeof options.callbackPost == 'function')
		{
		options.callbackPost(undefined != arguments[0] ? arguments[0] : '');
		}
  
  
  
  }
  
  })(jQuery);
 
