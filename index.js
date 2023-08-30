// Import
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// Instance
const app = express();
const port = 5000;
const textBodyParser = bodyParser.text({
    limit: '20mb', 
    defaultCharset: 'utf-8'
});


// CORS
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));


app.use(cors());
// var corsOptions = {
//     origin: "http://localhost:8080"
//   };
  
//   app.use(cors(corsOptions));
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Header
app.options('/', (req,res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Methods', 'PUT');

    res.sendStatus(200);
});


// Listen
app.listen(port, (err)=>{
    if(err) {
        console.log('There was a problem: ', err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});

// ----------------------------------- TODOs -------------------------------------------

app.get('/api/products', async (req, res) => {
    try {
      const productsData = await fs.promises.readFile('./api/products.json');
      const products = JSON.parse(productsData);
    //   console.log(todos);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(products);
    } catch (error) {
      console.error('Error loading todos:', error);
      res.status(500).json({ error: 'Error loading todos' });
    }
  });
  
  /*
  app.put('/api/todos', async (req, res) => {
    const newTodos = req.body;
    try {
    await fs.promises.writeFile('./api/todos.json', JSON.stringify(newTodos));
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ message: 'Todos updated successfully' });
    } catch (error) {
      console.error('Error updating todos:', error);
      res.status(500).json({ error: 'Error updating todos' });
    }
  });
  
  app.post('/api/todos', async (req, res) => {
    const newTodo = req.body;
    try {
    console.log(req.body);
      const todosData = await fs.promises.readFile('./api/todos.json');
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      const todos = JSON.parse(todosData);
      todos.push(newTodo);
    await fs.promises.writeFile('./api/todos.json', JSON.stringify(todos, null, 2));
     
      res.status(200).json(newTodo);
    } catch (error) {
      console.error('Error adding new todo:', error);
      res.status(500).json({ error: 'Error adding new todo' });
    }
  });
// ------------------------------------ END --------------------------------------------
*/



// ----------------------------------- TODOs -------------------------------------------

// app.get('/api/todos', async (req, res) => {
//     try {
//       const todosData = await fs.promises.readFile('./api/todos.json');
//       const todos = JSON.parse(todosData);
//     //   console.log(todos);
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.json(todos);
//     } catch (error) {
//       console.error('Error loading todos:', error);
//       res.status(500).json({ error: 'Error loading todos' });
//     }
//   });
  
  
//   app.put('/api/todos', async (req, res) => {
//     const newTodos = req.body;
//     try {
//     await fs.promises.writeFile('./api/todos.json', JSON.stringify(newTodos));
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       res.json({ message: 'Todos updated successfully' });
//     } catch (error) {
//       console.error('Error updating todos:', error);
//       res.status(500).json({ error: 'Error updating todos' });
//     }
//   });
  
//   app.post('/api/todos', async (req, res) => {
//     const newTodo = req.body;
//     try {
//     console.log(req.body);
//       const todosData = await fs.promises.readFile('./api/todos.json');
//      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
//       const todos = JSON.parse(todosData);
//       todos.push(newTodo);
//     await fs.promises.writeFile('./api/todos.json', JSON.stringify(todos, null, 2));
     
//       res.status(200).json(newTodo);
//     } catch (error) {
//       console.error('Error adding new todo:', error);
//       res.status(500).json({ error: 'Error adding new todo' });
//     }
//   });
// // ------------------------------------ END --------------------------------------------

