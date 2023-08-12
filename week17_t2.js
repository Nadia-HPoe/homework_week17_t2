class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return {
            type: this.type,
            brand: this.brand
        }

    }
    getPrice() {
        return {
            price: this.price
        }
    };
}

class Car extends Transport {
    constructor(type, price, brand, door) {
        super(type, price, brand);
        this.door = door;
    }
    getDoorsCount() {
        return this.door;

    }

}

class Bike extends Transport {
    constructor(type, price, brand, speed) {
        super(type, price, brand);
        this.speed = speed;

    }
    getMaxSpeed() {
        return this.speed;
    }
}

const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

for (i = 0; i < data.length; i += 1) {
    if (data[i].type.indexOf('bike')) {
        data[i] = new Car(data[i].type, data[i].price, data[i].brand, data[i].doors);
    }
    else data[i] = new Bike(data[i].type, data[i].price, data[i].brand, data[i].maxSpeed);
}

const container = document.getElementById("container");
const dataContainer = document.createElement('ul');
container.append(dataContainer);


Car.prototype.place = function () {
    const Item = document.createElement('p');
    Item.textContent = `Brand: ${this.brand} Price: ${this.price} Doors: ${this.getDoorsCount()}`;
    dataContainer.append(Item);
}
data[0].place();
data[1].place();

Bike.prototype.place = function () {
    const Item = document.createElement('p');
    Item.textContent = `Brand: ${this.brand} Price: ${this.price} Speed: ${this.getMaxSpeed()}`;
    dataContainer.append(Item);
}
data[2].place();
data[3].place();


// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
