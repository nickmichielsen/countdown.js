Countdown.JS
Dit is een library gebouwd om makkelijk een Countdown/timer in te stellen op je website, zonder vele kennis van Javascript.

Starten
Download de bestanden van de repository. Plaats de bestanden in de hoofdmap zodat je ze kunt runnen op je localhost en/of website. Zorg ervoor dat je de volgende bestanden gedownload hebt:

- 
-
-

Vereisten
Zorg ervoor dat je de volgende HTML-code in je head zet

Link Stylesheet
<link rel=stylesheet" type="text/css" href="countdown2.css">

HTML Layout
Plaats de onderstaande paragrapher-tag en het id in je HTML-pagina.

<p>Titel Countdown</p><br><br>
<p id="demo"></p>

Javascript
Plaats het onderstaande script onderaan je HTML-pagina. 
- Je kunt de stylesheet van '.countdown2'geheel naar eigen style aanpassen. Zorg dat je dit onder de footer doet, maar wel voordat je je html sluit.
- Pas de datum aan. Doe dat op de manier zoals dat hieronder is aangegeven.
<script src="countdown.js"></script>

<script>
   var countdown2 = new countdown  ();
   countdown2.init('.countdown2', {countdownto: new Date("Jul 23, 2017 23:59:59")});
</script>

Default Settings
Tevreden met de instellingen zoals ze zijn? Dit zijn de defaultsettings. Hier hoef je dus niets aan te passen. Let op! Je kunt de datum ook niet aanpassen.
<script src="countdown.js"></script>

<script>
     var countdown = new countdown();
     countdown.init(); 
</script>; 

DEMO
Zie de Demo(link naar website)

Auteur
Nick Michielsen