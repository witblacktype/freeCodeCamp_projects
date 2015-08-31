Notes on Building the Random Quote Machine
==========================================

Solutions and References to overcome challenges inherent in building and updating a random quote machine
------------------------------------------------------------------------------------------------

#### Cross Origin Requests (CORS)

3 Approaches for Cross Origin Requests (CORS)

1. For Local Development using XMLHttPRequests, use a 'mocking' approach adapted for frontend development.
The link inlcudes an explanation for the included plugin which handles the mocking for jQuery requests from the server.
http://appendto.com/2010/07/mock-your-ajax-requests-with-mockjax-for-rapid-development/

2. Allow CORS by modifying the httpd.conf file on Apache server
http://www.webdevdoor.com/jquery/cross-domain-browser-json-ajax/

3. Alter Web Broswer Security settings to allow CORS
https://blog.nraboy.com/2014/08/bypass-cors-errors-testing-apis-locally/
