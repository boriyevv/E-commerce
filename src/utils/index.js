export const navOptions = [
    {
        id: "home",
        label: "Home",
        path: "/"
    },
    {
        id: "listing",
        label: "All Products",
        path: "/product/listing/all-products"
    },
    {
        id: "listingMen",
        label: "Men",
        path: "/product/listing/men"
    },
    {
        id: "listingWomen",
        label: "Women",
        path: "/product/listing/women"
    },
    {
        id: "listingKids",
        label: "Kids",
        path: "/product/listing/kids"
    },
];

export const adminNavOptions = [
    {
        id: "adminListing",
        label: "Manage All Products",
        path: "/admin-view/all-product",
    },
    {
        id: "adminNewProduct",
        label: "Add New Product",
        path: "/admin-view/add-product",
    },
];





export const registrationFormControls = [
    {
        id: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        lebel: 'Name',
        componentType: 'input'
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        lebel: 'Email',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your password',
        lebel: 'Password',
        componentType: 'input'
    },
    {
        id: 'role',
        type: '',
        placeholder: ' ',
        lebel: 'Role',
        componentType: 'select',
        options: [
            {
                id: 'admin',
                label: 'Admin'
            },
            {
                id: 'customer',
                label: 'Customer'
            },
        ]
    },
]


export const loginFormControls = [

    {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        lebel: 'Email',
        componentType: 'input'
    },
    {
        id: 'password',
        type: 'password',
        placeholder: 'Enter your password',
        lebel: 'Password',
        componentType: 'input'
    },

]
