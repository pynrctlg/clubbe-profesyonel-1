export const getAllProductApi = async (id) => {
  try {
    if (id) {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      return res.json();
    } else {
      const res = await fetch(`https://fakestoreapi.com/products`);
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

