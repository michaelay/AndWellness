var mwf=new function(){};

mwf.desktop=new function(){};
mwf.touch=new function(){};
mwf.webkit=new function(){};
mwf.iphone=new function(){};

mwf.ext=new function(){};
mwf.ext.desktop=new function(){};
mwf.ext.touch=new function(){};
mwf.ext.webkit=new function(){};
mwf.ext.iphone=new function(){};

mwf.util=new function(){
    this.importJS=function(jsFile){document.write('<script type="text/javascript" src="'+jsFile+'"></scr'+'ipt>');}
};
mwf.site=new function(){
    this.webroot=function(){return 'http://m.ucla.edu';}
    this.frontpage=function(){return 'http://m.ucla.edu/index.php';}
    this.webassetroot=function(){return 'http://m.ucla.edu/assets';}
    this.domain=function(){
        var temppath = document.URL;
        if(temppath.search('http://') == 0)
            temppath = temppath.substring(7, temppath.length);
        if(temppath.search('/') > -1)
            temppath = temppath.substring(0, temppath.search('/'));
        return temppath;
    }
};
document.write('<script type="text/javascript" src="http://m.ucla.edu/assets/redirect/js_unset_override.php"></scr'+'ipt>'); mwf.browser = new function() {
    this.pageWidth=function(){return window.innerWidth != null? window.innerWidth : document.documentElement && document.documentElement.clientWidth ?       document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;}
    this.pageHeight=function(){return  window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ?  document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;}
    this.posLeft=function(){return typeof window.pageXOffset != 'undefined' ? window.pageXOffset :document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ? document.body.scrollLeft : 0;}
    this.posTop=function(){return typeof window.pageYOffset != 'undefined' ?  window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;}
    this.posRight=function(){return mwf.browser.posLeft()+mwf.browser.pageWidth();}
    this.posBottom=function(){return mwf.browser.posTop()+mwf.browser.pageHeight();}
};

document.cookie='uclamob_bw='+mwf.browser.pageWidth()+';path=/';
document.cookie='uclamob_bh='+mwf.browser.pageHeight()+';path=/'; var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-423028-28"]);_gaq.push(["_trackPageview"]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})(); 
mwf.user_agent = new function() {
    this.is_mobile=function(){ return 1; }
    this.is_touch=function(){ return 0; }
    this.is_webkit=function(){ return 0; }
    this.is_iphone_os=function(){ return 0; }
    this.is_overridden=function(){ return 0; }
    this.is_preview=function(){ return 0; }
    this.is_webkit_engine=function(){ return 0; }
};document.write('<link rel="shortcut icon" href="http://m.ucla.edu/favicon.ico" />');