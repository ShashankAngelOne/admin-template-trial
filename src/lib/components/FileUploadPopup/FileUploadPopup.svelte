
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1394.0.min.js">
    export let isOpen= false;
    export let onUploadFile=()=>{};
    export let onClose =()=>{};
    import {handleFileUpload} from './awshelper';
    import {isNull} from '$lib/utils/helpers/utility';
    let file=null;
    $: filename=isNull(file)?'Choose file':file.name;
    let uploadType="regular";
    const selectFile=(event)=>{
         file=event?.target.files[0];
   }

   function onClosePopUp(){
    onClose();
    file=null;
    filename=null;
   }
   function onUpload(){
    handleFileUpload(file);
    onUploadFile();
    file=null;
    filename=null;
   }
</script>
  {#if isOpen}
<div class="tw-fixed tw-inset-0 tw-flex tw-justify-center tw-items-center tw-z-50 tw-bg-black tw-bg-opacity-50 visible:hidden">
    <div class="tw-card tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-md tw-min-w-[20rem]">
      <div class="tw-card-title tw-flex tw-justify-between tw-items-center tw-mb-4">
        <h2 class="tw-text-xl tw-font-bold">Manuel Upload - Holding/Client Data</h2>
        <button class="tw-text-gray-500 tw-hover:text-gray-700" on:click={onClosePopUp}>
          <img src="src/lib/assets/myicons/cancel.png" alt="Cancel" class="tw-h-5 tw-opacity-100 tw-m-2">
        </button>
      </div>
      <hr class="tw-border-gray-200">
      <div class="tw-card-body">
      <div class="tw-mb-4 tw-flex ">
        <label class="tw-block tw-font-semibold ">Upload Type</label>
        <div class="tw-flex tw-items-center tw-mx-auto">
          <label class="tw-mr-2">
            <input type="radio" name="uploadType" value="regular" class="tw-mr-1" bind:group={uploadType}>
            Regular
          </label>
          <label class="tw-mr-2">
            <input type="radio" name="uploadType" value="adhoc" class="tw-mr-1" disabled bind:group={uploadType}>
            <label class="disabled">Adhoc</label>
          </label>
        </div>
      </div>
    

      <div class="input-group tw-flex tw-mb-4 tw-justify-between">
        <label class="tw-block tw-font-semibold tw-mb-1 tw-ml-2 tw-mr-6 tw-items-center tw-flex">File</label>
        <div class="custom-file">
          <label class="custom-file-label" >{filename?filename:'Choose file'}</label>
          <input type="file" class="custom-file-input" id="inputGroupFile01"  accept=".csv,.txt,.xlsx,.xls " on:change={selectFile}
            aria-describedby="inputGroupFileAddon02">
            <img src="src/lib/assets/myicons/addFile.svg" alt="Add File" class="custom-file-btn">
        </div>
      </div>


      <div class="tw-flex tw-justify-center tw-padding">
      <button class="button {isNull(file)?'disabled':''} " disabled={isNull(file)} on:click={onUpload}>Upload</button>
      </div>
    </div>
    </div>
  </div>
  {/if}


  <style>
    .disabled{
        opacity: 0.5;
    }
    .button{
        background-color: #1f2937;
        border-right: 1px solid #fff;
		font-weight: bold;
		color: #fff;
        font-size: 0.9rem;
        width: 5.5rem;
        height: 2.1rem;
        border-radius: 5px;
    }
    .custom-file-input{
        position: relative;
        z-index: 2;
        width: 12%;
        height: calc(2.25rem + 2px);
        margin: 0;
        opacity: 0;
    
    }
    .custom-file-label {
        top: 0;
        right: 0;
        left: 0;
        z-index: 1;
        height: calc(2.25rem + 2px);
        width: 82%;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
    }
    .custom-file-btn{
        position: absolute;
        height: 2rem;
        right: 0;
    }
    .custom-file{
        position: relative;    
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12rem;
        height: calc(2.25rem + 2px);
        margin-bottom: 0;

    }
    
</style>


