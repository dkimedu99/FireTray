// https://developer.mozilla.org/en/Localizing_extension_descriptions
pref("extensions.{9533f794-00b4-4354-aa15-c2bbda6989f8}.description", "chrome://firetray/locale/overlay.properties");

// Global prefs
pref("browser.tabs.warnOnClose", false);

// Extension prefs
pref("extensions.firetray.hides_on_close", true);
pref("extensions.firetray.hides_on_minimize", true);
// exposed in 1 tree, hence 2 branches: serverTypes, excludedAccounts
pref("extensions.firetray.mail_accounts", '{ "serverTypes": {"pop3":{"order":1,"excluded":false}, "imap":{"order":1,"excluded":false}, "movemail":{"order":2,"excluded":true}, "none":{"order":3,"excluded":false}, "rss":{"order":4,"excluded":true}, "nntp":{"order":5,"excluded":true}}, "excludedAccounts": [] }'); // JSON
