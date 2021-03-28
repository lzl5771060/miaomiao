export default {
    path: "/movie",
    component: () =>
        import ("@/views/movie"),
    children: [{
            path: "/movie/nowplaying",
            component: () =>
                import ("@/components/nowplaying")
        },
        {
            path: "/movie/comingsoon",
            component: () =>
                import ("@/components/comingsoon")
        },
        {
            path: "/movie/city",
            component: () =>
                import ("@/components/city")
        },
        {
            path: "/movie/search",
            component: () =>
                import ("@/components/search")
        },
    ]
}