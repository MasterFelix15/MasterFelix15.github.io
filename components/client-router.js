// getElementById wrapper
function $id(id) {
    return document.getElementById(id);
}

// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, id) {
    req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = function () {
        $id(id).innerHTML = req.responseText;
    };
}

// use #! to hash
router = new Navigo(null, true, '#');
router.on({
    // 'view' is the id of the div element inside which we render the HTML
    'dashboard': function () { loadHTML('./templates/dashboard.html', 'view'); },
    'bodylogical': function () { loadHTML('./templates/bodylogical.html', 'view'); },
    'a-builder': function ()  { loadHTML('./templates/a-builder.html', 'view'); },
    'about-me': function ()  { loadHTML('./templates/about-me.html', 'view'); },
    'contact': function ()  { loadHTML('./templates/contact.html', 'view'); }
});

// set the default route
router.on(function () { router.navigate('#!dashboard'); });

// set the 404 route
router.notFound(function (query) { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
