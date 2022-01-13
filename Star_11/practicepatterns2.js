string=""
let n=11
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        if(i==j||i+j==4){
        string+="#"
        }
        else{
            string+="*"
        }
    }
    string+="\n"
}
console.log(string)