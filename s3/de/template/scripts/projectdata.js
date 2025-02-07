// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;

rh.consts('DEFAULT_TOPIC', encodeURI("#Overview/Getting_Started.htm".substring(1)));
rh.consts('HOME_FILEPATH', encodeURI("index.htm"));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', '9F275947-AF51-4554-8633-17E42CDDD81A' || 'preview');
rh.consts('LNG_STOP_WORDS', ["a", "about", "after", "against", "all", "also", "among", "an", "and", "are", "as", "at", "be", "became", "because", "been", "between", "but", "by", "can", "come", "do", "during", "each", "early", "for", "form", "found", "from", "had", "has", "have", "he", "her", "his", "however", "in", "include", "into", "is", "it", "its", "late", "later", "made", "many", "may", "me", "med", "more", "most", "near", "no", "non", "not", "of", "on", "only", "or", "other", "over", "several", "she", "some", "such", "than", "that", "the", "their", "then", "there", "these", "they", "this", "through", "to", "under", "until", "use", "was", "we", "were", "when", "where", "which", "who", "with", "you"]);
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG_NAME'), "en_US");
model.publish(rh.consts('KEY_LNG'), {"Reset":"Reset","SearchResultsPerScreen":"Search results per page","SyncToc":"SyncToc","HomeButton":"Home","WebSearchButton":"WebSearch","Welcome_header":"Welcome to our Help Center","ApplyTip":"Apply","HighlightSearchResults":"Highlight Search Results","GlossaryFilterTerms":"Filter Terms","WebSearch":"WebSearch","Show":"Show","Welcome_text":"What can we help you with today?","EnableAndSearch":"Display results with all search words","ShowAll":"All","Next":"Next","Print":"Print","NoScriptErrorMsg":"Enable JavaScript support in the browser to view this page.","PreviousLabel":"Previous","Hide":"Hide","Search":"-Search-","Contents":"Contents","ShowHide":"Show/Hide","Canceled":"Canceled","favoritesLabel":"Favorites","EndOfResults":"End of search results.","Loading":"Loading...","SidebarToggleTip":"Expand/Collapse","ContentFilterChanged":"Content filter is changed, search again","Logo":"Logo","Logo/Author":"Powered By","JS_alert_LoadXmlFailed":"Failed to load XML file","favoritesNameLabel":"Name","Copyright":"© Copyright 2017. All rights reserved.","SearchTitle":"Search","Searching":"Searching...","Disabled Next":">>","nofavoritesFound":"You have not marked any topic as favorite.","unsetAsFavorite":"Unset as favorite","Cancel":"Cancel","JS_alert_InitDatabaseFailed":"Failed to initialize database","ResultsFoundText":"%1 result(s) found for %2","UnknownError":"Unknown error","Seperate":"|","Index":"Index","setAsFavorite":"Set as favorite","setAsFavorites":"Add to Favorites","TopicsNotFound":"No results found","SearchPageTitle":"Search Results","Glossary":"Glossary","SearchButtonTitle":"Search for...","Filter":"Filter","HideAll":"Hide All","TableOfContents":"Table of Contents","NextLabel":"Next","Disabled Prev":"<<","Back":"Back","SearchOptions":"Search Options","OpenLinkInNewTab":"Open in new tab","Prev":"Previous","ShowTopicInContext":"Click here to see this page in full context","FavoriteBoxTitle":"Favorites","ToTopTip":"Go to top","NavTip":"Close","IeCompatibilityErrorMsg":"This page cannot be viewed in Internet Explorer 8 or earlier version.","IndexFilterKewords":"Filter Keywords","JS_alert_InvalidExpression_1":"The search string you typed is not valid."});

model.publish(rh.consts('KEY_HEADER_DEFAULT_TITLE_COLOR'), "#ffffff");
model.publish(rh.consts('KEY_HEADER_DEFAULT_BACKGROUND_COLOR'), "#025172");
model.publish(rh.consts('KEY_LAYOUT_DEFAULT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");

model.publish(rh.consts('KEY_HEADER_TITLE'), "Scripture Forge Help");
model.publish(rh.consts('KEY_HEADER_TITLE_COLOR'), "#dddddd");
model.publish(rh.consts('KEY_HEADER_BACKGROUND_COLOR'), "#232323");
model.publish(rh.consts('KEY_HEADER_LOGO_PATH'), "template/Charcoal_Grey/logo.png");
model.publish(rh.consts('KEY_LAYOUT_FONT_FAMILY'), "\"Trebuchet MS\", Arial, sans-serif");
model.publish(rh.consts('KEY_HEADER_HTML'), "<div class='topic-header' onClick='rh._.goToFullLayout()'>\
  <div class='logo'>\
    <img src='#{logo}' />\
  </div>\
  <div class='nav'>\
    <div class='title' title='#{title}'>\
      <span>#{title}</span>\
    </div>\
    <div class='gotohome' title='#{tooltip}'>\
      <span>#{label}</span>\
    </div></div>\
  </div>\
<div class='topic-header-shadow'></div>\
");
model.publish(rh.consts('KEY_HEADER_CSS'), ".topic-header { background-color: #{background-color}; color: #{color}; width: calc(100%); height: 3em; position: fixed; left: 0; top: 0; font-family: #{font-family}; display: table; box-sizing: border-box; }\
.topic-header-shadow { height: 3em; width: 100%; }\
.logo { cursor: pointer; padding: 0.2em; text-align: center; display: table-cell; vertical-align: middle; }\
.logo img { width: 1.875em; display: block; }\
.nav { width: 100%; display: table-cell; }\
.title { width: 40%; height: 100%; float: left; line-height: 3em; cursor: pointer; }\
.gotohome { width: 60%; float: left; text-align: right; height: 100%; line-height: 3em; cursor: pointer; }\
.title span, .gotohome span { padding: 0em 1em; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }");

})();