const testimonials = [
    {
        id: 1,
        name: "Sunita Singh",
        position: "Principal R&D Project Manager - SAS R&D India",
        text: "I worked with Amit in one of the large, complex and demanding projects. I saw how quickly he gained the product knowledge, and how committed he was to his work. He was a quick learner and nothing was too difficult for him to take on, be it functional testing or automation. He was dependable, if he took a task in hand, rest assured it would get done and done well. He is always an asset to his team. I will recommend him highly.",
        link: "https://www.linkedin.com/in/sunita-singh-82b4315/"
    },
    {
        id: 2,
        name: "Ankit Mehrotra",
        position: "Software Manager - SAS R&D India",
        text: "Amit is diligent, suave, and a problem solver. He efficiently learnt the existing application and contributed to their hotfixes as well as learnt the cloud-based new platform and lead from the front in the adoption and migration of the new platform. He took the initiatives for automating the test cases, which helped in reducing the regression time for the applications. Though very quiet, He very seamlessly integrated into the existing team and always was available for helping out the team members, which was appreciated by one and all in the team. It was a great experience working with Amit.",
        link: "https://www.linkedin.com/in/ankitarun/"
    },
    {
        id: 3,
        name: "Gorang Khandelwal",
        position: "Software Manager - SAS R&D India",
        text: "Amit is a self-motivated individual and a perfectionist. He has a good sense of what is required and has proven to be very adept at balancing competing and dynamic needs. It was a delight working with him since he has joined a year back to date as Senior Software Engineer - Testing. After assigning functional or GUI/API automation tasks, you don't need follow-up, he is perfect and complete work well ahead of the given deadline. Amit is very enthusiastic who builds a good relationship with team members. I found him bringing new ideas to discussions and solving problems, hence worth recommending.",
        link: "https://www.linkedin.com/in/gorang-khandelwal-0808408/"
    },
    {
        id: 4,
        name: "Mahesh Purandare",
        position: "Data science, Decision science, Data warehousing and BI professional - SAS R&D India",
        text: "Amit is a fantastic testing professional with command over cloud technologies, deployment, and DevOps domains. His detail-oriented and thorough approach, as well as a very helpful nature, make him a fantastic colleague to work with and a very reliable teammate. His experience in the retail domain and mastery over automation, web technologies, and testing fundamentals will be an asset to any team he works with. His ability to quickly access a situation and plan a course of action has helped his team achieve impossible targets. Wish him the best!",
        link: "linkedin.com/in/mahesh-purandare-a2b9a26/"
    },
    {
        id: 5,
        name: "Santosh Revatgaon",
        position: "Application development Senior Analyst - Accenture",
        text: "I have worked with Amit for almost one and half years. In those years, I have seen him not only excel at doing manual testing but also doing automation testing. Amit's mastery for finding bugs helped team to provide quality product to the client. Because of his nature, everybody loves to work with him.",
        link: "https://www.linkedin.com/in/santosh-revatgaon-a94815a2/"
    },
    {
        id: 6,
        name: "Kiran Seersath",
        position: "Technical Lead - Cognizant",
        text: "Amit is a knowledgeable, dedicated and most of all helpful team member and an absolute pleasure to work with. Not only were his skills invaluable to the team his approachability and pleasant demeanor were a boost to team morale.",
        link: "https://www.linkedin.com/in/kiranseersath/"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="p-4 rounded-xl mx-auto max-w-screen-xl">
            <div className="relative flex flex-col items-center p-6 mx-auto bg-light-blueish-gray shadow-2xl rounded-xl">
                <h1 className="text-5xl m-4 p-2 text-center text-orange-custom">
                    What others think of me?
                </h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
                            <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-orange-custom mb-2">
                                {testimonial.name}
                            </a>
                            <h6 className="text-lg text-gray-600 mb-4">{testimonial.position}</h6>
                            <p className="text-center text-gray-800 italic">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;