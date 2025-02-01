function evenPowersOf2(input){
    const n = Number(input[0]);
    for (let i = 0; i <= n ; i++) {
      if(i % 2 === 0){
    let result =  Math.pow(2,i);
      console.log(result);
    }}
}
evenPowersOf2(["3"]);