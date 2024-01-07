import { CHANGE } from "./ActionsNames";

const initial_state = {
"cars": [{
        "brand": "Toyota",
        "model": "Camry",
        "price": 25000,
        "img_url": "https://example.com/images/toyota_camry.jpg"
    },
    {
        "brand": "Honda",
        "model": "Civic",
        "price": 22000,
        "img_url": "https://example.com/images/honda_civic.jpg"
    },
    {
        "brand": "Ford",
        "model": "Mustang",
        "price": 35000,
        "img_url": "https://example.com/images/ford_mustang.jpg"
    },
    {
        "brand": "Chevrolet",
        "model": "Corvette",
        "price": 60000,
        "img_url": "https://example.com/images/chevrolet_corvette.jpg"
    },
    {
        "brand": "Tesla",
        "model": "Model 3",
        "price": 45000,
        "img_url": "https://example.com/images/tesla_model_3.jpg"
    },
    {
        "brand": "BMW",
        "model": "M5",
        "price": 55000,
        "img_url": "https://www.bmwcoop.com/wp-content/images/2022/10/BMW-M5-600hp-500x300.jpg"
    }
],
"phones": [{
        "brand": "Apple",
        "model": "iPhone 13",
        "price": 999,
        "img_url": "https://example.com/images/iphone_13.jpg"
    },
    {
        "brand": "Samsung",
        "model": "Galaxy S21",
        "price": 899,
        "img_url": "https://example.com/images/samsung_galaxy_s21.jpg"
    },
    {
        "brand": "Google",
        "model": "Pixel 6",
        "price": 799,
        "img_url": "https://example.com/images/google_pixel_6.jpg"
    },
    {
        "brand": "OnePlus",
        "model": "9 Pro",
        "price": 799,
        "img_url": "https://example.com/images/oneplus_9_pro.jpg"
    },
    {
        "brand": "Xiaomi",
        "model": "Mi 11",
        "price": 599,
        "img_url": "https://example.com/images/xiaomi_mi_11.jpg"
    },
    {
        "brand": "Sony",
        "model": "Xperia 1 III",
        "price": 1099,
        "img_url": "https://example.com/images/sony_xperia_1_iii.jpg"
    }
],
"computers": [{
        "brand": "Apple",
        "model": "MacBook Air",
        "price": 999,
        "img_url": "https://example.com/images/macbook_air.jpg"
    },
    {
        "brand": "Dell",
        "model": "XPS 13",
        "price": 1199,
        "img_url": "https://example.com/images/dell_xps_13.jpg"
    },
    {
        "brand": "HP",
        "model": "Spectre x360",
        "price": 1299,
        "img_url": "https://example.com/images/hp_spectre_x360.jpg"
    },
    {
        "brand": "Lenovo",
        "model": "ThinkPad X1 Carbon",
        "price": 1299,
        "img_url": "https://example.com/images/thinkpad_x1_carbon.jpg"
    },
    {
        "brand": "Asus",
        "model": "ROG Zephyrus G14",
        "price": 1499,
        "img_url": "https://example.com/images/asus_rog_zephyrus_g14.jpg"
    },
    {
        "brand": "Microsoft",
        "model": "Surface Laptop 4",
        "price": 1199,
        "img_url": "https://example.com/images/microsoft_surface_laptop_4.jpg"
    }
],
"products": [{
        "brand": "Lenovo",
        "model": "Product123",
        "price": 99,
        "img_url": "https://example.com/images/product123.jpg"
    },
    {
        "brand": "Samsung",
        "model": "WidgetXYZ",
        "price": 49,
        "img_url": "https://example.com/images/widgetxyz.jpg"
    },
    {
        "brand": "TestCorp",
        "model": "Gadget456",
        "price": 199,
        "img_url": "https://example.com/images/gadget456.jpg"
    },
    {
        "brand": "DemoTech",
        "model": "TechGizmo",
        "price": 149,
        "img_url": "https://example.com/images/techgizmo.jpg"
    },
    {
        "brand": "InnovativeStuff",
        "model": "CoolDevice",
        "price": 79,
        "img_url": "https://example.com/images/cooldevice.jpg"
    },
    {
        "brand": "TechWonders",
        "model": "AwesomeTech",
        "price": 299,
        "img_url": "https://example.com/images/awesometech.jpg"
    }
]
}

const reducer = (state = initial_state, action) => {
    switch(action.type){
        case CHANGE:
            return state.cars[0].brand = "Honda";
        default: 
            return state;
    }

}

export default reducer;