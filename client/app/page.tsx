import Image from "next/image";
import Slider from "./components/ui/slider/Slider";
import SliderImage from "./components/ui/slider/SliderImage";
import SliderLogo from "./components/ui/slider/SliderLogo";
import Details from "./components/ui/details/Details";
import DetailsItem from "./components/ui/details/DetailsItem";
import Header from "./components/ui/Header";
import Icon from "./components/ui/Icon";
import Section from "./components/ui/section/Section";
import Product from "./components/ui/Product";
import MainSection from "./components/ui/section/MainSection";
import MainSectionItem from "./components/ui/section/MainSectionItem";
import watchOne from "../public/watch-1.png";
import watchTwo from "../public/watch-2.png";


export default function Home() {
    return (
        <main>
            <div className="bg-white space-y-32 mb-32 overflow-x-hidden">
                <Slider>
                    <SliderImage imageCSSClass="bg-cover-1">
                        <SliderLogo
                            link="/category/womens"
                            headerContent="New women's fashion wear"
                        />
                    </SliderImage>
                    <SliderImage imageCSSClass="bg-cover-2">
                        <SliderLogo
                            link="/category/womens"
                            headerContent="New women's fashion wear"
                        />
                    </SliderImage>
                    <SliderImage imageCSSClass="bg-cover-3">
                        <SliderLogo
                            link="/category/womens"
                            headerContent="New women's fashion wear"
                        />
                    </SliderImage>
                </Slider>
                {/* <!-- * SHOPPING DETAILS --> */}
                <div className="container m-auto flex justify-center flex-row">
                    <Details>
                        <DetailsItem>
                            <Icon icon="truck" size="3x" color="groovy-red" />
                            <Header>Two-hour delivery</Header>
                            <p>
                                Order before 2pm and get your items delivered
                                within 2 hours.
                            </p>
                        </DetailsItem>
                    </Details>
                    <Details>
                        <DetailsItem>
                            <Icon
                                icon="credit-card"
                                size="3x"
                                color="groovy-red"
                            />
                            <Header>Secure payment</Header>
                            <p>
                                Pay with the world's most popular and secure
                                payment methods.
                            </p>
                            <Icon icon="cc-mastercard" className="mr-2" />
                            <Icon icon="cc-visa" className="mr-2" />
                            <Icon icon="cc-paypal" className="mr-2" />
                            <Icon icon="cc-stripe" />
                        </DetailsItem>
                    </Details>
                    <Details>
                        <DetailsItem>
                            <Icon icon="gift" size="3x" color="groovy-red" />
                            <Header>Free shipping</Header>
                            <p>
                                Free shipping on all US order or order above
                                $50.
                            </p>
                        </DetailsItem>
                    </Details>
                </div>
                {/* <!-- * PRODUCT SECTION ONE --> */}
                <Section name="New Arrivals">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Section>
                {/* main product */}

                <MainSection>
                    <MainSectionItem
                        imageALT="watch"
                        imageSRC={watchOne}
                        imageSide="right">
                        <Header className="text-2xl">
                            ONE OF A KIND ROLEX
                        </Header>
                        <Header className="text-5xl leading-snug mb-7 mt-4">
                            Always telling the time when you need it too
                        </Header>
                        <p className="text-xl">
                            Oculus Go is our all-in-one VR headset that’s
                            portable and easy to use. Experience entertainment
                            on the go with no PC, wires or hassles.
                        </p>
                    </MainSectionItem>
                    <MainSectionItem
                        imageALT="watch"
                        imageSRC={watchOne}
                        imageSide="left">
                        <Header className="text-2xl">
                            ONE OF A KIND ROLEX
                        </Header>
                        <Header className="text-5xl leading-snug mb-7 mt-4">
                            Always telling the time when you need it too
                        </Header>
                        <p className="text-xl">
                            Oculus Go is our all-in-one VR headset that’s
                            portable and easy to use. Experience entertainment
                            on the go with no PC, wires or hassles.
                        </p>
                    </MainSectionItem>
                </MainSection>
                {/* <!-- * PRODUCT SECTION TWO --> */}
                <Section name="Best Sellers">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </Section>
                {/* <!-- * CONTACT --> */}
            </div>
        </main>
    );
}
