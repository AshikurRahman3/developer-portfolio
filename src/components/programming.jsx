import React from "react";

function Programming() {
    const profiles = [
        {
            platform: "Codeforces",
            link: "https://codeforces.com/profile/Ashikur.Rahman3",
        },
        {
            platform: "LeetCode",
            link: "https://leetcode.com/u/user3224FJ/",
        },
        {
            platform: "SPOJ",
            link: "https://www.spoj.com/users/ashik9656/",
        },
        {
            platform: "UVa Online Judge",
            link: "https://uhunt.onlinejudge.org/id/944427",
        },
        {
            platform: "HackerRank",
            link: "https://www.hackerrank.com/profile/ashik9656",
        },
    ];

    return (
        <div
            id="CompetitiveProgramming"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
        >
            <section className="p-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Competitive Programming
                </h2>
                <p className="text-center text-gray-700 mb-6">
                    I have solved over 200 problems across various platforms, showcasing
                    my problem-solving and algorithmic skills. Participated in multiple <b>ACM ICPC Dhaka Regional Preliminaries</b>.
                </p>
                <div className="flex flex-wrap flex-col md:flex-row md:justify-center md:gap-4 gap-4">
                    {profiles.map(({ platform, link }) => (
                        <a
                            key={platform}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg transition duration-300 text-center w-full md:w-auto"
                        >
                            {platform}
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Programming;
