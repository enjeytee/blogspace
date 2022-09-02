let postArray = []
const form = document.getElementById("new-post")

function renderPosts() {
    let html = ""
    for (let post of postArray) {
        html +=
        `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
    document.getElementById("blog-list").innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        postArray = data.splice(0, 5)
        renderPosts()
    })

document.getElementById("new-post").addEventListener("submit",function(event) {
        event.preventDefault()
        const postTitle = document.getElementById("post-title").value
        const postBody = document.getElementById("post-body").value
        const data = {
            title: postTitle,
            body: postBody
        }
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(response => response.json())
        .then(post => {
            postArray.unshift(post)
            console.log(postArray)
            renderPosts()
            form.reset()
        })       
})

/////////////////////////////////////////////////////////////////////

// PRACTICE //

// fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
//     .then(response => response.json())
//     .then(data => console.log(data))

// fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=15.100840&lon=120.612010&units=metric")
//     .then(response => response.json())
//     .then(data => console.log(data))


    // END PRACTICE //

// document.getElementById("post-button").addEventListener(
//     "click",
//     function(event) {
//         const blogPosts = new Object()
//         event.preventDefault()
//         blogPosts.title = document.getElementById("post-title").value
//         blogPosts.body = document.getElementById("post-body").value
//         console.log(blogPosts.title)
//         console.log(blogPosts.body)
//     }
// )

// const blogPosts = new Object()
// blogPosts.title = "test title"
// blogPosts.body = "test body"
// console.log(blogPosts.title)

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false,
//     }),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))