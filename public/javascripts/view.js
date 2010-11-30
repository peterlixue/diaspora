/*   Copyright (c) 2010, Diaspora Inc.  This file is
*   licensed under the Affero General Public License version 3 or later.  See
*   the COPYRIGHT file.
*/

$(document).ready(function(){
  $('#debug_info').click(function() {
    $('#debug_more').toggle('fast');
  });

  $("label").inFieldLabels();

  $('#flash_notice, #flash_error, #flash_alert').animate({
    top: 0
  }).delay(2000).animate({
    top: -100 
  }, $(this).remove());

  //buttons//////
  $(".add_aspect_button," + 
    ".manage_aspect_contacts_button," +
    ".invite_user_button," +
    ".add_photo_button," +
    ".remove_person_button," +
    ".question_mark").fancybox({ 'titleShow': false , 'hideOnOverlayClick' : false });

  $("input[type='submit']").addClass("button");

  $("#q").focus(
    function() {
      $(this).addClass('active');
    }
  );

  $('.new_request').live("submit", function(){
    var foo = $(this).parent();
    $(this).hide();
    foo.find('.message').removeClass('hidden');
  });


  $("#q").blur(
    function() {
      $(this).removeClass('active');
    }
  );

  $("#publisher").find("textarea").keydown( function(e) {
    if (e.keyCode === 13) {
      $(this).closest("form").submit();
    }
  });

  $(".stream").delegate("textarea.comment_box", "keydown", function(e){
    if (e.keyCode === 13) {
      $(this).closest("form").submit();
    }
  });

  $("#user_menu").click( function(){
    $(this).toggleClass("active");
  });

  $('body').click( function(event){
    var target = $(event.target);
    if(!target.closest('#user_menu').length){
      $("#user_menu").removeClass("active");
    };
    if(!target.closest('.reshare_pane').length){
      $(".reshare_button").removeClass("active");
      $(".reshare_box").hide();
    };
  });

  $("img", "#left_pane").tipsy({live:true});
  $(".add_aspect_button", "#aspect_nav").tipsy({gravity:'w'});
  $(".person img", ".dropzone").tipsy({live:true});
  $(".avatar", ".aspects").tipsy({live:true});
  $(".what_is_this").tipsy({live:true,delayIn:400});

  $('.webfinger_form').submit(function(evt){
    form = $(evt.currentTarget);
    form.siblings('#loader').show();
     $('#request_result li:first').hide();
  });

  // hotkeys
  $(window).bind('keyup', 'ctrl+f', function(){
    $("#q").focus();
  });

  $(window).bind('keyup', 'ctrl+e', function(){
    EditPane.toggle();
  });

});//end document ready


//Called with $(selector).clearForm()
$.fn.clearForm = function() {
  return this.each(function() {
  var type = this.type, tag = this.tagName.toLowerCase();
  if (tag == 'form')
    return $(':input',this).clearForm();
  if (type == 'text' || type == 'password' || tag == 'textarea')
    this.value = '';
  else if (type == 'checkbox' || type == 'radio')
    this.checked = false;
  else if (tag == 'select')
    this.selectedIndex = -1;
  else if (this.name == 'photos[]')
    this.value = '';
  $(this).blur();
  });
};

$(".getting_started_box").live("click",function(evt){
  $(this).animate({
    left: parseInt($(this).css('left'),30) == 0 ?
        -$(this).outerWidth() :
        0
    },function(evt){ $(this).css('left', '1000px')});
});

