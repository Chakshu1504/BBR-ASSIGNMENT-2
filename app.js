

fetch('./posts.json')
.then(results=>results.json())
.then(data=>{

    data.posts.map((item)=>{
        const posts = document.querySelector(".postHolder");
    console.log(item);
    
    const card = document.createElement('div');
    card.classList = 'card';
    
    const postCard = `
        <img src=${item.img}>
        <div class="cardText">
            <div class="card-title">
                <h2>${item.title}</h2>
                <Span>${item.category}</Span>
            </div>
            <p class="desc">
            ${item.desc}
            </p>
            <div class="author-detail">
                <span class="author-logo">
                    <i class="fa fa-person" aria-hidden="true"></i>
                </span>
                <span>${item.author}</span>
            </div>
            <div class="card-footer">
                <div class="datetime-detail">
                    <span class="datetime-logo">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </span>
                    <span class="datetime">
                    ${item.datetime}
                    </span>
                </div>
                <div class="comment-detail">
                    <span class="comment-logo">
                        
                    </span>
                    <span class="comment">
                    ${item.comment_count}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    card.innerHTML += postCard;
    posts.appendChild(card);
    })
        

})
