<script>
   
	import FileUploadPopup from "$components/FileUploadPopup/FileUploadPopup.svelte";
import Table from "$lib/components/Table/Table.svelte";
    import TableVerticle from "$lib/components/Table/TableVerticle.svelte";

    let upload_type="manuel";
    //import {table3Data, table1Data,table2Data,currentDayTableData} from './mockData';
    
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
 
 let openFileUploadPopup=false ;


 function handlePlayBtn(){
    openFileUploadPopup=true;
 }

</script>


<div class="tw-w-full">
    
<div class="tw-flex tw-flex-row tw-justify-center tw-mt-12 tw-mb-8 ">
    <select class="tw-text-lg tw-p-3">
        <option>All Server View</option>
        <option>GM1</option>
        <option>GM2</option>
        <option>GM3</option>
        <option>GM4</option>
  
    </select>
</div>
<FileUploadPopup isOpen={openFileUploadPopup} onClose={()=>{openFileUploadPopup=false}} onUploadFile={()=>{openFileUploadPopup=false}}/>
<div>
    <span class="tw-flex tw-justify-center tw-text-xl tw-font-bold tw-mb-3">
        Holding File Upload
    </span>
</div>
<div class="tw-flex tw-flex-row tw-justify-center tw-items-center  tw-text-base">
    <form action="" >
    <input type="radio" name="upload_type" value="manuel"  bind:group={upload_type} >
    <label for="manuel" class="tw-mr-7 tw-ml-3"> Manuel</label>
    <input type="radio" name="upload_type" value="auto" bind:group={upload_type} disabled>
    <label for="auto" class="tw-mr-6 tw-ml-3 disabled" > Auto</label><br>
    </form>


<button class="tw-m-4" on:click={handlePlayBtn}><img src='src/lib/assets/myicons/play.png' alt="Play" class="tw-h-8 {upload_type=="auto"?"disabled": "tw-opacity-100"}"></button>

</div>
<div class="tw-m-16">
<Table tableData={table1Data} />
</div>
<div class="tw-m-16">
<TableVerticle tableData={table2Data} pagination={true}/>
</div>

<div>
    <span class="tw-flex tw-justify-center tw-text-xl tw-font-bold tw-mb-3">
        Deatailed View: GM1
    </span>
</div>

<div class="tw-m-16 tw-w-1/3">
    <div class="tw-justify-start tw-flex tw-w-8/12 tw-py-4 tw-px-4 tw-text-lg tw-font-medium">
        {"process"}
    </div>
    <div class="tw-flex">
    <div class="tw-items-center">
    <TableVerticle tableData={table3Data}/>
</div>
</div>
    </div>
</div>




<style>
    .disabled{
        opacity: 0.40;
    }

  
    
</style>





