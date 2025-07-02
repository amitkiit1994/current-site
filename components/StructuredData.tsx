import React from 'react';
import Script from 'next/script';

const StructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Amit Kumar Das",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
        "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"}/hero-img.jpeg`,
        "description": "Co-founder of ratl.ai, expert in AI-driven software testing, automation, and engineering leadership. Former Microsoft, Jio, SAS engineer specializing in scalable systems and DevOps.",
        "jobTitle": "Co-founder & Head of Engineering",
        "worksFor": {
            "@type": "Organization",
            "name": "ratl.ai",
            "url": "https://ratl.ai",
            "description": "AI-powered platform that automates and optimizes post-development processes"
        },
        "alumniOf": [
            {
                "@type": "Organization",
                "name": "Microsoft"
            },
            {
                "@type": "Organization",
                "name": "Jio Platforms"
            },
            {
                "@type": "Organization",
                "name": "SAS Institute"
            },
            {
                "@type": "Organization",
                "name": "Infosys"
            }
        ],
        "knowsAbout": [
            "Artificial Intelligence",
            "Software Testing Automation",
            "Engineering Leadership",
            "DevOps",
            "Cloud Architecture",
            "Microservices",
            "Kubernetes",
            "Docker",
            "React.js",
            "Next.js",
            "TypeScript",
            "Python",
            "Go",
            "AWS",
            "CI/CD",
            "Software Engineering",
            "Startup Leadership"
        ],
        "sameAs": [
            process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/your-linkedin",
            process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/your-github",
            process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/your-twitter",
            "https://ratl.ai"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        }
    };

    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ratl.ai",
        "url": "https://ratl.ai",
        "description": "AI-powered platform that automates and optimizes post-development processes, revolutionizing software quality and developer productivity",
        "founder": {
            "@type": "Person",
            "name": "Amit Kumar Das"
        },
        "industry": "Software Development",
        "specialty": "AI-driven software testing and automation"
    };

    return (
        <>
            <Script
                id="person-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Script
                id="organization-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationData),
                }}
            />
        </>
    );
};

export default StructuredData; 