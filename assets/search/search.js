---
layout: null
---

var main = {

    init: function () {

        // show right header title
        const product = decodeURI(getUrlVars()["product"]);
        if(product === 'hub') {
            document.getElementById('normal-title').classList.add('hidden');
            document.getElementById('hub-title').classList.remove('hidden');
        } else if (product === 'designer') {
            document.getElementById('normal-title').classList.add('hidden');
            document.getElementById('designer-title').classList.remove('hidden');
        }

        // general settings for instant search
        const search = instantsearch({
            appId: 'N9W4P1U3FJ',
            apiKey: '06e6890ab67bc9ae7837e7f57bd8d55b',
            indexName: 'peakboard-help',
            routing: true,
            searchParameters: {
                filters: 'NOT search-ignore:true AND lang:"' + document.querySelector('#language').innerHTML + '"'
            },
            highlightPreTag: '<em class="search-highlight">',
            highlightPostTag: '</em>',
            searchFunction(helper) {
                if(getUrlVars()["fromHomepage"]) {
                    $('.ais-search-box--input').val(decodeURI(getUrlVars()["fromHomepage"]));
                    helper.setQuery(decodeURI(getUrlVars()["fromHomepage"])).search();
                } else {
                    helper.search();
                }
            }
        });

        // initialize SearchBox
        search.addWidget(
            instantsearch.widgets.searchBox({
                container: '#search-box',
                placeholder: (getUrlVars()["fromHomepage"] ? decodeURI(getUrlVars()["fromHomepage"]) : document.querySelector('#search-box-text').innerHTML),
                poweredBy: false
            })
        );

        // initialize Hits
        search.addWidget(
            instantsearch.widgets.hits({
                container: '#hits',
                templates: {
                    item: document.querySelector('#hit-template').innerHTML,
                    empty: document.querySelector('#no-results-template').innerHTML
                },
                transformData: {
                    item: function(data) {
                        data.label = document.querySelector('#' + data.collection + '-template').innerHTML;
                        return data;
                    }
                }
            })
        );

        // Initialize pagination
        search.addWidget(
            instantsearch.widgets.pagination({
                container: '#pagination',
                maxPages: 10
            })
        );

        search.start();
    }
};

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

document.addEventListener('DOMContentLoaded', main.init);
