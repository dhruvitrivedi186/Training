string=""
let n=5
for(let i=0;i<n;i++)
{
    for(let j=0;j<n;j++){
       if(i==j||i+j==n-1){
        string+="#"
       }
       else{
           string+="*"
       }    
    }
    string+="\n"
}
console.log(string)