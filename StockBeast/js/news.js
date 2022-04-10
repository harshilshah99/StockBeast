console.log("This is my index js file");

let newsAccordion = document.getElementById('newsAccordion');


const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=46120360296d44a1bacf7e7b6b5f461f`, true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {

            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0" style="border-bottom: solid 1px #ffffff3b">
                                <button style="color: white ; text-decoration:none" class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div style="border-bottom: solid 1px #ffffff3b ; text-decoration:none " class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


