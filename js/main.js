
  $(document).ready(function() {

    $('#qf-sort').on('change', function() {
      if(this.value == "all"){
        $(".qf-highlights-item-wrapper").fadeIn();
      }
      else{
        $(".qf-highlights-item-wrapper").fadeOut();
        $("."+this.value+"").fadeIn();
      }
    })

  });
