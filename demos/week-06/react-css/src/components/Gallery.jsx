import srcImg from "../assets/src-img.svg"; // we hav eto import the image if its stored in our /src directory
import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <p>
        We aren&apos;t in control of this image because we aren&apos;t hosting
        it
      </p>
      <img
        src="https://placehold.co/600x400?text=I%27m%20online"
        alt="This image is just a url to a image online"
      />
      <p>This image won&apos;t work when we deploy</p>
      <img
        src="/public-img.svg"
        alt="This image is stored in the pubic directory"
      />
      <p>That&apos;s the way to do it!</p>
      <img
        src={srcImg}
        alt="This image is stored in the src/assets directory"
      />
    </div>
  );
}

// to avoid naming conflicts you could use BEM CSS
// https://getbem.com
// BEM
// block__element--modifier
// gallery
// gallery__img
// gallery__img--active
