
let table1Data ={
    columns:[
        { name: 'Start', fieldName:'start'},
        { name: 'Total Rows', fieldName:'totalRows'},
        { name: 'Duplicate', fieldName:'duplicate'},
        { name: 'Invalid Rows', fieldName:'invalidRows'},
        { name: 'Upload to Specific GMS', fieldName:'uploadToGMS'},
        { name: 'End', fieldName:'end'},
    ],
    data:[{'start':'NA','totalRows':'NA','duplicate':'NA','invalidRows':'NA','uploadToGMS':'NA','end':'NA'}]
}

let table2Data ={
    columns:[
        { name: 'Server', fieldName:'server'},
        { name: 'Current Day: Records Uploaded', fieldName:'currentDay'},
        { name: 'Previous Day: Records Uploaded', fieldName:'previousDay'},
        { name: ' Current Processing Status', fieldName:'status'},
        { name: 'Details', fieldName:'details'},
    ],
    data:[
        {'server':'GM1','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM2','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM3','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM4','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM5','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM6','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM7','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
        {'server':'GM8','currentDay':'NA','previousDay':'NA','status':'NA','deatils':'NA'},
    ]
}

let currentDayTableData={
    columns:[
        {name:'Rows Updated', fieldName:'rows'},
        {name:'Time Taken', fieldName:'timeTaken'},
    ],
    data:[
        {'rows':'NA','timeTaken':'NA'}
    ]
}


let table3Data={
    columns:[
        {name:'File Name', fieldName:'fileName'},
        {name:'Uploaded by', fieldName:'uploadBy'},
        {name:'Total rows', fieldName:'totalRows'},
        {name:'Duplicate rows', fieldName:'duplicateRows'},
        {name:'Invalid rows', fieldName:'invalidRows'},
        {name:'Uploaded rows', fieldName:'uploadedRows'},
        {name:'Start', fieldName:'start'},
        {name:'End', fieldName:'end'},
        {name:'Current Status', fieldName:'status'},
    ],
    data:[
        {'fileName':'NA', 'uploadBy':'NA','totalRows':'NA','duplicateRows':'NA', 'invalidRows':'NA','uploadedRows':'NA','start':'NA','end':'NA','status':'NA'}
    ]
}
