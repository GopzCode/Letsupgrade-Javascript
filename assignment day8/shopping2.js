let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "men-27s-plain-t-shirt-500x500.jpg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpeg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.png",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpeg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "1608t09505-mayra-m-original-imaemtfpmqubdu2p.jpeg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "White Flared Kurthi",
        size: "M",
        color: "White",
        price: 850,
        image: "VDMF22014-1.jpg",
        description: "Beautifull white kurti",
      },
      {
        id: 8,
        name: "Black dress",
        size: "S",
        color: "Black",
        price: 500,
        image: "s-maxy-dress-196-black-daevish-original-imafnxw5wwtgjp3q.jpeg",
        description: "Daily wear black dress",
      },
      {
        id: 9,
        name: "Anarkali",
        size: "L",
        color: "Green",
        price: 2000,
        image: "product6.jpg",
        description: "Party wear anarkali",
      },
      {
        id: 10,
        name: "Slim Fit Jeans",
        size: "32",
        color: "Black",
        price: 1050,
        image: "product6.jpg",
        description: "Slim fit jeans for girls",
      },
      {
        id: 11,
        name: "T-shirt",
        size: "M",
        color: "Yellow",
        price: 750,
        image: "product6.jpg",
        description: "Cropped Yellow t-shirt",
      },
      {
        id: 12,
        name: "Salwar",
        size: "S",
        color: "Brown",
        price: 1500,
        image: "-1117Wx1400H-461085164-brown-MODEL.webp",
        description: "Party wear Designer Salwar",
      },
  ];

  cart=[];
  let count=0;
  function Display(productData, category="productwrapper") {
      let productString="";
      productData.forEach(function(product, index){
        let {id,name,price,size,color,image,description}=product;
     
      if (category== "productwrapper") {

        productString+= `  <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;     
      }
      else if (category="cart") {
        productString+= `  <div class="product">
        <div class="prodimg">
          <img src="images/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;     
          
      }
    });
    document.getElementById(category).innerHTML = productString;
  }
  Display(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    Display(searchedProducts);
  }
  let flag=false;
  function addToCart(id) {
    let pro = getProductByID(products, id);
    cart.forEach(function(element){
        if(element.id==pro.id){
            flag=true;   
        }
    })
    if (flag) {
        alert("Already added");
      return 0;
    }
    cart.push(pro);
    count+=1;
    
    //console.log(count);
    //document.getElementById("count").innerHTML=count;
    Display(cart, "cart");
  }
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }

  function removeFromCart(id) {
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
    cart.splice(index, 1);
    count-=1;
    Display(cart, "cart");
}

function Filter() {
    let max=document.getElementById("max").value;
    let min=document.getElementById("min").value;
    let search= products.filter(function(product) {
        return product.price<=max && product.price>=min;
    });
    //console.log(search);
    Display(search);
    
}