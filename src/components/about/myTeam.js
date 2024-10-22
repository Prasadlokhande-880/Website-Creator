export default function Example(props) {
  props = props.data;

  return (
    <>
      <section className="bg-gray-50 p-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            <div className="w-full lg:w-1/2">
              <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                {props.my_team_section_heading_1}
              </h2>
              <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
                {props.my_team_section_heading_description}
              </p>
              <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
                Join our team
              </button>
            </div>
            <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                <img
                  src={
                    props.my_team_images?.my_team_section_image_1?.url ||
                    "defaultImage1.jpg"
                  } // Fallback to a default image if needed
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                />
                <img
                  src={
                    props.my_team_images?.my_team_section_image_2?.url ||
                    "defaultImage2.jpg"
                  }
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                />
                <img
                  src={
                    props.my_team_images?.my_team_section_image_3?.url ||
                    "defaultImage3.jpg"
                  }
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                />
                <img
                  src={
                    props.my_team_images?.my_team_section_image_4?.url ||
                    "defaultImage4.jpg"
                  }
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                />
                <img
                  src={
                    props.my_team_images?.my_team_section_image_5?.url ||
                    "defaultImage5.jpg"
                  }
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                />
                <img
                  src={
                    props.my_team_images?.my_team_section_image_6?.url ||
                    "defaultImage6.jpg"
                  }
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
