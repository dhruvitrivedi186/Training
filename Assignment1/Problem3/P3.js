let str=[
    ["Apple","1"],
    ["Banana","2"],
    ["Papaya","3"],
    ["Lemon","6"],
]
//console.log(str[0][1])

for(let i=0;i<str.length;i++)
{
        for(let j=0;j<str[i].length;j++)
        {
            console.log('[',i,',',j,'] ',str[i][j])
        }
}