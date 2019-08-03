import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";

class AiWeekly extends React.Component {
    render() {
        return (
            <section className="features-icons bg-light text-center">
                <h1>Previous articles</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                            {[0].map(value => (
                                <Grid key={value} item>
                                    <Paper style={{
                                        minHeight: "50vh",
                                        width: "120vh",
                                        padding: "1vh"
                                    }}>
                                        <h5 ><li><a  href="https://mailchi.mp/75067716edb7/ai-weekly-001">AI Weekly #001</a></li></h5>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default AiWeekly