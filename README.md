# Node.js Backend Assignment 🚀

This is a **Node.js REST API** that loads users, posts, and comments from **JSONPlaceholder** and stores them in **MongoDB**.  
It provides **CRUD operations** for Users, Posts, and Comments.

## 📌 Features
- **Load users, posts, and comments** into MongoDB from JSONPlaceholder.
- **Retrieve users** along with their posts and comments.
- **Create, update, and delete users, posts, and comments**.
- **Uses MongoDB** for persistent storage.
- **RESTful API following best practices**.

---

## ⚙️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **External API**: JSONPlaceholder (https://jsonplaceholder.typicode.com/)
- **Hosting**: Can be deployed on **Railway, Render, or Fly.io**
- **Development Tools**: Postman for API testing

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/vinnu382910/swift
cd swift

***File Structure***

📦 Your-Project
┣ 📂 controllers
┃ ┣ 📜 userController.js
┃ ┣ 📜 postController.js
┃ ┣ 📜 commentController.js
┣ 📂 models
┃ ┣ 📜 userModel.js
┃ ┣ 📜 postModel.js
┃ ┣ 📜 commentModel.js
┣ 📂 routes
┃ ┣ 📜 userRoutes.js
┃ ┣ 📜 postRoutes.js
┃ ┣ 📜 commentRoutes.js
┣ 📜 .env
┣ 📜 server.js
┣ 📜 package.json
┣ 📜 README.md

1️⃣ Load Users, Posts & Comments

[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net"
    },
    "posts": [
      {
        "id": 1,
        "userId": 1,
        "title": "sunt aut facere repellat",
        "body": "quia et suscipit recusandae...",
        "comments": [
          {
            "id": 1,
            "postId": 1,
            "name": "id labore ex et quam laborum",
            "body": "laudantium enim quasi est..."
          }
        ]
      }
    ]
  }
]

2️⃣ User Endpoints
Method	Endpoint	Description
GET	/api/users	Fetch all users
GET	/api/users/:userId	Get a specific user (with posts & comments)
POST	/api/users	Add a new user
DELETE	/api/users	Delete all users
DELETE	/api/users/:userId	Delete a specific user

📌 Example Response (GET /api/users/1)
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "posts": [
    {
      "id": 1,
      "title": "sunt aut facere repellat",
      "body": "quia et suscipit recusandae...",
      "comments": [
        {
          "id": 1,
          "postId": 1,
          "name": "id labore ex et quam laborum",
          "body": "laudantium enim quasi est..."
        }
      ]
    }
  ]
}



3️⃣ Post Endpoints
Method	Endpoint	Description
GET	/api/posts	Fetch all posts
GET	/api/posts/:postId	Get a post with its comments
POST	/api/posts	Add a new post
DELETE	/api/posts/:postId	Delete a post

📌 Example Response (GET /api/posts/1)
{
  "id": 1,
  "userId": 1,
  "title": "sunt aut facere repellat",
  "body": "quia et suscipit recusandae...",
  "comments": [
    {
      "id": 1,
      "postId": 1,
      "name": "id labore ex et quam laborum",
      "body": "laudantium enim quasi est..."
    }
  ]
}

4️⃣ Comment Endpoints
Method	Endpoint	Description
GET	/api/comments	Fetch all comments
GET	/api/comments/:postId	Get comments for a specific post
POST	/api/comments	Add a new comment
DELETE	/api/comments/:commentId	Delete a comment

📌 Example Response (GET /api/comments/1)

{
  "id": 1,
  "postId": 1,
  "name": "id labore ex et quam laborum",
  "body": "laudantium enim quasi est..."
}


🎯 Future Enhancements
✅ Add authentication (JWT)
✅ Add pagination for users & posts
✅ Implement GraphQL API
✅ Rate limiting for API protection


🤝 Contribution Guide
Fork the repository.
Create a new branch (feature-new-api).
Commit your changes (git commit -m "Added new feature").
Push to GitHub (git push origin feature-new-api).
Submit a Pull Request.

📜 License
This project is open-source and available under the MIT License.

Developed By:- @vinnu382910
