import { Carousel as Carousel1 } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'
import { CarouselProps } from 'react-responsive-carousel'

export const Carousel = ({
  carouselProps,
  children,
}: {
  carouselProps?: CarouselProps
  children: React.ReactChild[]
}) => <Carousel1 {...carouselProps}>{children}</Carousel1>
