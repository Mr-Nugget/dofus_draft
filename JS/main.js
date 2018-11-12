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
        $("#equipe"+team[cpt]+" #img_pick"+cpt_pick).attr('src', 'res/'+id+'_carte.jpg');
        $("#equipe"+team[cpt]+" #cache"+cpt_pick).fadeOut(300);
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
          $("#pillier div, #sous-pillier div, #erodeur div").css("opacity", "0.5");
          $("#back").prop('disabled', true);
          $("#back img").css('cursor', 'default');
          $("#back img").css('opacity', '0.5');
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
        cpt_pick--;
        $("#"+id+" .pick-img").fadeOut(300);
        $("#equipe"+team[cpt]+" #cache"+cpt_pick).fadeIn(300);

    }else{
        $("#"+id+" .ban-img").fadeOut(300);
    }
}

function reset(){
    location.reload();
}

function fademyimage(){
    $("#classes").show();
    $("#classes div").hide(0).fadeIn(500);
}
