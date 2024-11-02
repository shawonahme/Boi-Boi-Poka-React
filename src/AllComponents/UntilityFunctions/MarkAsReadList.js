
//.local stoarge e er modhe data ase ki na seta check korar function.

const getStoredBookList = ()=>{

    const readListStr = localStorage.getItem('read-list');
    if(readListStr){
        const readListPar = JSON.parse(readListStr);

        return readListPar

    }
    else{
        
        return []
    }
}

// 
const addToBookList = (id)=>{

    const readBookList = getStoredBookList();
   if(readBookList.includes(id)){
    console.log(id, 'alerady in local stoarger')
   }
   else{
    readBookList.push(id)
    const readListStr = JSON.stringify(readBookList)
     localStorage.setItem('read-list',readListStr)
     alert('book add in read list succesfully')
   }
}
export{
    addToBookList,getStoredBookList
}