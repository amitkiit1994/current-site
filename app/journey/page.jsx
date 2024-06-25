import Image from "next/image";
import experiences from "./experienceList";

const Journey = () => {
    return (
        <section id="journey">
            <div className="border-4 border-yellow-400 rounded-lg p-4 mx-2 mt-2">
                <div className="gap-4 mx-4 lg:mx-40 mt-6 mb-4 lg:mb-8 text-left text-white">
                    <h2 className="text-5xl m-4 p-2 text-center text-yellow-400">
                        Here is my Journey
                    </h2>
                    {experiences.map((experience, index) => (
                        <div
                            key={experience.id}
                            className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                        >
                            <div className="flex-grow items-center lg:w-9/12 md:w-full p-4 flex flex-col justify-center">
                                {/* Content in the left column */}
                                <h2 className="text-3xl text-left mb-2 text-yellow-400">
                                    {experience.title}
                                </h2>
                                <p className="text-lg text-left text-gray-400">{experience.duration}</p>
                                <p className="text-xl text-left p-2">{experience.description}</p>
                            </div>
                            <div className="lg:w-6/12 md:w-full p-4 ">
                                <div className="relative rounded-md overflow-hidden group">
                                    <div className="relative w-full p-3 rounded md:p-8">
                                        <div className="rounded-full bg-white w-full">
                                            <Image
                                                className="rounded-full p-12"
                                                src={experience.image}
                                                alt={experience.title}
                                                layout="responsive"
                                                width={700}
                                                height={475}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;