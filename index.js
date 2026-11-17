import express from 'express'
import { todoData } from './dummy-data.js'
const app = express()
const port = 3000
app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
  res.json(todoData);
})

app.post('/data', (req, res)=>{
  const newData = req.body;
  todoData.push(newData);
  res.send("Added")
});

app.put('/data/:id', (req,res) =>{
  const newData = req.body;
  const index = todoData.findIndex((data) => data.id == req.params.id);
  if(!index)
      res.send("wrong id")
  todoData[index] = newData;
  res.send("update successful")
});

app.delete('/data/:id', (req,res) =>{
  const delData = req.body;
  const index = todoData.findIndex((data) => data.id == req.params.id);
  if(!index)
      res.send("wrong id")
  todoData.splice(index, 1);
  res.send("Delete successful")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

