(function(){
  'use strict';

  $(document).ready(function(){
    $('#appContainer').html(JST.menu());
    $('#appContainer').append(JST.checkoutbox());
  });
})();
