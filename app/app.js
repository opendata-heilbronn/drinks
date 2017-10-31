

(function() {

    $.getJSON("data.json", function(data) {
        ko.applyBindings(data);
    });

})();