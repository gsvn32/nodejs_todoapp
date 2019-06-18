var bp=require('body-parser')
var mongoose=require('mongoose')
mongoose.connect('mongodb+srv://nikhil:test@cluster0-ol5sc.mongodb.net/todo?retryWrites=true&w=majority')

//schema
var todos=new mongoose.Schema({
  i:String

})

var Todo=mongoose.model('Todo',todos)


var urlencodedparser=bp.urlencoded({extended: false})
module.exports = function(app){

app.get('/todo',function (req,res) {
  console.log(req.url);
  Todo.find({},function (err,data) {
    if(err) throw err;

    res.render('todo',{todos:data})

  })

})

app.post('/todo',urlencodedparser,function (req,res) {
  var newtodo=Todo(req.body).save(function (err,data) {
    if(err)throw err
    console.log('item saved');
    res.json(data)
  })

})

app.delete('/todo/:item',function (req,res) {
Todo.find({i:req.params.item.replace(/\-/g,' ')}).remove(function (err,data) {
  if(err) throw err

  res.json(data)
})
})
}
