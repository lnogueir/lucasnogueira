import React from 'react'
import Paper from '@material-ui/core/Paper'
import ExpandButton from '../../ExpandButton'
import YOUTUBE_ICON from '../../../assets/images/youtube.svg'
import GITHUB_ICON from '../../../assets/images/github.svg'
import DEVPOST_ICON from '../../../assets/images/devpost.png'
import LINK_ICON from '../../../assets/images/link.svg'
import $ from 'jquery'

function ProjectCard(props) {
    return (
        <Paper className="project">
            <div className="project-head">
                <div className="project-head-icon">
                    <img alt="Project Icon" src={props.project.icon} />
                </div>
                <div className="project-head-title-wrap">
                    <div className="project-head-title">
                        <span>{props.project.title}</span>
                    </div>
                    <div className="project-head-subtitle">
                        <span>{props.project.subtitle}</span>
                    </div>
                </div>
            </div>
            <div className="position-relative">
                <div className="more-content">
                    <div className="project-tech">
                        {
                            props.project.tech.map((tech, i) => {
                                return (
                                    <span key={i}>
                                        <img title={tech.title} alt="Tech Icon" src={tech.src} />
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: props.project.description }}
                        className="project-description"
                    />
                </div>
                <div className="project-main-image">
                    <img alt="Project sample" src={props.project.main_image} />
                </div>
                <div className="project-short-description-wrap">
                    <h1 className="project-short-description-title">{props.project.title}</h1>
                    <div className="project-short-description">
                        {props.project.short_description}
                    </div>
                </div>
            </div>
            <div className="justify-between">
                {
                    Object.keys(props.project.links).length !== 0 &&
                    <div className="project-view-links">
                        {
                            props.project.links.github &&
                            <a title="View on Github" href={props.project.links.github}>
                                <img alt="Github Icon" src={GITHUB_ICON} />
                            </a>
                        }
                        {
                            props.project.links.youtube &&
                            <a title="View on Youtube" href={props.project.links.youtube}>
                                <img alt="Youtube Icon" src={YOUTUBE_ICON} />
                            </a>
                        }
                        {
                            props.project.links.devpost &&
                            <a title="View on Devpost" href={props.project.links.devpost}>
                                <img alt="Devpost Icon" src={DEVPOST_ICON} />
                            </a>
                        }
                        {
                            props.project.links.website &&
                            <a
                                title="View website"
                                href={props.project.links.website}
                            >
                                <img alt="Link Icon" src={LINK_ICON} />
                            </a>
                        }
                    </div>
                }
                <div className="project-expand">
                    <ExpandButton expandText={"more"} shrinkText={"less"} 
                        onClick={(e, isExpanded) => {
                            const project = $(e.target).closest('.project')
                            project.find('.more-content').css('height', isExpanded ? '0%' : '100%')
                        }}
                    />
                </div>
            </div>
        </Paper>
    )
}

export default ProjectCard;