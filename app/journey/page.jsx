import Image from "next/image";
import experiences from "./experienceList";

const Journey = () => {
    return (
        <section id="journey" className="p-2 rounded-xl mx-auto max-w-screen-xl">
            <div className="relative p-2 mx-auto bg-light-blueish-gray shadow-2xl rounded-xl">
                <div className="gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8 text-left text-black">
                    <h2 className="text-5xl m-4 p-2 text-center text-orange-custom">
                        Here is my Journey
                    </h2>
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className="flex flex-col lg:flex-row items-center mb-8 bg-white rounded-xl shadow-2xl p-6"
                        >
                            <div className="w-full lg:w-1/2 p-4">
                                <Image
                                    className="rounded-lg"
                                    src={experience.image}
                                    alt={experience.title}
                                    layout="responsive"
                                    width={700}
                                    height={475}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
                                <h2 className="text-3xl mb-2 text-orange-custom">
                                    {experience.title}
                                </h2>
                                <p className="text-lg text-gray-400">{experience.duration}</p>
                                <p className="text-l p-2">{experience.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;