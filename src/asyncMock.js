
const products = [
    {
        id:'1',
        name: 'Pollo Tempura',
        price: 4990,
        category: 'Tempuras', 
        img:'../img/tempura.png',
        stock: 12,
        description: 'Pollo tempurizado con queso crema y palta, con cubierta de arroz en panko'
    }, 

    {
        id:'2',
        name: 'Pollo Algas',
        price: 3800,
        category: 'Algas', 
        img:'../img/Sushi_frio.png',
        stock: 6,
        description: 'Pollo tempurizado con  queso crema y palta'
    }, 

    {
        id:'3',
        name: 'Gohan Pollo',
        price: 5200,
        category: 'Gohan', 
        img:'../img/gohan.jpg',
        stock: 6,
        description: 'Pollo tempurizado con queso crema y palta, con semillas de Sésamo'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })

}


 
    export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
          }, 500);
        });
      };