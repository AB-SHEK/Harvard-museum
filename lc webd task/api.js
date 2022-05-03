const API_KEY = 'api_key=f52788c7-1711-41b9-84f3-80a02bc33920';
const API_URL = 'https://api.harvardartmuseums.org/object?size=5&page=42';
const IMG_URL = 'https://nrs.harvard.edu/urn-3';

const main = document.getElementById('main');


getPics(API_URL);
function getPics(url)
{
    fetch(url).then(res => res.json).then(data =>{
        console.log(data.results);
        showPic(data.results);
    })
}

function showPic(data)
{
main.innerHTML = '';

   data.forEach(pic =>{
       const {title,poster_path, vote_average, overview} = picture;
       const picEl = document.createElement('div');
       picEl,classlist.add('picture');
       picEl.innerHTML =
       <img src="$(IMG_URL+poster_path" alt="$(title)">
       <div class="picname">
           <h1>$(title)</h1>
           <span class="$getcolor(vote_average)">$(vote_average)</span>
       </div>
       </img>


main.appendChild(picEl);
   })
}


function getColor(vote) {
    if(vote>=8){return 'green'}
    else return { 'red' }
}