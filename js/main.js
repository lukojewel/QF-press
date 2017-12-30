var filterpublicationValue = "all";
var filtercountryValue = "all";
var filterLangValue = "all";

  $(document).ready(function() {
    $('select').niceSelect();
    
    $('#qf-filter-lang').on('change', function() {
      filterLangValue = this.value;
      contentFilter();
    })
    $('#qf-pub').on('change', function() {
      filterpublicationValue = this.value;
      contentFilter();
    })
    $('#qf-filter-country').on('change', function() {
      filtercountryValue = this.value;
      contentFilter();
    })
  });

function contentFilter(callback){

  $(".qf-highlights-item-wrapper").fadeOut();
  var result_value = false;
  
  if(filterLangValue == "all" && filterpublicationValue == "all" && filtercountryValue == "all"){
    $(".qf-highlights-item-wrapper").fadeIn();
    result_value= true;
  }
  else if(filterLangValue != "all" && filterpublicationValue == "all" && filtercountryValue == "all"){
    $("."+filterLangValue+"").fadeIn();
    result_value= true;
  }
  else if(filterLangValue == "all" && filterpublicationValue != "all" && filtercountryValue == "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if($(this).attr("data-filter-lang") == filterpublicationValue){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  else if(filterLangValue == "all" && filterpublicationValue == "all" && filtercountryValue != "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if($(this).attr("data-filter-country") == filtercountryValue){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  else if(filterLangValue != "all" && filterpublicationValue != "all" && filtercountryValue == "all"){
    $("."+filterLangValue+"").each(function(i, value) {
      if($(this).attr("data-filter-lang") == filterpublicationValue){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  else if(filterLangValue == "all" && filterpublicationValue != "all" && filtercountryValue != "all"){
    $(".qf-highlights-item-wrapper").each(function(i, value) {
      if(($(this).attr("data-filter-lang") == filterpublicationValue) && ($(this).attr("data-filter-country") == filtercountryValue)){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  else if(filterLangValue != "all" && filterpublicationValue == "all" && filtercountryValue != "all"){
    $("."+filterLangValue+"").each(function(i, value) {
      if($(this).attr("data-filter-country") == filtercountryValue){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  else{
    $("."+filterLangValue+"").each(function(i, value) {
      if(($(this).attr("data-filter-lang") == filterpublicationValue) && ($(this).attr("data-filter-country") == filtercountryValue)){
        $(this).fadeIn();
        result_value= true;
      }
    })
  }
  noResult(result_value)
}

function noResult(result_value){
  $(".qf-no-result-wrapper").fadeOut();
  if (result_value == 0) {
      $(".qf-no-result-wrapper").fadeIn();
    }
}