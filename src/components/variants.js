export default {
    Page: {
        initial: {
            transform: "translateY(100px)",
            opacity: 0,
        },
        enter: {
            transform: "translateY(0px)",
            opacity: 1,
            transition: {duration: 1.5}
        },
        exit: {
            transform: "translateY(-100px)",
            opacity: 0,
            transition: {duration: 3}
        }
    }
}