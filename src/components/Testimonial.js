import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { data } from "./data";

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
        </div>
    );
};
const Testimonial = () => {
    return (
        <div
            className="testimonial"
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
            <div style={{ width: "50%", textAlign: "center" }}>
                <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
                <Slider
                    autoplay
                    autoplaySpeed={2000}
                    prevArrow={<PreviousBtn />}
                    nextArrow={<NextBtn />}
                    initialSlide={2}
                    infinite
                    dots
                    customPaging={(i) => {
                        return (
                            <div >
                                <img
                                    src={data[i]}
                                    alt=""
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "cover",
                                        borderRadius: "50%",

                                    }}
                                />
                            </div>
                        );
                    }}
                    dotsClass="slick-dots custom-indicator"
                >
                    <Card img="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1661514151~exp=1661514751~hmac=db7c3d8b0107f2e559d58be86d98c95c1b7ca700054d69b0fc70370f6d7505fb" />
                    <Card img="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=996&t=st=1661514195~exp=1661514795~hmac=52ed0f8280a95b83b1a9de370c1e01934af05319b21b1df3f8d26fbc0becad33" />
                    <Card img="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?w=996&t=st=1661517611~exp=1661518211~hmac=485248b6841a5b6a9aeb790692e0c1deb06749af95ceb30c3defdca62054e635" />
                    <Card img="https://img.freepik.com/free-photo/positive-bearded-man-hipster-smiles-broadly-has-pleased-expression-laughs-something-funny-closes-eyes_273609-16781.jpg?w=996&t=st=1661517700~exp=1661518300~hmac=92f540b2a486ef636d77f374efc03deeed244564a800a48ced9a3a63797d6030" />
                    <Card img="https://img.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7829.jpg?w=996&t=st=1661521147~exp=1661521747~hmac=a630b3b98f5a1d880d9e85e69562e84730450e191ee2cc351d601dada36ca501" />
                </Slider>
            </div>
        </div>
    );
};

const Card = ({ img }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                color: "gray",
            }}
        >
            <Avatar
                imgProps={{ style: { borderRadius: "50%" } }}
                src={img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                }}
            />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p style={{ fontStyle: "italic", marginTop: 25 }}>
                <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
                Media Analyst
            </p>
        </div>
    );
};

export default Testimonial;