import React from "react";
import Carousel from "../Carousel/Carousel"
import style from "./LandingPage.module.css"
import Footer from "../Footer/Footer";



function LandingPage() {

    const slides = [
    
      "https://lh3.googleusercontent.com/pw/AL9nZEVJlHalZajycw85WrulwsatI7dvdqzlALuMlO7Xmi_B6du2Ro-fcVwDBupEmceNSFbaoj8zk0ft8YAUwQKYWUZAIlpUQK7JFW_9rdWWBSLIVPxNM9ULnSDN-3QqUhdE20ljDvxSsDR35MTa4heyN8irbw=w995-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEUylurEW8WS1nW6Bvzd8dqHiBsIYo1oOgKpVKXWMONT4BoroO6qTpw3347dqIdzXYDasUEVt_RfS2VW_c_JW6UeX0lQiKrl7NkWIB1HTbOWhcUaOcSRFKSFPNfZX3SNGS_Ok_JSwigMvZj57ExzPLFdsw=w884-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEWa81sxHluwtYPzkvHk5oqJriDccAFVFcp-8NiGbyq5BKQl_N1MB_Js-5TOrWfShEDtEqkOQI1L1HlTFF9YkLQqE8cwdfhQsuyPbbaQIsazlLhLzOr5FBSKUjFsz4ZAR90NQMK_t_RO4QWI0yNz9RdiTw=w995-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEVlp1m3TTBDbIQzWdvMEHhUPGXXJKDpFRGyQS7tFGU2lzLAhy2ky9RUa4V5qaQl4KOFadH5GAEbU5qYnvEm7gEvyW0XWG9O6Y6Xj-Va0b-_1zx1dBoEoM948p54GzB9WL67PQNhDIjt_uTi4Cr_qmcP_g=w884-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEVWF7gI3AYr7T6zRRljFer7J4HZXqsirwa9DROTQPP31nWiIf7tm53Qwa2Qp8uJwcd_zUV6laRN2KXVwhWOXfSKcRwvkXjrSk336tl0pN-tjrzbNQyAAd9p4JXoSK1ZUITNtFNUFndEl13jXNmhB-uP4g=w995-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEV-SYAJR6aWBKkVsB9OQ9T1-8Q-xmcfw93-D3GHPIzCIlp-8qHuUGa57qx7bDm0v65zW4hBBhlWH_NIP04PNBvXwanyu21Mih83zN8DTA7NnIauBZddKyb1HYNVWkYTtxt6SaflwmnS_mr73phkuQH-1Q=w884-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEWOHV5Lbm8WSQgkH4XIdVltZBOkZM3dkUkhxsOR7x4ADvaBZmsORiiomRFM34psXimKvjz65ST1CIQoTES3Jvfbfij2lwU9iZo1cHEVr1spUlA694-neD7VRXlh0Ii-MK5LN2ygmuefLCSpDNTUIQ64KQ=w996-h663-no?authuser=0",
      "https://lh3.googleusercontent.com/pw/AL9nZEW8_LPQQOkdMI_86RQTFMzlCANgD2EFmeK5GtXvoEmEU0phh73zDT9GsmKWqUvEhSIZFJK2uxiUVlWJpc76agf0L_vZdA2KsVFML4HTgx8rwLDyyZlJCiCg6zliLtpplBk8J9LHi0l74gW8TXKBysoJfQ=s663-no?authuser=0",
      ]

    return (
        <div>
             <p className={style.p}> Comprá y disfrutá </p>
         <p className={style.p2}> Tienda de productos naturales y saludables </p>
       
            <div className={style.img}>
            <Carousel slides={slides} controls indicators width={1200} ifCard={false} />
            </div>
        
            <div className={style.footer}>
                <Footer/>
            </div>
        </div>
    )
}
export default LandingPage;