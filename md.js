CheetahData.setMetaData({
dimensions: [
    {name: "Store", levels: [
        {name: "All"},
        {name: "Store Country"},
        {name: "Store State"},
        {name: "Store City"},
        {name: "Store Name"}
        ] },
    {name: "Time", levels: [
        {name: "Year"},
        {name: "Quarter"},
        {name: "Month"}
        ] },
    {name: "Product", levels: [
        {name: "All Products"},
        {name: "Product Family"},
        {name: "Product Department"},
        {name: "Product Category"},
        {name: "Product Subcategory"},
        {name: "Brand Name"},
        {name: "Product Name"}
        ] }
],
cubes: [
    {
    	name: "Sales", 
    	measures: [
            {name: "Unit Sales", defaultFormat: "#,###.0", rollupType:"sum"},
            {name: "Store Sales", defaultFormat: "$#,###.00"}
        ]
    }
]
});
