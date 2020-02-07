import React, { useState } from 'react';
import "./badge-collection.css";

import { FaReact, FaNodeJs, FaHtml5, FaSass, FaAws, FaGitSquare } from "react-icons/fa";
import { DiJavascript1, DiMysql, DiPostgresql, DiHeroku, DiNpm, DiTerminal } from 'react-icons/di';

const Badges = {
    javascript: {
        label: "ES6+",
        icon: DiJavascript1
    },
    aws: {
        label: "AWS",
        icon: FaAws
    },
    git: {
        label: "Git",
        icon: FaGitSquare
    },
    mysql: {
        label: "MySQL",
        icon: DiMysql
    },
    postgres: {
        label: "Postgres",
        icon: DiPostgresql
    },
    react: {
        label: "React",
        icon: FaReact
    },
    nodejs: {
        label: "NodeJS",
        icon: FaNodeJs
    },
    html5: {
        label: "HTML5",
        icon: FaHtml5
    },
    sass: {
        label: "Sass",
        icon: FaSass
    },
    heroku: {
        label: "Heroku",
        icon: DiHeroku
    },
    npm: {
        label: "NPM",
        icon: DiNpm
    },
    misc: {
        label: "...",
        icon: DiTerminal
    },
}


function BadgeCollection(props) {
    return (
        <div className="badges">
            {props.badges.map((key) => {
                return <Badge icon={Badges[key].icon} label={Badges[key].label} />
            })}
        </div>
    );
}

function Badge(props) {
    return(
        <div className="badge">
            {React.createElement(props.icon, {size: 25})}
            {props.label}
        </div>  
    )
}

export default BadgeCollection;
