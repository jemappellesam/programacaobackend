const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Página principal</h1>")
})

// Rota para o formulário
app.get('/formulario', (req, res) => {
    const html = `
        <form method='get' action='/enviar-formulario'>
            <div>
                <label>Nome</label><br> 
                <input name='nome' type='text' />
            </div>
            <div>
                <label>Ano de Nascimento</label><br> 
                <input name='anoNascimento' type='text' />
            </div>
            <div>
                <label>Mensagem</label><br>
                <textarea name='mensagem' cols='20' rows='5'></textarea>
            </div>
            <div><button type='submit'>Enviar</button></div>
        </form>
    `
    res.send(html)
})

// Rota para enviar o formulário
app.get('/enviar-formulario', (req, res) => {
    const nome = req.query.nome
    const anoNascimento = parseInt(req.query.anoNascimento)
    const mensagem = req.query.mensagem

    const idade = new Date().getFullYear() - anoNascimento

    const html = `
        Olá, ${nome}<br>
        Sua idade é: ${idade} anos<br>
        Sua mensagem é: ${mensagem}
    `
    res.send(html)
})

// Rota para calcular a idade com base no ano de nascimento
app.get('/idade/:ano', (req, res) => {
    const ano = parseInt(req.params.ano)
    const idade = new Date().getFullYear() - ano
    res.send(`A sua idade é: ${idade} anos`)
})

// Rota sobre
app.get('/sobre', (req, res) => {
    const lorem = `Tempor voluptate consectetur adipisicing velit anim. Exercitation amet sunt magna aliqua dolore dolor culpa non minim officia sit. Excepteur nostrud aute nulla adipisicing officia ullamco officia dolore ad sit pariatur consequat ipsum nostrud. Aliqua ullamco in aliqua sint tempor elit deserunt culpa est est. Cillum Lorem reprehenderit aliquip voluptate consequat.
                    Ea excepteur reprehenderit aute voluptate mollit. Cillum laborum amet elit aliqua irure mollit labore ipsum ut reprehenderit ex velit ut. Enim consequat occaecat reprehenderit ullamco consequat tempor. Aliqua anim laborum ad sunt aliqua officia cupidatat laborum eu exercitation adipisicing reprehenderit.`
    res.send(lorem)
})

// Rotas dinâmicas para clientes
app.get('/clientes/:id_cliente', (req, res) => {
    const cliente = req.params.id_cliente
    res.send("Página do cliente: " + cliente)
})

app.listen(3000, () => {
    console.log("Servidor está escutando...")
})
