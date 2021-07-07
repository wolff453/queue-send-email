export default function insertHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap" rel="stylesheet">
        <title>Document</title>
    
           <style>
               *{
       margin: 0;
       padding: 0;
       text-decoration: none;
       font-family: 'Noto Sans JP', sans-serif;
    
    }
    
    header {
       background: linear-gradient(135deg,#00b9b9 0%,#00c778 100%);
       display: flex;
       justify-content: center;
       height:100px;
    }
    
    .meio{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       margin-top: 50px;
       flex-wrap:wrap;
    }
    @media(max-width:900px){
        .year{
            width:100px;
        }
        h1{
            font-size:10px;
            text-align:center;
        }
        footer{
            height:30px;
        }
        footer p {
            font-size:13px;
        }
    }
    
    .meio a {
       margin-top: 30px;
    }
    
    .meio h1{
       font-size:25px;
    }
    
    
footer{
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    height: 80px;
    color: white;
    position: fixed;
    width: 100%;
    bottom: 0;
}
.year{
    margin-top:30px;
}
.button-read{
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    background: linear-gradient(
135deg
,#00b9b9 0%,#00c778 100%);
    border: 1px solid black;
transition: 1s ease;
margin-top:30px;
cursor:pointer;
border-radius:10px 10px;
}
.button-read a {
    color:white;

}
.button-read:hover{
    opacity: 0.5;
}
           </style>
    
        
    </head>
    <body>
        <header>
            <div class="logo">
                <img src="http://localhost:3200/assets/logob.png" alt="Foto Monitora">
            </div>
        </header>
    
        <div class="meio">
            <h1 class="text">Olá ${data}! Seja bem-vindo ao sistema da Monitora.</h1>
            <img class="year" src="http://localhost:3200/assets/images.png" alt="">
            <button class="button-read"><a href="https://www.monitoratec.com.br/br#about">Leia mais sobre nós</a></button>
            </div>
    
        <footer>
            <p>Copyright © 2021 - Developed by George Lobo</p>
        </footer>
    </body>
    </html>
    
    `
}








/* HTML DA SKY
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            text-decoration: none;
            font-family: 'Noto Sans JP', sans-serif;

        }

        header {
            background: #ff0000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90px;
        }

        .meio {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
        }

        .meio a {
            margin-top: 10px;
        }

        .meio h1 {
            font-size: 25px;
        }

        footer {
            background-color: #333;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            height: 100px;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
        }

        .years {
            width:400px;
            margin-top: 15px;
            border-radius: 20px 20px;
        }

        .logo img {
            width: 70px;
            background: white;
        }

        .button-read {
            padding-right: 30px;
            padding-left: 30px;
            padding-top: 10px;
            padding-bottom: 10px;
            background: #ff0000;
            border: 1px solid black;
            transition: 1s ease;
            margin-top: 30px;
            cursor: pointer;
            border-radius: 5px 5px;
        }

        .button-read a {
            color: white;

        }

        .button-read:hover {
            opacity: 0.5;
        }

        footer {
            background: red;
        }
        .photo-1 img{
            width: 100px;
        }
    </style>


</head>

<body>
    <header>
        <div class="logo">
            <img src="http://localhost:3200/assets/sky-logo.svg" alt="">
        </div>
    </header>

    <div class="meio">
        <h1>Olá ${data}, seja bem-vindo ao sistema da SKY</h1>
        <img class="years" src="http://localhost:3200/assets/349175.jpg" alt="">
        <button class="button-read"><a href="https://www.sky.com.br/pacotes-e-combos#undefined">Leia mais sobre nós</a></button>
    </div>

   

    <footer>
        <p>Copyright 2021 - Desenvolvido por George Lobo</p>
    </footer>
</body>

</html>
*/