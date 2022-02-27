const loadData = async () => {
    
    const url = 'https://fakestoreapi.com/products?fbclid=IwAR18RyTA2AaLhdBU__kyoz7TORAMs265eFSuhVbFT7iVgdTzVOUlKsGNuxg';

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

}
loadData();

const displayProduct = (products) =>{
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        console.log(profuct)
        
    });
}