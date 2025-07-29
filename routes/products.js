import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    res.render("index", {
        title: "Boom shop | Deximo"
    })
})

router.get("/add", (req, res) => {
    res.render('add', {
        title: "Add | Products",
        isAdd: true
    })
})

router.get("/products", (req, res) => {
    res.render('products', {
        title: "Products | Deximo",
        isProducts: true
    })
})


export default router