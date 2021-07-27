import "./testimonials.scss"

const Testimonials = () => {

    const data = [
        {
          id: 1,
          name: "Mohamed Iqbal",
          title: "Senior Project Lead",
          img:
            "https://media-exp1.licdn.com/dms/image/C5103AQEAnIc7hGHUvA/profile-displayphoto-shrink_100_100/0/1566330073608?e=1632960000&v=beta&t=yToTYFmWL5MoBgaOjXqflwYyntA5mFE00YnuzdE0-KA",
          icon: "assets/twitter.png",
          desc:
            "Not only understands the requirement, but also has the ability to achieve the target on time.",
        },
        {
          id: 2,
          name: "Akhil Johny",
          title: "Senior Developer",
          img:"https://media-exp1.licdn.com/dms/image/C5603AQFVm3lwk5HdKQ/profile-displayphoto-shrink_200_200/0/1516604789342?e=1632960000&v=beta&t=X-GEYzto3UL7RiwQFheE8nGRaIfyxnlE0E4UJiNxg5w",
          icon: "assets/youtube.png",
          desc:
            "Passionate, energetic, team player. Learn new technologies fast",
          featured: true,
        },
        {
          id: 3,
          name: "MANUPRASAD M",
          title: "Software Engineer",
          img:
            "https://media-exp1.licdn.com/dms/image/C5635AQEnimgHrNIjgA/profile-framedphoto-shrink_200_200/0/1597037990340?e=1627459200&v=beta&t=-mEFwVPKJRewohE7YipdaADlLi-rQ7qL5NZLE56kUgQ",
          icon: "assets/linkedin.png",
          desc:
            "Maintaining good coding standards. She has a positive approach and is very dedicated. ",
        },
      ];
    return (
        <div className="testimonials" id ="testimonials">
            <h1>Testimonials</h1>
            <div className="container" >
{data.map((item) => (

                <div className={item.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="" alt="" />
                        <img className="user" src={item.img} alt="" />
                        <img className="right" src={item.icon} alt="" />
                    </div>
                    <div className="center">{item.desc}</div>
                    <div className="bottom">
                    <h3>{item.name}</h3>
                    <h4>{item.title}</h4>
                </div>
            </div>

) )}
            </div>
        </div>
    )
}

export default Testimonials
