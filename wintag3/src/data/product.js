const products = [
  {
    id: 1,
    image:
      "https://media-photos.depop.com/r1/12216587/4511414037_f7fa1994374f46fb8542b03f34010bd0/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/12216587/4511412759_ea8e93a8849c48f7ad6319978c4a8f7c/P0.jpg",
    name: "American Vintage",
    price: 15.0,
    size: "L",
    fullDescription:
      "Step into authentic 90s streetwear style with this classic American Vintage graphic tee. Crafted from heavy-duty preshrunk cotton, this garment features a soft hand-feel achieved through decades of natural wash. The front graphic displays subtle cracking that adds true retro character without compromising print durability. Perfect for casual daily wear or layered under a denim jacket.",
  },
  {
    id: 2,
    image:
      "https://media-photos.depop.com/b1/261488876/4517262115_043e139316464aecbea531ac4d1f174f/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/261488876/4517265695_0780038d96a24575bb3dbe61cffa3567/P0.jpg",
    name: "NFL",
    price: 15.0,
    size: "L",
    fullDescription:
      "Show off your team spirit with this official vintage NFL graphic shirt. Constructed with a mid-weight breathable jersey cotton blend, it maintains its structured boxy fit while providing maximum comfort. Includes double-needle stitched hems, reinforced collar taping, and iconic team typography printed on the chest.",
  },
  {
    id: 3,
    image:
      "https://media-photos.depop.com/r1/375216320/4520967879_431dd882cbeb4bfbbe974ca3e92a98e1/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/375216320/4520968036_81f40dd2be9b4d9fb77df8d396371b75/P0.jpg",
    name: "American Vintage",
    price: 15.0,
    size: "L",
    fullDescription:
      "An essential addition to any vintage collector's wardrobe. This top has been hand-selected for its rare wash and subtle distressed edge details along the collar and sleeves. The relaxed shoulder seam creates a natural drape that looks effortless paired with cargo pants or relaxed-fit jeans.",
  },
  {
    id: 4,
    image:
      "https://media-photos.depop.com/r1/316099838/4511937345_ef7793d8e1b64bddbd3ce29754753c45/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/316099838/4511936341_71dcd10b55604a45b74c86c633e7ae5a/P0.jpg",
    name: "Awake NY",
    price: 20.0,
    size: "M",
    fullDescription:
      "Designed in the heart of New York City, this Awake NY piece combines contemporary street culture with premium garment construction. Cut from a thick 240 GSM organic cotton jersey, it delivers a structured boxy silhouette that holds its shape all day. Features screen-printed branding on both front and back.",
  },
  {
    id: 5,
    image:
      "https://media-photos.depop.com/b1/274711031/4526924617_54bf25a5c94b40b09e1bae78a947f299/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/274711031/4526924617_54bf25a5c94b40b09e1bae78a947f299/P0.jpg",
    name: "American Vintage",
    price: 9.0,
    size: "M",
    fullDescription:
      "A versatile basic tailored for everyday versatility. This lightweight crewneck tee features a soft cotton-poly blend that offers quick-drying breathability and minimal shrinkage. An ideal foundation layer under flannels, hoodies, or leather jackets.",
  },
  {
    id: 6,
    image:
      "https://media-photos.depop.com/b1/24754304/4490299021_a24151b59bd44f1e9c3dc76034b064eb/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/24754304/4490299514_7b73cebac5cc403686a9426576b88c46/P0.jpg",
    name: "Samurai",
    price: 8.0,
    size: "M",
    fullDescription:
      "Featuring intricate Asian artwork and custom typography, this graphic top stands out with bold contrast illustrations printed across the back and left chest. Made from ultra-soft combed cotton for a smooth texture against the skin.",
  },
  {
    id: 7,
    image:
      "https://media-photos.depop.com/b1/24754304/3469136135_5419565e0f5e47f3beb100076fe19348/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/24754304/3469138837_9bf1cf258f5c45428d93325ff073aab1/P0.jpg",
    name: "Other",
    price: 15.4,
    size: "M",
    fullDescription:
      "One-of-a-kind thrift discovery featuring a distinct faded wash and one-off graphic art. Perfect for buyers seeking sustainable fashion with individual personality that cannot be bought off the rack in retail stores.",
  },
  {
    id: 8,
    image:
      "https://media-photos.depop.com/b1/7156887/4518250419_5b21d1f840144f92946923c8100b3d37/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/7156887/4518247466_605a150e22e74aa6b8e250d621d9ca23/P0.jpg",
    name: "Other",
    price: 21.0,
    size: "M",
    fullDescription:
      "Designed with an emphasis on minimalist aesthetics and clean lines. Features dropped shoulders, a tight ribbed neck collar, and a slightly oversized cut that aligns with contemporary streetwear styling.",
  },
  {
    id: 9,
    image:
      "https://media-photos.depop.com/r1/49699732/4516807937_bdc512a138474076af0a9184e9bf0442/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/49699732/4516808798_10da753ed66f4982b1b046bdc19490e1/P0.jpg",
    name: "American Vintage",
    price: 9.0,
    size: "L",
    fullDescription:
      "A soft, worn-in vintage garment that delivers instant comfort. The slate grey wash gives it a sun-faded patina, while the relaxed body dimensions provide plenty of room for movement.",
  },
  {
    id: 10,
    image:
      "https://media-photos.depop.com/b1/6382413/4327093545_6d68f5704527422c88980fb7d3f302be/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/6382413/4327093734_bcfd5ccaac584a4f923f076baedb860c/P0.jpg",
    name: "American Vintage",
    price: 80.0,
    size: "L",
    fullDescription:
      "A rare archival piece preserved in exceptional condition. Built with heavyweight canvas construction, antique brass hardware, and original period stitching details. A genuine investment item for serious vintage apparel collectors.",
  },
  {
    id: 11,
    image:
      "https://media-photos.depop.com/r1/12026307/4523583194_d8462857410a4250b2e09d1b51937a22/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/12026307/4523583306_bcbe4842ed344c5e8801dc40158c6a11/P0.jpg",
    name: "American Vintage",
    price: 42.85,
    size: "M",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  {
    id: 12,
    image:
      "https://media-photos.depop.com/b1/431591123/4525497740_0d699216108b495da06b781a2fb9d5f2/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/431591123/4525496671_29d33fddd857421693290659d8e10ede/P0.jpg",
    name: "NASCAR",
    price: 5,
    size: "M",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  {
    id: 13,
    image:
      "https://media-photos.depop.com/b1/331173352/4525481315_93a4aae37bbf4d428bebc9ef80da8a76/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/331173352/4525482781_4021e6feb55247d38caa7fa69961890d/P0.jpg",
    name: "NASCAR",
    price: 5,
    size: "XXL",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
   {
    id: 14,
    image:
      "https://media-photos.depop.com/r1/428169186/4526286049_98ddedf588c04dbbb69cd898ccc0251f/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/428169186/4526286918_a723558672194a91b33819e9f90c3d59/P0.jpg",
    name: "American Vintage",
    price: 13.45,
    size: "M",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
   {
    id: 15,
    image:
      "https://media-photos.depop.com/b1/201791215/4496610100_06a0592c5fed407b82a1f3c607ef4f59/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/201791215/4496607876_f38ea19bfe684f0788aa017eec9991d5/P0.jpg",
    name: "Russell Athletic",
    price: 15.05,
    size: "L",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  {
    id: 16,
    image:
      "https://media-photos.depop.com/r1/488214840/4530285833_4dcf58821ae948bfb7b8a0e24fbf5af8/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/r1/488214840/4530285833_4dcf58821ae948bfb7b8a0e24fbf5af8/P0.jpg",
    name: "Russell Athletic",
    price: 7.00,
    size: "M",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  {
    id: 17,
    image:
      "https://media-photos.depop.com/b1/485784164/4520504551_42ba61fda7d44c1ca58d1b0409f0f0bd/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/485784164/4482675976_4cfdc1d8268a4a1485e8c2d33af368bf/P0.jpg",
    name: "Russell Athletic",
    price: 10.00,
    size: "S",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  {
    id: 18,
    image:
      "https://media-photos.depop.com/b1/393366304/4389904237_e7dc3b03557d477e8cbbb4a35926aff1/P0.jpg",
    secondimage:
      "https://media-photos.depop.com/b1/393366304/4389905823_a78c65928eca4754913d618b06c73cfc/P0.jpg",
    name: "Pipe Line",
    price: 5.40,
    size: "Other",
    fullDescription:
      "Keep warm with this mid-weight vintage knit top. Features a textured weave patterns across the chest, elasticated ribbed cuffs, and a cozy blend of wool and acrylic that insulates against cold weather while staying soft.",
  },
  
];

export default products;
