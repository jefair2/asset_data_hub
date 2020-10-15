/* Copyright (C) 2005-2019 Splunk Inc. All Rights Reserved. */

// Augment the help link
(function() {
    if( $('#AppBar_0_0_0').size() > 0 ) {
        var helpLink = $('.AppBar a.help');
        if (helpLink.length != 0) {
            helpLink.attr('href', helpLink.attr("href").replace('%5Bsplunk_app_netapp%3A', '%5BNetApp%3A'));
        }
    }
}());

