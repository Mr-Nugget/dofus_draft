var cpt = 0;
var cpt_pick = 0;
var cpt_ban = 0;
var pick = [false, false, true, true, false, false, false, false, true, true, false, false, true, true];
var team = [1,2,1,2,2,1,2,1,2,1,1,2,1,2];
var undo = new Array();

window.onload = hello;

function hello() {
    $("section").fadeIn(300);
}


function myclick (perso){
    undo.push(perso);
    var id = perso.attributes["id"].value;
    $("#back").prop('disabled', false);
    if(pick[cpt]){
      var temp = cpt_pick;
        $("#img_pick"+temp).fadeOut(0, function(){
            $("#img_pick"+temp).attr('src', 'res/'+id+'_carte.jpg');
          }).fadeIn(300);
        $("#"+id+" .pick-img").fadeIn(600);
        cpt_pick++;
    }else{
        $("#"+id+" .ban-img").fadeIn(300);
        $("#img_ban"+cpt_ban).attr('src', 'res/'+id+'_ban.jpg');
        cpt_ban++;
    }
    if(cpt >= pick.length){
    }else{
        $("#fleches").children().eq(cpt).css("opacity", 0.2);
        cpt++;
        if(cpt >= pick.length){
          $("#pillier div, #sous-pillier div, #erodeur div").css("cursor", "default");
          $("#pillier div, #sous-pillier div, #erodeur div").attr("onclick", "");
          $("#pillier div, #sous-pillier div, #erodeur div").css("opacity", "0.5");
          $("#back img").css('cursor', 'default');
          $("#back img").css('opacity', '0.5');
          $("#classes h3").css('opacity', '0.5');
          $("#back").css("cursor", "default");
          $("#back").css("opacity", "0.5");
          $("#back").prop("disabled", true);
        }
    }
    if(cpt == 1){
      $("#reset").css("cursor", "pointer");
      $("#back").css("cursor", "pointer");
      $("#reset").css("opacity", "1");
      $("#back").css("opacity", "1");
      $("#back").prop('disabled', false);
      $("#reset").prop('disabled', false);
    }

    perso.onclick = null;
}


function back(){
    cpt--;
    $("#fleches").children().eq(cpt).css("opacity", 1);
    if(cpt == 0){
        $("#back").prop('disabled', true);
        $("#reset").prop('disabled', true);
        $("#reset").css("cursor", "default");
        $("#back").css("cursor", "default");
        $("#reset").css("opacity", "0.5");
        $("#back").css("opacity", "0.5");
    }
    var indice = undo.length -1;
    var id = undo[indice].attributes["id"].value;
    $("#"+id).attr("onclick", "myclick(this);");
    undo.splice(indice, 1);
    if(pick[cpt]){
        cpt_pick--;
        $("#"+id+" .pick-img").fadeOut(300);
        $("#img_pick"+cpt_pick).attr('src', 'res/cache.jpg');

    }else{
        $("#"+id+" .ban-img").fadeOut(300);
        cpt_ban--;
        $("#img_ban"+cpt_ban).attr('src', 'res/basic_ban.png');
    }
}

function reset(){
    cpt=0;
    cpt_ban =0;
    cpt_pick=0;

    $("#pillier div, #sous-pillier div, #erodeur div").css("cursor", "pointer");
    $("#pillier div, #sous-pillier div, #erodeur div").attr("onclick", "myclick(this);");
    $("#pillier div, #sous-pillier div, #erodeur div").css("opacity", "1");
    $("#back").prop('disabled', false);

    $("#back img").css('cursor', 'pointer');
    $("#back img").css('opacity', '1');
    $("#classes h3").css('opacity', '1');

    $(".pick-img").fadeOut(300);
    $(".ban-img").fadeOut(300);

    $("#fleches img").css("opacity", "1");

    $("#reset").css("cursor", "default");
    $("#back").css("cursor", "default");
    $("#reset").css("opacity", "0.5");
    $("#back").css("opacity", "0.5");


    for (var i = 0; i < 8; i++) {
      $("#img_ban"+i).attr('src', 'res/basic_ban.png');
    }
    for (var i = 0; i < 6; i++) {
      $("#img_pick"+i).attr('src', 'res/cache.jpg');
    }

}
