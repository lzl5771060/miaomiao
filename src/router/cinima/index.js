export default {
    path: "/cinima",
    component: () =>
        import ("@/views/cinima"),
    children: [{
        path: "/cinima/allcity",
        component: () =>
            import ("@/components/allcity")
    }]
}