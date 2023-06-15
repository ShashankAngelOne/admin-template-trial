export function isObjectEmpty(objectName:object){
    return  Object.keys(objectName).length === 0;
}

export function isNull(obj:any){
    return obj==null;
}