
import { S3Client, PutBucketCorsCommand,GetBucketCorsCommand, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

export async function handleFileUpload(file) {
   const s3Client = new S3Client({
      region:'ap-south-1',
      credentials: {
         //---SHREYA JINDAL USER
         // accessKeyId: 'AKIA2U6DQALA2QJBXT72',
         // secretAccessKey:'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',
         //--- s3-arom-uat-rw-policy user
         accessKeyId: 'AKIA2U6DQALA2W4KONK5',
         secretAccessKey:'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',
      }
    });

   const bucketName = 'arom-uat';
   const fileContent = file;
   const fileName = fileContent.name;
   console.log("file in aws", file)
 
   const CorsParam=[{
      AllowedHeaders: ['*'],
      AllowedMethods: ['GET', 'PUT', 'POST', 'DELETE','HEADO'],
      AllowedOrigins: ['*'],
      ExposeHeaders: [],
      MaxAgeSeconds: 3000,
   
   }]
   const params = {
     Bucket: bucketName,
     Key: `BOD/03-06-2023/${fileName}`,
     Body:fileContent,
     CORSConfiguration: {
      CORSRules:CorsParam,
    },
    ExpectedBucketOwner:'732165046977'
   };
 
   const run = async () => {      
      const command = new PutObjectCommand(params);
      try {
         await s3Client.send(command)
         .then(() => {
            console.log('File uploaded successfully');
          })
          .catch((err) => {
            console.log('Error uploading file:', err);
          });
      } catch (error) {
      console.log('Error uploading file:', error);
      };
   }
   run();
}





  //-----getFile
      // const command = new GetObjectCommand(params);
      // try {
         // await s3Client.send(command)
         // .then((data) => {
         //    console.log('File uploaded successfully', data.Body?.transformToByteArray());
         //  })
         //  .catch((err) => {
         //    console.log('Error uploading file:', err);
         //  });



      // CORSRules: [
      //   {
      //     // Allow all headers to be sent to this bucket.
      //     AllowedHeaders: ["*"],
      //     // Allow only GET and PUT methods to be sent to this bucket.
      //     AllowedMethods: ["GET", "PUT"],
      //     // Allow only requests from the specified origin.
      //     AllowedOrigins: ["*"],
         
      //     // Allow the entity tag (ETag) header to be returned in the response. The ETag header
      //     // The entity tag represents a specific version of the object. The ETag reflects
      //     // changes only to the contents of an object, not its metadata.
      //    //  ExposeHeaders: ["ETag"],
      //    //  // How long the requesting browser should cache the preflight response. After
      //    //  // this time, the preflight request will have to be made again.
      //    //  MaxAgeSeconds: 3600,
      //    ExposeHeaders: ["ETag"],
      //   },
      // ],
      // Owner:[
      //    'c8e021b01e9acdf2d6e5f723d3ba51f96b1de9c7eebae2e007b679c17c576c6b'
      // ]






 
 
 
 





