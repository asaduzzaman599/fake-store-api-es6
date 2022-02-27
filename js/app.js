const loadCatagories = async () => {

    const url = 'https://fakestoreapi.com/products/categories';

    const res = await fetch(url);
    const data = await res.json();
    clearContainer();
    console.log(data)
    data.forEach(catagory => {
        
        loadData(catagory);
        
        createCategoryMenu(catagory);
    });

}
loadCatagories();

const loadData =async (catagory) =>{
    
    const url = `https://fakestoreapi.com/products/category/${catagory}`;

    const res = await fetch(url);
    const data = await res.json();
    displayData(catagory,data);

}

const clearContainer = ()=>{
    const productContainer = document.getElementById('product-container');
    productContainer.textContent='';
}

const displayData = (catagory,products) => {
    const productContainer = document.getElementById('product-container');
    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add("text-center");
    categoryTitle.innerText=catagory;
    productContainer.appendChild(categoryTitle)
    const categoryProduct = document.createElement('div');
    categoryProduct.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");

    products.forEach(product => {
        // console.log(product)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
                        <div class="card h-100 py-3">
                        <img class="w-75 mx-auto" height="300px" src="${product.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title fw-bold">${product.title}</h5>
                          <p class="card-text text-justify">${product.description.slice(0,200)}...</p>
                          
                        </div>
                        <div class="d-flex justify-content-around">
                          <p><span class="fw-bold">Price:</span> ${product.price}$</p>
                          <p><span class="fw-bold">Rating:</span> ${product.rating.rate} ( ${product.rating.count})</p>
                          </div>
                        <div class="pb-3 mx-auto">
                        
                        <a href="#" class="btn btn-success">Buy Know</a>
                        </div>
                      </div>
        `

        categoryProduct.appendChild(div);
    });
    
    productContainer.appendChild(categoryProduct);
}

const createCategoryMenu =(category)=>{
    const categoryMenu = document.getElementById('category-dropdown');
    
    const li= document.createElement('li');

    li.innerHTML=`
    <a class="dropdown-item" onclick='categoryDataLoad("${category.replace("'","*")}")'>${category}</a>
    `;
    console.log(category)
    categoryMenu.appendChild(li);

}

const categoryDataLoad=(category) =>{
    console.log(category)
    clearContainer();
    loadData(category.replace("*","'"))
}