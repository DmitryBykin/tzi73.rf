var messageElement = document.querySelector('.cookie-notification');
// Если нет cookies, то показываем плашку
if (Cookies.get('agreement') == 0 || Cookies.get('agreement') == undefined) {
    showMessage();             
} else {            
    initCounter();                
}


// Функция добавляет класс к DOM-элементу. Вы можете использовать библиотеку jQuery или другой фреймворк
function addClass (o, c) {
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
    if (!o || re.test(o.className)) {
        return;
    }
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
}
// Функция удаляет класс из DOM-элемента. Вы можете использовать библиотеку jQuery или другой фреймворк
function removeClass (o, c) {
    var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
    if (!o) {
        return;
    }
    o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
}
// Функция, которая прячет предупреждение
function hideMessage () {
    addClass(messageElement, 'cookie-notification_hidden_yes');
}
// Функция, которая показывает предупреждение
function showMessage () {
    removeClass(messageElement, 'cookie-notification_hidden_yes');
}
function saveAnswer () {
    // Прячем предупреждение
    hideMessage();

    // Ставим cookies
    Cookies.set('agreement', '1', { expires: 365 });  // если expires не поставить - очищаются при закрытии браузера
}
function initCounter () {    
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
    (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter37780900 = new Ya.Metrika({ id:37780900, clickmap:true, trackLinks:true, accurateTrackBounce:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");
 
    ym(74184172, 'init', {});
    saveAnswer();
}

// Нажатие кнопки "Я согласен"
document.querySelector('#yes').addEventListener('click', function () {
    initCounter();
});
    