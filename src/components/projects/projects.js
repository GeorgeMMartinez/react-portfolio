import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../card';

export const projects = () => {
  let projects = [{
    title: 'Note Taker',
    github: 'https://github.com/GeorgeMMartinez/express-note-taker',
    image: "../../images/notetaker.png",
  },
  {
    title: 'Workday Scheduler',
    github: 'https://github.com/GeorgeMMartinez/WorkdayScheduler',
    image: '',
  },
  {
    title: 'Password Generator',
    github: 'https://github.com/GeorgeMMartinez/Module3Challenge',
    image: '',
  },
  {
    title: 'Text Editor',
    github: 'https://github.com/GeorgeMMartinez/another-text-editor',
    image: '',
  },
  {
    title: 'Team Profile Generator',
    github: 'https://github.com/GeorgeMMartinez/team-profile-generator',
    image: '',
  },
  {
    title: '',
    github: '',
    image: '',
  }
]
  return (
    <>
    <Grid container justifyContent="center">
      <h1>My Projects</h1>
    </Grid>
    <Grid container spacing={4} padding={2}  justifyContent="center">

      {projects.map(project =>
        <Grid item>
          <Card title={project.title} github={project.github} image={project.image}></Card>
        </Grid>
      )}
    </Grid>
    </>
  )
}

export default projects