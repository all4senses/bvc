(function ($) {

  Drupal.behaviors.bvc_addTabs = {
    attach: function (context, settings) {

        //console.log('Tabs!');
        $( ".data.tabs" ).tabs();
        
    }
  };

}(jQuery));