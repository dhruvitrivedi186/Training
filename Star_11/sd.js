string=""
let n=5
for(i=0;i<n+n;i++){
    for(j=0;j<n+n;j++){
        if(Math.abs(i-j)>5 || i+j>14 || i+j<4 || i<(n) && j>(n)-1 || i>(n)-1 && j<(n)){
        string+=" "
        }
        else{
            string+="@"
        }
    }
    string+="\n"
}
console.log(string)