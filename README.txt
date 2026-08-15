AERIS ONE — WEBSITE DRONE ROMANIA
=================================

CONTINUTUL PACHETULUI
- index.html       pagina principala
- order.html       pagina de comanda
- privacy.html     politica de confidentialitate
- shipping.html    informatii despre livrare
- terms.html       termeni si conditii
- thank-you.html   confirmarea dupa comanda
- META-PIXEL-SETUP.txt  pasii pentru Meta Pixel si Conversions API
- assets/          stiluri, script si imagini optimizate

INSTALARE PE WINDOWS
1. Dezarhiveaza pachetul.
2. Ruleaza fisierul INSTALL-WINDOWS.bat.
3. Folderul va fi copiat automat in:
   C:\Users\Eviternite\OneDrive\Desktop\Video\Music\drone-romania-site

DESCHIDERE LOCALA
Deschide index.html cu Chrome, Edge sau Firefox.

PUBLICARE
Incarca toate fisierele si folderul assets pe server, pastrand aceeasi structura.

CONFIGURARE ADRICE
Formularul din order.html este conectat la oferta 2713 si landing page 2746.
Dupa trimiterea cu succes, clientul este directionat automat catre:
https://www.romaniandrone.store/thank-you.html

Pagina index.html include pixelul de impresie Adrice. Scriptul trk.min.js este
instalat pe pagina principala, formular si pagina de multumire. Urmeaza pasii
din META-PIXEL-SETUP.txt pentru conectarea sursei Meta in Adrice.

Meta Pixel 1576911387464284 este instalat pe toate paginile. Browserul trimite
PageView, ViewContent, InitiateCheckout si Purchase. Purchase foloseste valoarea
reala 349 RON si este declansat numai dupa formular. Eventul Lead poate fi trimis
server-side de Adrice prin Conversions API.

IMPORTANT
Nu modifica valorile ascunse uid, offer, lp sau _key fara un nou cod API generat
de Adrice. Inainte de lansare, verifica identitatea vanzatorului, detaliile
produsului si informatiile legale.
