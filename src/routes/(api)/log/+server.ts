import fs from 'fs';

export async function GET({message='hi', level='info'}:{message:string, level?:string}) {

   const log= {
        msg:message,
        level:level,
        time:new Date().toUTCString(),
    }
    console.log('* FS is : ', fs);
    fs.appendFile('logs.txt',log.toString(),err=>{
        
        console.log("in file")
        if (err) {
            console.error('Error writing to log file: o', err);
        }
         else {
            console.log('Log entry saved to file');
        }
    })
    console.log("out file", log)
    const test="test";
    return new Response(test , {
		headers: {
			'Content-Type': 'application/json'
		}
	});
    
}