/***********************************************************************************
 *    Definition Introszene 2.
 *    
 *    Hinweis: ready ist ein jQuery Ereignis das aufgerufen wird, sobald der Browser
 *             das erstellen des DOM-Baums beendet hat.
 **********************************************************************************/
$(document).ready(function($) {
	/* Das Hintergrundbild im div wird um 500 pixel nach links verschoben.
	   Dokumentation zu TweenMax und allen unterstützen Optionen: http://www.greensock.com/tweenmax/ */
	var backgroundTween = TweenMax.to("#intro2", 1, {backgroundPosition: "-500px 0px", ease: Linear.easeNone});

	/*das haus im vordergrund*/
	var szenenwechsel 	= TweenMax.fromTo(".big_house", 1, {left: "0%", top: "0%"}, {left: "-52%", top: "0%", ease: Linear.easeNone});	

	/* Bro-Fist Leuchten */
	var shine 	= TweenMax.fromTo(".shine", 2, {scale: 0}, {rotation:180, scale: 1 , ease: Linear.easeNone});	
	
	
	var kom_head =  TweenMax.fromTo(".kommilitonen_head", 0.65, {top: "-50%"}, { top:"7%", left:"0%",  ease: Linear.easeNone});
	
	var kom_text =  TweenMax.fromTo(".kommilitonen_text", 0.65, {left: "2%", top: "100%"}, { left:"2%", top:"35%", ease: Linear.easeNone});
	
	
	// Die Zeitleiste
	var timelineTween2 = new TimelineMax()
		.add([
		      	backgroundTween,
				szenenwechsel,
				shine,
				kom_head,
				kom_text
				
			]);
	
	/* Die Scroll Magic Scene für die erste Introszene definieren.
	   Sie soll ab #intro1 1000px lang scrollen, wobei die position des Auslösers für diese Szene ganz an den Anfang gesetzt wird.*/
	var scene2 = new ScrollScene({TriggerElement: "#intro2", duration: 1000, triggerHook: 0, loglevel: 3})
		.setTween(timelineTween2)
		.setPin("#intro2")
		.addTo(controller);
		
		//DIENT DER DEBUGFUNKTION
		scene.addIndicators();
		
});