const base_URL = "http://localhost:3000/flowers";


// grab ul
const ul = document.getElementById('ul')

// grab comment form
const comment = document.getElementById('comment')

//grab form for comment
const commentForm = document.getElementById("comment-form");

const ulComment = document.getElementById("commentSection")

//asynchronous Function
async function displayFlowers(){
    const response = await fetch(base_URL, {
        method: 'GET',
        headers: {},
    })
    // check request is successful
    if(response.ok) {
        const flower = await response.json()

        for(let i = 0; i < flower.length; i++) {
            const list = document.createElement('li')
            const image = document.createElement('img')
            const flowerName = document.createElement('h3')
            const btn = document.createElement('button')
            const like = document.createElement("p");
            const likeBtn = document.createElement("button");

            list.classList = "list1"
            image.src = flower[i].image
            flowerName.textContent = flower[i].name
            btn.innerHTML = "Add to Basket"
            like.innerHTML = `likes: ${flower[i].likes}`;

            

            const commentList = document.createElement('li')

            
            
           likeBtn.innerHTML = "❤️";
           likeBtn.addEventListener('click', () => {
                ++flower[i].likes;

                like.innerHTML = `likes:${flower[i].likes}`;
           })


            list.appendChild(image)
            list.appendChild(flowerName);
            list.appendChild(btn)
            list.appendChild(like);
            list.appendChild(likeBtn);



          ul.appendChild(list)

          ulComment.appendChild(commentList)


          btn.addEventListener('click', (task) => {
            

          })


          //submit addEventListener
          // commentForm.addEventListener('submit', (event) => addComment (event))
          // const addComment = (event) => {
          
            commentForm.onsubmit = async (event) => {
            event.preventDefault()

            commentList.textContent= comment.value
            alert('Comment really appreciated.SEE YOU NEXT TIME!!!')
              event.target.reset();
            
            }
          }    
          }     
        }
    

displayFlowers()