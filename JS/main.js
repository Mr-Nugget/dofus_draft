var cpt = 0;
var cpt_pick = 0;
var pick = [false, false, true, true, false, false, false, false, true, true, false, false, true, true];
var team = [1,2,1,2,2,1,2,1,2,1,1,2,1,2];
var undo = new Array();

function myclick (perso){
    undo.push(perso);
    var id = perso.attributes["id"].value;
    $("#back").prop('disabled', false);
    if(pick[cpt]){
        $("#equipe"+team[cpt]+" #img_pick"+cpt_pick).replaceWith('<img src="res/'+id+'_carte.jpg">');
        $("#"+id+" .pick-img").fadeIn(300);
        cpt_pick++;
    }else{
        $("#"+id+" .ban-img").fadeIn(300);
    }
    if(cpt >= pick.length){
    }else{
        $("#fleches").children().eq(cpt).css("opacity", 0.2);
        cpt++;
        if(cpt >= pick.length){
          $("#pillier div, #sous-pillier div, #erodeur div").css("cursor", "default");
          $("#pillier div, #sous-pillier div, #erodeur div").attr("onclick", "");
        }
    }
    perso.onclick = null;
}


function back(){
    cpt--;
    $("#fleches").children().eq(cpt).css("opacity", 1);
    if(cpt == 0){
        $("#back").prop('disabled', true);
    }
    var indice = undo.length -1;
    var id = undo[indice].attributes["id"].value;
    $("#"+id).attr("onclick", "myclick(this);");
    undo.splice(indice, 1);
    if(pick[cpt]){
        $("#"+id+" .pick-img").fadeOut(300);
    }else{
        $("#"+id+" .ban-img").fadeOut(300);
    }
}

function reset(){

    for (var i = 0; i < undo.length; i++) {
        var id = undo[i].attributes["id"].value;
        $("#"+id).attr("onclick", "myclick(this);");
    }
    $(".ban-img").fadeOut(300);
    $(".pick-img").fadeOut(300);
    $("#equipe1 .pick").html("<div class=\"pick\">\
          <h3>Picks</h3>\
          <div class=\"pick_img\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick0\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick3\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick4\">\
          </div>\
    </div>");
    $("#equipe2 .pick").html("<div class=\"pick\">\
          <h3>Picks</h3>\
          <div class=\"pick_img\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick1\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick2\">\
            <img src=\"res/xel_carte.jpg\" alt=\"\" id=\"img_pick5\">\
          </div>\
    </div>");
    cpt = 0;
    cpt_pick = 0;
    undo.splice(0, undo.length);
    $("#fleches").children().css("opacity", 1);
    $("#pillier div, #sous-pillier div, #erodeur div").attr("onclick", "myclick(this);");
    $("#pillier div, #sous-pillier div, #erodeur div").css("cursor", "pointer");
}

function fademyimage(){
    $("#classes").show();
    $("#classes div").hide(0).fadeIn(500);
}
