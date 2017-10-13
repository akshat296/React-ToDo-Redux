export function createBoxes (box)
{
   // console.log("box",box);
    return {type : 'SUCCESS', 
            payload:box};
}
export function deleteBoxes (box)
{
    return {type : 'DELETE',
            payload:box};
}
export function doneBoxes (box)
{
    return {type : 'DONE',
            payload:box};
}
export function hideBoxes (box)
{
    return {type : 'HIDE',
            payload:box};
}