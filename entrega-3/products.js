const fs = require("fs");

const baseProd = JSON.parse(fs.readFileSync("./products.json"));

class Contenedor {
  constructor(prods) {
    this.productsArray = prods;
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile("products.json");
      const products = JSON.parse(data);
      if (products.length) {
        return products;
      } else {
        console.log("Not found products");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async randomProducts() {
    const getAllProducts = await this.getAll();
    const random = Math.random() * getAllProducts.length;
    const randProds = getAllProducts[Math.floor(random)];
    return randProds;
  }
}

const productos = new Contenedor(baseProd);

productos.getAll();


module.exports = Contenedor;