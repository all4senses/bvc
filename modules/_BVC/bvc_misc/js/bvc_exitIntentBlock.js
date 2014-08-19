(function ($) {


  // http://stackoverflow.com/questions/1617757/detect-when-mouse-leaves-via-top-of-page-with-jquery

  Drupal.behaviors.bvc_exitIntentBlock = {
    attach: function (context, settings) {
       
        var done = null;
       
        $(document).bind("mouseleave", function(e)
        {
            console.log(e.pageY);
            
            //if (!done && e.pageY <= 1)
            if (!done && e.pageY - $(window).scrollTop() <= 1)
            {    
                done = true;
                //now = new Date();           
                //for (i=0; i < times.length; i++)
                {
                    //if (now.getTime() > times[i][0] && now.getTime() < times[i][1])
                    {
                        //$.fn.colorbox({iframe:true, width:650, height:600, href: "get-popup-on-exit-intent", open: true});  
                        $.fn.colorbox({iframe:true, width:650, height:600, href: 'get/iframe/business-voip-chart', open: true});  
                        
                        //alert('test');
                    }    
                }
            }
        });
       
       
    }
  };

}(jQuery));