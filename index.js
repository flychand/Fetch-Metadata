const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/get-metadata', (req, res) => {
   
    var keysLookingFor = {
       "title" : "title",
       "description" : "description",
       "og:image" : "image",
       "og:url" : "url",
    }

    var url = req.body.url
    JSDOM.fromURL(url, {}).then((dom) => {

        var metaTags = dom.window.document.getElementsByTagName('meta');

        var metaInfos = [];
        for (let i = 0; i < metaTags.length; i++) {
            var attrs = metaTags[i].attributes;
            var obj = {};
            for(var j = attrs.length - 1; j >= 0; j--) {
                obj[attrs[j].name] = attrs[j].value;
            }

            metaInfos.push(obj);
        }

        var resp = {};
        
        metaInfos.map((v, k) => {   
            if(keysLookingFor.hasOwnProperty(v.name) || keysLookingFor.hasOwnProperty(v.property)){
                var key = keysLookingFor[v.name] || keysLookingFor[v.property] || null;

                if(key && key !== null)
                    resp[key] = v.content || "";
            }
        })

        res.send(resp);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

app.listen(8081, () => {
   console.log("Test started at 8081")
});