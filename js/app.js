const loadData = async () => {

    const url = 'https://fakestoreapi.com/products?fbclid=IwAR18RyTA2AaLhdBU__kyoz7TORAMs265eFSuhVbFT7iVgdTzVOUlKsGNuxg';

    const res = await fetch(url);
    const data = await res.json();

    displayProduct(data);

}
loadData();

const displayProduct = (products) => {
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        console.log(product)
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

        productContainer.appendChild(div);
    });
}