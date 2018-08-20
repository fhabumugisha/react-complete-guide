import * as React from 'react'


interface Project {
    id: string;
    name: string;
  }
  
  interface ProjectListProps {
  }
  
  interface ProjectListState {
    projects: Array<Project>;
    isLoading: boolean;
  }
 export class ProjectList extends React.Component<ProjectListProps, ProjectListState> {

    constructor(props: ProjectListProps) {
        super(props);
    
        this.state = {
            projects: [],
          isLoading: false
        };
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('http://localhost:8080/portfolio/projects')
          .then(response => response.json())
          .then(data => this.setState({projects: data, isLoading: false}));
      }
      render() {
        const {projects, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
    
        return (
          <div>
            <h2>Projects List</h2>
            {projects.map((project: Project) =>
              <div key={project.id}>
                {project.name}
              </div>
            )}
          </div>
        );
      }
}

export default ProjectList;
