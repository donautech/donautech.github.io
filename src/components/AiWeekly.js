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
                            {[0, 1].map(value => (
                                <Grid key={value} item>
                                    <Paper style={{
                                        minHeight: "50vh",
                                        width: "50vh",
                                    }}>
                                        No previous articles :)
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