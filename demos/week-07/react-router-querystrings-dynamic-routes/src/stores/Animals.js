export const AnimalsList = [
    {
      id: 1,
      name: "Axolotl",
      description: "A type of salamander known for its ability to regenerate entire limbs and stay in its larval form throughout its life.",
      funFact: "Axolotls can regenerate not only limbs but also parts of their heart and brain.",
      img: "https://animalfactguide.com/wp-content/uploads/2024/01/axolotl.jpg"
    },
    {
      id: 2,
      name: "Pangolin",
      description: "A mammal covered in hard, overlapping scales made of keratin, known for its unique defense mechanism of curling into a ball.",
      funFact: "Pangolins are the most trafficked mammals in the world due to high demand for their scales and meat.",
      img: "https://images.squarespace-cdn.com/content/v1/5c86e6b47eb88c3bfb96af39/1556056772614-N3899V8918IX9AR9GRFY/iStock-963817812_Credit+Willem+Van+Zyl.jpg"
    },
    {
      id: 3,
      name: "Narwhal",
      description: "A medium-sized toothed whale characterized by a long, spiral tusk protruding from its head.",
      funFact: "The 'tusk' of a narwhal is actually a long tooth, and some males can have tusks up to 10 feet long.",
      img: "https://i.natgeofe.com/n/bcbe17d4-bde7-41d8-8879-94942204604d/narwhal_thumb.jpg"

    },
    {
      id: 4,
      name: "Aye-aye",
      description: "A nocturnal lemur native to Madagascar, known for its unusual method of foraging by tapping on trees to find grubs.",
      funFact: "The aye-aye uses its elongated middle finger to extract insects from tree bark.",
      img: "https://preview.redd.it/b6498ipa7vq31.jpg?width=640&crop=smart&auto=webp&s=4aed5622ca974c1737c05ae84da40c7b1461fd69"
    },
    {
      id: 5,
      name: "Tardigrade",
      description: "Also known as water bears, these microscopic creatures are known for their extreme resilience and ability to survive harsh environments.",
      funFact: "Tardigrades can withstand extreme temperatures, radiation, and even the vacuum of space.",
      img: "https://i.guim.co.uk/img/media/39669fd0fa5c0193955cba565e89aa1f29cec180/0_1063_3511_2105/master/3511.jpg?width=620&quality=85&auto=format&fit=max&s=17d566c3ded944c588183dea3fe4265d"
    },
    {
      id: 6,
      name: "Saiga Antelope",
      description: "An antelope known for its distinctive, oversized, and flexible nose that helps filter out dust and regulate body temperature.",
      funFact: "The saiga’s unusual nose acts as a filter, helping it survive in the harsh, dusty steppes of Central Asia.",
      img: "https://preview.redd.it/1k2po6xlv8f21.png?width=640&crop=smart&auto=webp&s=4c3d5695108b855d8a252c54fa1b227e9476a349"
    },
    {
      id: 7,
      name: "Goblin Shark",
      description: "A rare deep-sea shark with an elongated, flattened snout and protruding, needle-like teeth.",
      funFact: "The goblin shark’s jaws can extend outward to catch prey, giving it a truly alien-like appearance.",
      img: "https://www.sharkwater.com/wp-content/uploads/2018/07/MitsukOwstoni3.jpg"
    },
    {
      id: 8,
      name: "Shoebill",
      description: "A large bird native to the swamps of central tropical Africa, known for its massive, shoe-shaped bill.",
      funFact: "The shoebill is known to stay motionless for long periods before making a swift strike to catch its prey.",
      img: "https://zootampa.org/wp-content/uploads/2021/08/shoebill-wings-spread-open.jpg"
    },
    {
      id: 9,
      name: "Quokka",
      description: "A small marsupial native to Australia, often referred to as 'the world's happiest animal' due to its constant smiling expression.",
      funFact: "Quokkas are known for their friendly nature and will often approach humans without fear.",
      img: "https://cdn.shopifycdn.net/s/files/1/0334/4384/0138/files/640_eda6815f-0348-4899-b9a2-7090e7f73e58_480x480.jpg?v=1717395672"
    },
    {
      id: 10,
      name: "Okapi",
      description: "A mammal closely related to the giraffe, with a body that resembles a cross between a giraffe and a zebra.",
      funFact: "Despite its zebra-like stripes, the okapi is more closely related to the giraffe and is endemic to the rainforests of the Democratic Republic of the Congo.",
      img: "https://s3.animalia.bio/animals/photos/full/original/okapi.webp"
    }
  ]
  

  // write me a function 
  // accept an id as the parameter/argument
  // and return the matching object from the animals array

  export function findAnimal(id) {
    return AnimalsList.find((animal) => animal.id == id)
  }

