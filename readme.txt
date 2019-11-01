==============================================================
 Small utility library to fetch metadata for any urls
=============================================================
Desc: This library is for fetch metadata of any given urls
      It accept one url at a time.
example 
req.body: {
	"url" : "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    or
    "url" : "https://www.microsoft.com/en-in"
   }

response : {
    "title": "What the heck is the event loop anyway? | Philip Roberts | JSConf EU",
    "description": "JavaScript programmers like to use words like, “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” and “concurrency”. We say things l...",
    "url": "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
    "image": "https://i.ytimg.com/vi/8aGhZQkoFbQ/maxresdefault.jpg"
}
