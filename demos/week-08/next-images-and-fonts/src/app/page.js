import Image from "next/image";


export default function App() {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident consequuntur porro voluptates neque commodi harum dolorem asperiores voluptatibus voluptas, nulla, esse voluptatem amet perferendis ex magni aliquam. Quasi, vel?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, provident consequuntur porro voluptates neque commodi harum dolorem asperiores voluptatibus voluptas, nulla, esse voluptatem amet perferendis ex magni aliquam. Quasi, vel?</p>
      {/* <div className="h-60 bg-sky-400`"></div> */}
      {/* <img src={`https://th-thumbnailer.cdn-si-edu.com/tweX68LQrE6aY4X0tzmF_gSfiYw=/800x600/filters:focal(4381x2523:4382x2524)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/e0/58/e058c2c2-b1d9-491c-abf5-973844b211a0/gettyimages-171399380.jpg`} alt='cute panda'/> */}

      {/* height and width needs to be the same aspect ratio as the orginal image, the exact pixel count doesnt matter. still use use css for the actual visuals, this is just about setting the space aside. */}
      <Image height={450} width={600} src={`https://th-thumbnailer.cdn-si-edu.com/tweX68LQrE6aY4X0tzmF_gSfiYw=/800x600/filters:focal(4381x2523:4382x2524)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/e0/58/e058c2c2-b1d9-491c-abf5-973844b211a0/gettyimages-171399380.jpg`} alt='red panda' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eveniet iste sint! Velit officiis id molestias architecto odit voluptatibus cupiditate ullam iusto. Nobis assumenda, accusantium perspiciatis ea optio iusto ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid totam aut quas est cum, sapiente minima, delectus hic odit iste eius optio suscipit in vel fugit quae! Reiciendis, laudantium quia.</p>

      {/* YOU HAVE TO INCLUDE HEIGHT AND WIDTH */}
      <Image src={`/panda.jpg`} alt='cute panda' height={500} width={500} />
    </div>
  )
}