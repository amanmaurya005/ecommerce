const section = document.querySelector("section");


async function fetchdatafromurl(url){
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    showdata(result.products);
    
}

fetchdatafromurl("https://fakestoreapi.in/api/products");
function showdata(arr){
    arr.map((product)=>{
        const parent = document.createElement("div");
        parent.classList.add("product");

        const img = document.createElement("img");
        img.src = product.image;


        const title = document.createElement("h3");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = "$" + product.price;

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("button-group");

        const wishlistBtn = document.createElement("button");
        wishlistBtn.textContent = "Add to Wishlist";

        const cartBtn = document.createElement("buttonone");
        cartBtn.textContent = "Add to Cart";

        btnGroup.append(wishlistBtn);
        btnGroup.append(cartBtn);
        parent.append(img);
        parent.append( title);
        parent.append(price);
        parent.append( btnGroup);
        section.append(parent);


    })
}