import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.log("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("conexao feita com sucesso ");
});

const app =express();
app.use(express.json());

const livros =[
    {
        id:1,
        titulo: "O hobbit"
    },
    {
        id: 2,
        titulo: "O senhor dos aneis"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}


app.get("/", (req, res) =>{
    res.status(200).send("Curso de Node.js");
});


app.get("/livros", (req, res) =>{
    res.status(200).json(livros);
});


app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});


app.post("/livros", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado");
});


app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json("Titulo atualizado");
});


app.delete("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido");
});



export default app;


//
