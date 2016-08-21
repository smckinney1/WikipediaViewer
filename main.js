//When user hits "enter" or clicks "Search," initiate the API call to Wikipedia using the search terms contained in the text box submission



$('#btn-search').click(function() {
    $.ajax({
        type: 'GET', //type GET is default
       /* url: 'https://en.wikipedia.org/w/api.php?action=query&callback=?',*/
        url: 'https://en.wikipedia.org/w/api.php?',
        //dataType: 'json',
        data: {
            action: 'query',
            format: 'JSON',
            generator: 'search',
            gsrnamespace: 0,
            gsrlimit: 10,
            exintro: '',
            explaintext: '',
            exsentences: 1,
            exlimit: 'max',
            prop: 'extracts',
            gsrsearch: $('#search').val().trim()
        },
        /*headers: { 'Api-User-Agent': 'Example/1.0' },*/
        success: function(data) {
            console.log(data);
            /*$.each(data, function (value) {
            })*/
        }
        /*error: function(data) {
            console.log('error');
        }*/
    });

})

/*function getAJAX () {
    $.ajax({
        type: 'GET',
        url: 'https://en.wikipedia.org/w/api.php',
        dataType: json,
        data: {
            action: 'query',
            format: 'json',
            generator: 'search',
            gsrnamespace: 0,
            gsrlimit: 10,
            exintro: '',
            explaintext: '',
            exsentences: 1,
            exlimit: 'max',
            prop: 'extracts',
            gsrsearch: $('#search').val().trim()
        },
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
           // do something with data
        }
        error: function(data) {
        	//do something
        }
    });
}
*/


/*https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=10&exintro&explaintext&exsentences=1&exlimit=max&prop=extracts&gsrsearch= [variable]*/
