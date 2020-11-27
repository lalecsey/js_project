// <script defer src="#"></script> defer - загружает скрипт в фоновом режиме
// <script async src="#"></script> async - кто первый загрузился, сразу выполняется


function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");  // пример
loadScript("js/some.js");  // пример

