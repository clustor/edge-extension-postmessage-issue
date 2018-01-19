To reproduce the problem 

1. Load the EdgeExtensionTest folder as an extension in Edge browser
2. Serve test.html page from a web server
3. Click the button with Console on from developer tools and notice that content script receives the message 
4. Clear the console log, close the developer tools and click the button again. Now open the console and notice that onclick button message is not received by the content script. 
