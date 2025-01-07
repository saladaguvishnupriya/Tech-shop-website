fetch("https://fakestoreapi.com/products")
.then((response)=>{return response.json()})
.then((data)=>{
 const productData = data;    
 const containercards = productData.map((product)=>{ 
    const title=product.title;
    const description=product.description; 
    const truncatedTitle=title.length>20?`${title.substring(0,20)}...`:title;
    const truncatedDescription=description.length>20?`${title.substring(0,90)}...`:description;


    console.log(product);
    
    return(
        `<div class="productcard">
            <img src=${product.image} alt="${product.name}">
            <h2>${truncatedTitle}</h2>
            <p>${truncatedDescription}</p>
            <hr>
             <pre class="price1">$${product.price}</pre>
             <hr>
            <button class="btn3">Details</button>
            <button class="btn3">Add to Cart</button>
            </div>
            `
    )
   })
   const container = document.getElementById('container');
    container.innerHTML = containercards.join('');
}).catch(
    (error)=>{
        console.log(error);
        
    }
)