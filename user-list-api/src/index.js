import $ from 'jquery';



function main() {

    let url = `http://api.giphy.com/v1/gifs/search?q=${topic}&limit=25&api_keyzXd0tXZ6KWqtSamdjKr9pkWT4MMZd9hg`;
    console.log('DOM is loaded');

    fetch(url).then(function(response){
            console.log(response);
            return response.json();
    }).then(function(json){
            console.log(json);
        for(let i=0; i < json.data.length; i++){
            let image = json.data[i].images.original.url;
        }

    });

 //Msg = $('<p>The Webpack s working!</p>')
//    $(".search").click(function() {
//    let searchText = $("#searchText").val();
//    let url = `https://api.github.com/users/${searchText}/repos`

//     fetch(url).then(function(response){
//         return response.json();
//     }) .then(function(jsonData) {
//         console.log(jsonData);
         
//     })
// }

}
    $(main);