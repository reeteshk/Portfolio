import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import java from "../assets/java.png";
import spring  from "../assets/springjava.png";
import springboot from "../assets/springboot.png";
import aws from "../assets/aws.png";
import mysql from "../assets/mysql.png";
import postgres from "../assets/postgres.png";
import mongodb from "../assets/mongodb.jpg";




function Experience() {
  const techs = [
  
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: spring,
      title: "Spring",
      style: "shadow-green-400",
    },
    {
      id: 3,
      src: springboot,
      title: "springboot",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
        id: 5,
        src: aws,
        title: "AWS",
        style: "shadow-gray-400",
      },
    
  ];

  const techs2 = [
    {
        id: 6,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 7,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 8,
        src: javascript,
        title: "javascript",
        style: "shadow-yellow-500",
      },
      {
        id: 9,
        src: react,
        title: "react",
        style: "shadow-blue-600",
      },  
]

const techs3 = [
    {
        id: 1,
        src: mysql,
        title: "MYSQL",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: postgres,
        title: "POSTGRESQL",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: mongodb,
        title: "MONGODB",
        style: "shadow-yellow-500",
      },
]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-max-content mx-auto h-max-content"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <h1>Backend Technologies</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <h1>Fronted Technologies</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs2.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

        <h1>Databases</h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs3.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};


export default Experience;
