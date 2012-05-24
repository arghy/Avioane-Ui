/* Author: arghy

*/

$(function(){


/* =============================================================================
Hangar Page
========================================================================== */

/* Dragabble Weapons */

$('.weapon').draggable({containment:'#hangar',revert:true,scroll:false});
$( "#plane_holder" ).droppable({
			drop: function( event, ui ) {
				$(ui.draggable).hide("explode",1000);
			
				
				var weapon_type = $(ui.draggable).data('type');
				
				if(weapon_type = 'radar') 
								
				
				$('#weapon_info>ul>li').fadeIn(700);
			}
		});

});

