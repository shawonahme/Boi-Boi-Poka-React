// local storage  e data ase ki na seta check dibo  
const getWishListBook = ()=>{
 const myWishList = localStorage.getItem('wish-list')
 if(myWishList){

    const myWishListPar = JSON.parse(myWishList);
    return myWishListPar
 }
 else{
    return []
 }


}

const addToWishList = (id)=>{
    const  myWishListset =getWishListBook()

    if(myWishListset.includes(id)){
      
     alert('This id aleray incluexds')
        
    }
    else{
        myWishListset.push(id);
        const myWishListStr =JSON.stringify(myWishListset)
        localStorage.setItem('wish-list',myWishListStr)
        alert('succefully this book add your wish list')
    }
}

export{ getWishListBook, addToWishList}

