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
    if(cpt == pick.length-1){
        $("#current_team h3").replaceWith("<h3>Fin de la draft</h3>");
        $("#alert-fond").css("height", "100%");
        $("#alert-fond").css("width", "100%");
        $("#alert-end").fadeIn(700);
        $("#btn-quit").fadeIn(700);
        $("#fleches").children().eq(cpt).css("opacity", 0.2);
    }else{
        $("#fleches").children().eq(cpt).css("opacity", 0.2);
        cpt++;
        if(team[cpt] == 1){
            $("#current_team h3").replaceWith("<h3>Equipe A</h3>");
        }else{
            $("#current_team h3").replaceWith("<h3>Equipe B</h3>");
        }
    }
    perso.onclick = null;
    $("#"+id).css("cursor", "");
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
    $("#span-"+id).remove();
    $("#img-recap-"+id).remove();
    $("#text-recap-"+id).remove();
    if(team[cpt] == 1){
            $("#current_team h3").replaceWith("<h3>Equipe A</h3>");
        }else{
            $("#current_team h3").replaceWith("<h3>Equipe B</h3>");
        }
}

function reset(){

    for (var i = 0; i < undo.length; i++) {
        var id = undo[i].attributes["id"].value;
        $("#"+id).attr("onclick", "myclick(this);");
    }
    $(".ban-img").fadeOut(300);
    $(".pick-img").fadeOut(300);
    $(".banpick").html("<div class='ban'><h3>Bans</h3></div><div class='pick'><h3>Pick</h3></div>")
    $("#current_team h3").replaceWith("<h3>Equipe A</h3>");
    $("#alert-end").html("<h2>Recap</h2>\
                <div id='recap-equipe'>\
                    <div class='recap-ban-pick'>\
                        <div id='recap-equipe1'>\
                            <h2>Equipe A</h2>\
                        </div>\
                        <div id='ban-equipe1'>\
                            <h3>Bans :</h3>\
                        </div>\
                </div>\
                <div class='recap-ban-pick'>\
                        <div id='recap-equipe2'>\
                            <h2>Equipe B</h2>\
                        </div>\
                        <div id='ban-equipe2'>\
                            <h3>Bans :</h3>\
                        </div>\
                </div>\
            </div>");
    cpt = 0;
    cpt_pick = 0;
    undo.splice(0, undo.length);
    $("#fleches").children().css("opacity", 1);
}

function fademyimage(){
    $("#classes").show();
    $("#classes div").hide(0).fadeIn(500);
}
