# Countdown.js

Dit is een library gebouwd om makkelijk een Countdown/timer in te stellen op je website, zonder vele kennis van Javascript.

# Starten
Download de bestanden van de repository. Plaats de bestanden in de hoofdmap zodat je ze kunt runnen op je localhost en/of website. Zorg ervoor dat je de volgende bestanden gedownload hebt:

  - countdown.js
  - countdown2.css

# Vereisten
Zorg ervoor dat je de volgende HTML-code in je head zet

##### Link Stylesheet
```sh
<link rel=stylesheet" type="text/css" href="countdown2.css">
```
##### HTML-layout
Plaats de onderstaande paragrapher-tag en het id in je HTML-pagina.
```sh
<p>Titel Countdown</p><br><br>
<p id="demo"></p>
```

##### Javascript
Plaats het onderstaande script onderaan je HTML-pagina. 
- Je kunt de stylesheet van '.countdown2'geheel naar eigen style aanpassen. Zorg dat je dit onder de footer doet, maar wel voordat je je html sluit.
- Pas de datum aan. Doe dat op de manier zoals dat hieronder is aangegeven.
```sh
<script src="countdown.js"></script>

<script>
   var countdown2 = new countdown  ();
   countdown2.init('.countdown2', {countdownto: new Date("Jul 23, 2017 23:59:59")});
</script>
```

##### Default Settings
Tevreden met de instellingen zoals ze zijn? Dit zijn de defaultsettings. Hier hoef je dus niets aan te passen. Let op! Je kunt de datum ook niet aanpassen.
```sh
<script src="countdown.js"></script>

<script>
     var countdown = new countdown();
     countdown.init(); 
</script>
```

# Demo
Klink op de [link](nickmichielsen.nl) voor de demo

# Auteur
- Nick Michielsen

