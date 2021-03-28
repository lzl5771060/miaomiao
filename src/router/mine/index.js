export default {
    path: "/mine",
    component: () =>
        import ("@/views/mine"),
    children: [{
        path: "/mine/login",
        component: () =>
            import ("@/components/login")
    }]
}