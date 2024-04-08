import flutter from '../../assets/icons/flutter2.png';
import sql from '../../assets/icons/mysql.png';
import mongo from '../../assets/icons/mongo.svg';
import js from '../../assets/icons/js.png';
import java from '../../assets/icons/java.png';
import nodejs from '../../assets/icons/node.png';
import go from '../../assets/icons/go-original.svg';
import react from '../../assets/icons/physics.png';
import express from '../../assets/icons/express.png';
import postg from '../../assets/icons/postgres.png';
import htmlcss from '../../assets/icons/html.png';
import nextjs from '../../assets/icons/next.png';

import docker from '../../assets/icons/docker2.png';
import git from '../../assets/icons/git.png';
import ts from '../../assets/icons/ts.png';

import nginx from '../../assets/icons/nginx.svg';


const skills = [
    
    {
        skillCategory : "Front End",
        skills : [
            {
                icon: react,
                name: "React Js"
            },
            {
                icon: nextjs,
                name: "Next Js",
            },
            {
                icon: flutter,
                name: "Flutter"
            },
            {
                icon: js,
                name: "JavaScript"
            },
            {
                icon: htmlcss,
                name: "Html & Css"
            },
        ]
    },
    {
        skillCategory : "Back End",
        skills :[
            {
                icon: go,
                name: "Golang"
            },
            {
                icon: nodejs,
                name: "NodeJs"
            },
            {
                icon: express,
                name: "Express"
            },
            {
                icon: nginx,
                name: "Nginx"
            }
        ]
    },
    
    {
        skillCategory : "Database",
        skills :[
            {
                icon: mongo,
                name: "MongoDB"
            },
            {
                icon: postg,
                name: "PostgreSQL"
            },
            {
                icon: sql,
                name: "MySQL"
            }
        ]
    },

    {
        skillCategory : "Languages",
        skills :[
            {
                icon: ts,
                name: "TypeScript"
            }, 
            {
                icon: java,
                name: "Java"
            },
        ]
    },

    {
        skillCategory : "DevOps",
        skills :[
            {
                icon: docker,
                name: "Docker"
            },
            {
                icon: git,
                name: "Git"
            },
        ]
    },
    
]

export default skills;