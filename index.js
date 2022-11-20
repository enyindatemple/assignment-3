const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> console.log("Hello, the server is up..."));
let jss1;
let jss2;
let jss3;

const newBrainAcademy = [
    jss1=[
        {
            name: 'ENYINDA Temple Hanachor',
            dob: "14/02/2000",
            gender: "male",
            reg_no: "0701001",
            state: "Rivers"
        },
        {
            name: 'PROGRESS Chisom',
            dob: "14/02/2006",
            gender: "male",
            reg_no: "0701002",
            state: "Taraba State"
        },
        {
            name: 'MIRIAN Chisom',
            dob: "09/09/2009",
            gender: "female",
            reg_no: "0701003",
            state: "Rivers"
        },
        {
            name: 'PROGRESS Ezinne',
            dob: "18/08/2001",
            gender: "female",
            reg_no: "0701004",
            state: "Imo State"
        },
        {
            name: 'PROSPER Okechukwu',
            dob: "05/05/2007",
            gender: "male",
            reg_no: "0701005",
            state: "Abia State"
        }
    ],
    jss2=[
        {
            name: 'ENYINDA Victory',
            dob: "14/09/1999",
            gender: "male",
            reg_no: "0801001",
            state: "Rivers"
        },
        {
            name: 'PROGRESS Ugorji',
            dob: "17/12/2001",
            gender: "female",
            reg_no: "0801002",
            state: "Benue State"
        },
        {
            name: 'MIRABEL Chisom',
            dob: "09/11/2007",
            gender: "female",
            reg_no: "0801003",
            state: "Rivers"
        },
        {
            name: 'PATIENCE Ezinne',
            dob: "18/08/1998",
            gender: "female",
            reg_no: "0801004",
            state: "Imo State"
        },
        {
            name: 'PROSPER Ogechi',
            dob: "05/09/2002",
            gender: "female",
            reg_no: "0801005",
            state: "Abia State"
        }
    ],
    jss3=[
        {
            name: 'ALERUCHI Victor',
            dob: "24/09/1997",
            gender: "male",
            reg_no: "0901001",
            state: "Rivers"
        },
        {
            name: 'ABEH Joshua',
            dob: "07/10/1998",
            gender: "male",
            reg_no: "0901002",
            state: "Benue State"
        },
        {
            name: 'MIRABEL Chinaza',
            dob: "01/01/2007",
            gender: "female",
            reg_no: "0901003",
            state: "Enugu State"
        },
        {
            name: 'PATIENCE Ezinne',
            dob: "18/09/1997",
            gender: "female",
            reg_no: "0901004",
            state: "Imo State"
        },
        {
            name: 'GODSPOWER Ogechi',
            dob: "05/05/1998",
            gender: "male",
            reg_no: "0901005",
            state: "Rivers State"
        }
    ]
];

app.get('/', (req, res)=> res.json(newBrainAcademy));

app.post('/ss1', (req, res)=>{
    const ssOne = req.body;
    res.json({...newBrainAcademy, ssOne});
});