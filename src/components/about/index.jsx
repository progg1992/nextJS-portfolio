/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
		  		I am a Senior Technical Analyst and Technical Project Manager with a proven track record of leading teams, optimizing cloud environments, and aligning technical strategies with business goals. With over four years of experience working in technology management, software development, and project management, I specialize in driving innovation and fostering partnerships that deliver tangible results.
				Currently, I serve as an Assistant Department Manager at Menards, overseeing operations across multiple departments and ensuring efficient processes that align with company objectives. My experience extends to technical management roles, where I have spearheaded cloud infrastructure projects in AWS and GCP, improving security, scalability, and cost-efficiency for companies like Certified Bice Ltd. and Twin Designs and Tech.
				In addition to my hands-on technical expertise in programming languages such as JavaScript, TypeScript, and frameworks like React and Node.js, I have led full-stack development projects, managed DevOps pipelines, and implemented software solutions that enhance performance and operational efficiency.
				My educational background includes a Bachelor of Science in Technology Management (expected in December 2024), complemented by certificates in IT Essentials and Full Stack Web Development. I am passionate about combining technology and leadership to solve complex challenges, develop high-performing teams, and drive business success.
				Feel free to explore my projects or get in touch if you would like to collaborate.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=progg1992&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Pierce Rogg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=progg1992&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Pierce Rogg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=angular,ansible,apollo,aws,bash,bootstrap,cpp,cloudflare,codepen,dart,devto,discord,docker,dynamodb,express,fastapi,figma,firebase,flask,flutter,gcp,git,github,githubactions,gmail,gherkin,godot,graphql,heroku,html,js,jenkins,jest,jquery,less,linux,md,mongodb,mysql,nestjs,netlify,nextjs,nginx,nodejs,npm,postgres,postman,py,react,redux,sass,sqlite,selenium,sequelize,tailwind,ts,ubuntu,vercel,vite,vscode,vue,windows,wordpress`}
            alt="Pierce Rogg"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=progg1992&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Pierce Rogg"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/progg1992/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=progg1992&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Pierce Rogg"
              loading="lazy"
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;