'use strict';

/*
var fs = require('fs');

// abstract writing screen shot to a file
function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
*/

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    beforeEach(function() {
        browser.get('test.html');
    });

    it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/view1");
    });

    describe('view1', function() {

        beforeEach(function() {
            browser.get('test.html#/view1');
        });

        it('should render view1 when user navigates to /view1', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 1/);
        });

    });


    describe('view2', function() {

        beforeEach(function() {
            browser.get('test.html#/view2');
        });

        it('should render view2 when user navigates to /view2', function() {

            expect(element.all(by.css('[ng-view] p')).first().getText()).
                toMatch(/partial for view 2/);
        });

    });

    /*
    describe('Pricing page', function() {

        beforeEach(function() {
            browser.get('pricing.html');
        });


        it('should render the pricing page', function() {
            browser.takeScreenshot().then(function (png) {
                writeScreenShot(png, 'exception.png');
            });
        });

    });
    */
});


describe('Templates', function() {

    var protractor;

    beforeEach(function() {
        protractor = protractor.getInstance();
        browser.get('templates.html');
    });

    it('should render at least one template', function () {
        browser.waitForAngular();
        expect(element.all(by.css('.thumbnail')).count())
            .toBeGreaterThan(0);
    });

});