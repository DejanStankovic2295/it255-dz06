$.get('http://date.jsontest.com/', function (json) {
    console.log('Vreme: ' + json.time);
    $("p").text('Vreme: ' + json.time);

});