string=""
let n=5
for(let i=0;i<1;i++){
    for(let j=-n;j<n+1;j++){
        if(i==0 && j==0){
            string+="o"
        }
        else{
            string+=" "
        }
    }
    string+='\n'
}
for(let k=0;k<n-1;k++){
    for(let i=1;i<n+1;i++){
        for(let j=-n;j<n+1;j++){
            if(i>0 && i<n+1){
                if(j-i==0){
                    string+="\\"
                }
                else if(Math.abs(j)-i==0){
                    string+="/"
                }
                else if(Math.abs(i)-Math.abs(j)<=n && Math.abs(i)-Math.abs(j)>=1){
                    string+="-"
                }
                else{
                    string+=" "
                }
            }
        }
        string+="\n"
    }
}
for(let i =n*(n-1)+1;i<n*n+1;i++){
    for(let j=-n;j<n+1;j++){
        if((i>(n-1)*n) && j>=(-1) && j<=1){
            if(j==-1 || j==1){
                string+="|"
            }
            else{
                string+="="
            }
        }
        else{
            string+=" "
        }
        }
        string+="\n"
    }
for(let i=n*n+1;i<n*n+2;i++){
    for(let j=-n;j<n+1;j++){
        string+="="
    }
    string+="\n"
}
console.log(string)
