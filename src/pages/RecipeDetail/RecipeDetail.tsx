export default function RecipeDetail() {
  return (
    <div className="container py-20">
      <h2 className="text-[48px] font-bold text-tertiary text-center mb-10">
        Chipotle Sweet Potato Noodle Salad with Roasted Corn
      </h2>
      <div className="w-full flex flex-row gap-2 justify-center items-center mb-10">
        <div className="w-fit bg-primary text-white text-xs px-3 py-1 uppercase font-semibold">
          DESERT
        </div>
        <div className="w-fit bg-primary text-white text-xs px-3 py-1 uppercase font-semibold">
          ASIAN
        </div>
        <div className="w-fit bg-primary text-white text-xs px-3 py-1 uppercase font-semibold">
          SPICY
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-12 mb-20">
          <div className="relative col-span-12">
            <div className="relative rounded-full">
              <img
                className="h-[250px] w-full object-cover md:h-[300px] xl:h-[473px]"
                src="https://themewagon.github.io/yummy2/img/recipe-single.jpg"
              />
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-12 gap-8">
          <div className="col-span-12 xl:col-span-5">
            <div className="bg-primary flex flex-col justify-center items-center px-6">
              <img
                src="https://themewagon.github.io/yummy2/img/intro-img.jpg"
                className="w-[120px] h-[120px] rounded-full border-2 border-white object-cover mt-[-60px] mb-4"
              />
              <h2 className="text-white mb-4 text-2xl text-center font-bold">
                Chipotle Sweet Potato Noodle with Roasted Corn
              </h2>
              <span className="text-white text-xl mb-4">★ ★ ★ ★ ★</span>
              <span className="text-base text-white opacity-70 mb-10">
                4.9 from 25 reviews
              </span>
            </div>
            <div className="bg-secondary flex justify-between items-center text-white p-6">
              <div>
                <span className="font-bold">Prep time: </span>
                <span>10 min</span>
              </div>
              <div>
                <span className="font-bold">Cook time: </span>
                <span>10 min</span>
              </div>
              <div>
                <span className="font-bold">Yield: </span>
                <span>5</span>
              </div>
            </div>
            <div className="p-6 border border-gray-300 mb-4">
              <div className="flex justify-between items-center gap-4 mb-10">
                <button className="bg-primary text-white font-semibold flex-1 py-4">
                  Print Recipe
                </button>
                <button className="bg-secondary text-white font-semibold flex-1 py-4">
                  Print Recipe
                </button>
              </div>
              <h4 className="text-tertiary text-base uppercase font-semibold mb-4">
                INGREDIENTS
              </h4>
              <h5 className="text-tertiary text-base uppercase font-semibold mb-4 opacity-70">
                FOR THE SALAD
              </h5>
              <ul className="list-disc px-6 text-tertiary leading-[36px] text-base mb-4">
                <li>1 brick of frozen udon</li>
                <li>1/2 cup kimchi, plus a bit of kimchi juice</li>
                <li>1 tablespoon of butter</li>
                <li>1 sac of mentaiko</li>
                <li>sliced green onions and nori, to finish</li>
              </ul>
              <h5 className="text-tertiary text-base uppercase font-semibold mb-4 opacity-70">
                FOR THE DRESSING
              </h5>
              <ul className="list-disc px-6 text-tertiary leading-[36px] text-base">
                <li>1 brick of frozen udon</li>
                <li>1/2 cup kimchi, plus a bit of kimchi juice</li>
                <li>1 tablespoon of butter</li>
                <li>1 sac of mentaiko</li>
                <li>sliced green onions and nori, to finish</li>
              </ul>
            </div>
            <div className="bg-secondary flex justify-between items-center p-8 text-white mb-[1px]">
              <span>Nutrition Facts</span>
              <span>Serves 4</span>
            </div>
            <div className="bg-secondary flex justify-between items-center p-8 text-white">
              <span>Total Fat : 20.4g</span>
              <span>Cholesterol : 2%</span>
              <span>Chalories: 345</span>
            </div>
          </div>
          <div className="col-span-12 bg-transparent text-white xl:col-span-7">
            <h3 className="text-3xl font-bold text-tertiary mb-10">
              Description
            </h3>
            <p className="text-tertiary mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet. Donec in sodales dui, a blandit nunc.
              Pellentesque id eros venenatis, sollicitudin neque sodales,
              vehicula nibh. Nam massa odio, porttitor vitae efficitur non,
              ultricies volutpat tellus. Cras egestas in lacus a finibus.
              Suspendisse sed urna at elit condimentum viverra. Suspendisse non
              lobortis nisi. Maecenas accumsan quam quis porta laoreet. Aliquam
              felis odio, aliquet fermentum semper at, porttitor ac mi. Duis vel
              condimentum risus. Phasellus eu dolor vel neque commodo accumsan
              eget et enim. Pellentesque non elit sed risus tincidunt aliquam eu
              eget metus.
            </p>
            <p className="text-tertiary">
              Donec sit amet enim tortor. Sed egestas nulla nibh, vitae porta
              velit sagittis eget. Donec vitae tellus semper, cursus sem id,
              iaculis purus. Aenean ligula risus, maximus tristique eros vel,
              auctor ornare tortor. Aliquam vel augue sapien. Duis non auctor
              ante, ac vestibulum tortor. Etiam quis dolor ultricies, dignissim
              ante a, ornare ipsum. Phasellus suscipit rhoncus nulla, quis
              bibendum tortor elementum ac. Nullam viverra tellus diam, nec
              accumsan orci aliquam sed. Sed placerat sagittis lacus, non rutrum
              diam volutpat id.
            </p>
            <h3 className="text-3xl font-bold text-tertiary my-10">
              Instructions
            </h3>
            <div className="flex justify-between items-start gap-8 mb-6">
              <span className="text-lg font-bold text-primary">01.</span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
                Suspendisse non lobortis nisi. Maecenas accumsan quam quis porta
                laoreet. Aliquam felis odio, aliquet fermentum semper at,
                porttitor ac mi.
              </span>
            </div>
            <div className="flex justify-between items-start gap-8 mb-6">
              <span className="text-lg font-bold text-primary">02.</span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
                Suspendisse non lobortis nisi. Maecenas accumsan quam quis porta
                laoreet. Aliquam felis odio, aliquet fermentum semper at,
                porttitor ac mi.
              </span>
            </div>
            <div className="flex justify-between items-start gap-8 mb-6">
              <span className="text-lg font-bold text-primary">03.</span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
                Suspendisse non lobortis nisi. Maecenas accumsan quam quis porta
                laoreet. Aliquam felis odio, aliquet fermentum semper at,
                porttitor ac mi.
              </span>
            </div>
            <div className="flex justify-between items-start gap-8 mb-6">
              <span className="text-lg font-bold text-primary">04.</span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
                Suspendisse non lobortis nisi. Maecenas accumsan quam quis porta
                laoreet. Aliquam felis odio, aliquet fermentum semper at,
                porttitor ac mi.
              </span>
            </div>
            <h3 className="text-3xl font-bold text-tertiary my-10">Notes</h3>
            <div className="bg-[#F5F6FA] p-8 mb-6">
              <span className="block bg-primary text-white text-lg font-bold h-[27px] w-[27px] rounded-full text-center mb-2">
                i
              </span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
              </span>
            </div>
            <div className="bg-[#F5F6FA] p-8 mb-6">
              <span className="block bg-primary text-white text-lg font-bold h-[27px] w-[27px] rounded-full text-center mb-2">
                i
              </span>
              <span className="text-tertiary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet. Donec in sodales dui, a blandit
                nunc. Pellentesque id eros venenatis, sollicitudin neque
                sodales, vehicula nibh. Nam massa odio, porttitor vitae
                efficitur non, ultricies volutpat tellus. Cras egestas in lacus
                a finibus. Suspendisse sed urna at elit condimentum viverra.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
