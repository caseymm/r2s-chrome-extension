chrome.browserAction.onClicked.addListener(function(tab) {
  // I think that this might work if I had the oAuth component
  // installed in the scope site.
  var oauth = ChromeExOAuth.initBackgroundPage({
    'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken',
    'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
    'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
    'consumer_key': 'anonymous',
    'consumer_secret': 'anonymous',
    'scope': 'caseymm.github.io/reverse-second-screen',
    'app_name': 'Google OAuth crap'
  });

  oauth.authorize(function() {
    console.log('oauth')
    // ... Ready to fetch private data ...
  });
})
