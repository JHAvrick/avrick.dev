export default {
    //Animation variants for the default header
    DefaultHeader: {
        Container: {
            hidden: { opacity: 0, transform: "translateY(200px)" },
            show: {
              transform: "translateY(0px)",
              opacity: 1,
              transition: {
                duration: 1,
                staggerChildren: .25
              }
            }
        },
        Item: {
            hidden: { opacity: 0, transform: "translateY(200px)", transition: {duration: 1} },
            show: { opacity: 1, transform: "translateY(0px)", transition: {duration: 1} },
        }
    },

    //Animation variants for the static/condensed header
    CondensedHeader: {
        Container: {
            hidden: { opacity: 0, transform: "translateY(50px)" },
            show: {
            transform: "translateY(0px)",
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          },
        Item: {
            hidden: { opacity: 0, transform: "translateY(50px)" },
            show: { opacity: 1, transform: "translateY(0px)" },
        }
    }
}
