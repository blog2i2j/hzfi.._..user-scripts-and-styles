const sum = (a,b)=> {
    
    const arr1 = a.split('').map(Number).reverse();
    const arr2 = b.split('').map(Number).reverse();

    const rz = [ ]
    // 数组1 数组2 索引 进位
    const fn = (arr1, arr2 , index, j ) => {
        const len1 = arr1.length
        const len2 = arr2.length
        const maxLen = len1 > len2 ? len1 : len2
        if ( index < maxLen ) {
          const sum = Number(  arr1[ index ]  || 0) + Number(  arr2[ index ] || 0  )  + j 
          if ( sum  > 9 ) {
            j = 1
          } else {
            j = 0
          }

          console.log('sum', sum );
          
          rz[ index ] = String(sum).at(-1) 
          fn(  arr1, arr2, index + 1 , j)
        }
    }
    fn( arr1,arr2, 0 ,0 )
    console.log('r', rz.reverse().join('') );

}

sum(a,b)
