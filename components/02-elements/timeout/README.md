### Rationale
Javascript only component to handle session timeout.

### SessionTimeoutUI javascript variables
* `scopeEl` - Define the scope of the entire component
* `promptTime` - Time limit in seconds of when to prompt user with SessionTimeoutUI
* `continueRetryLimit` - The amount of times the script attempt to notify the server of user continuing session
* `sessionExpiredUrl` - URL of where to take the user after session has expired
* `expireSessionUrl` - URL to notify server of session timeout
* `sessionContinueUrl` - URL of where to notify server of session continuation
* `animation` - Countable-type animation instance
* `handleSave` - Event handler to handle user click sign out
