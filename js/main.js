var filterpublicationValue = "all";
var filtercountryValue = "all";
var filterLangValue = "all";

  $(document).ready(function() {
    $('select').niceSelect();
    
    $('#qf-filter-lang').on('change', function() {
      filterLangValue = this.value;
      $(".qf-highlights-item-wrapper").fadeOut();
      contentFilter();
    })
    $('#qf-pub').on('change', function() {
      filterpublicationValue = this.value;
      $(".qf-highlights-item-wrapper").fadeOut();
      contentFilter();
    })
    $('#qf-filter-country').on('change', function() {
      filtercountryValue = this.value;
      $(".qf-highlights-item-wrapper").fadeOut();
      contentFilter();
    })
  });

function contentFilter(){
  if(filterLangValue == "all" && filterpublicationValue == "all" && filtercountryValue == "all"){
    $(".qf-highlights-item-wrapper").fadeIn();
  }
  else if(filterLangValue != "all" && filterpublicationValue == "all" && filtercountryValue == "all"){
    $("."+filterLangValue+"").fadeIn();
  }
  else if(filterLangValue == "all" && filterpublicationValue != "all" && filtercountryValue == "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if($(this).attr("data-filter-lang") == filterpublicationValue){
        $(this).fadeIn();
      }
    })
  }
  else if(filterLangValue == "all" && filterpublicationValue == "all" && filtercountryValue != "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if($(this).attr("data-filter-country") == filtercountryValue){
        $(this).fadeIn();
      }
    })
  }
  else if(filterLangValue != "all" && filterpublicationValue != "all" && filtercountryValue == "all"){
    $("."+filterLangValue+"").each(function(i, value) {
      if($(this).attr("data-filter-lang") == filterpublicationValue){
        $(this).fadeIn();
      }
    })
  }
  else if(filterLangValue == "all" && filterpublicationValue != "all" && filtercountryValue != "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if(($(this).attr("data-filter-lang") == filterpublicationValue) && ($(this).attr("data-filter-country") == filtercountryValue)){
        $(this).fadeIn();
      }
    })
  }
  else if(filterLangValue != "all" && filterpublicationValue == "all" && filtercountryValue != "all"){
    $("."+filterLangValue+"").each(function(i, value) {
      if($(this).attr("data-filter-country") == filtercountryValue){
        $(this).fadeIn();
      }
    })
  }
  else{
    $("."+filterLangValue+"").each(function(i, value) {
      if(($(this).attr("data-filter-lang") == filterpublicationValue) && ($(this).attr("data-filter-country") == filtercountryValue)){
        $(this).fadeIn();
      }
    })
  }  
}