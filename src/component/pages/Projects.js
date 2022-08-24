import {useLocation} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoader(true)
        })
        .catch((err) => console.log(err))
    }, [])

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && (<Message type="success" msg={message} />)}
            {projectMessage && (<Message type="success" msg={projectMessage} />)}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name} 
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handlerRemove={removeProject}
                        />
                    ))
                }
                {!removeLoader && <Loading />}
                {/* Abaixo um exemplo para quando não houver projetos,
                    a condição fica a seguinte: se o loader estiver ativo e não houver projetos, apresenta uma mensagem */}
                {removeLoader && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}
export default Projects