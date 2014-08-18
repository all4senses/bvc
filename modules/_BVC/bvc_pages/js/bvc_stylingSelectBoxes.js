(function ($) {

  Drupal.behaviors.bvc_stylingSelectBoxes = {
    attach: function (context, settings) {
      
      
        // Styling select forms

        //$('select').selectmenu();
        $('#edit-field-ref-provider select').selectmenu({
          //style:'popup', 
          maxHeight: 300
  			});
        
      
    
    }
  };

}(jQuery));