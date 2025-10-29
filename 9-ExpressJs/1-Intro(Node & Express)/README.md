## Express.js Intro

Simple Node + Express server to learn the basics: routes and responses.

### 🚀 How to Run
```bash
cd 9-ExpressJs/1-Intro(Node\ &\ Express)
npm install
node index.js
# or
npx nodemon index.js
```

### 📝 Author

```
Name     : Virat Rai
Email    : viratrai255075@gmail.com
LinkedIn : https://www.linkedin.com/in/viratrai100
GitHub   : https://github.com/viratrai100
```

---

## 🎯 Summary & Purpose
Start an Express server and respond to basic GET routes.

### 📘 What I Learned
- Setting up Express and creating routes
- Sending JSON and text responses
- Basic project structure

### 🧰 Technology Used
- Node.js
- Express.js

### 🔧 How to Run From Scratch
```bash
npm init -y
npm install express
echo "const express=require('express');const app=express();app.get('/',(_,res)=>res.send('Hello'));app.listen(3000);" > index.js
node index.js
```