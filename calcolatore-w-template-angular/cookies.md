Copia questo script e inseriscilo come il primissimo script nel tag HEAD del 
tuo sito web per attivare il banner di consenso.

```html
<script id="Cookiebot" 
        src="https://consent.cookiebot.com/uc.js" 
        data-cbid="42d7148b-749b-421e-86cb-095684bec2e9" 
        data-blockingmode="auto" 
        type="text/javascript">
</script>
```

nel file style.css, per far si che si leggano le scritte.

```css
#CookiebotWidget, #CookiebotWidget * {
  color: initial !important;
}
```

--- 
Descrizione Cookies


Copia questo script e inseriscilo nell'HTML sulla pagina specifica e 
nella posizione esatta in cui desideri che appaia la Dichiarazione dei cookie.
```html
<script id="CookieDeclaration" 
        src="https://consent.cookiebot.com/42d7148b-749b-421e-86cb-095684bec2e9/cd.js" 
        type="text/javascript" 
        async>
</script>
```


# Google ads
``` html
<!-- Google ads -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4832768962920549"
     crossorigin="anonymous"></script>
```



