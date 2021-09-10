import React, { useEffect } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import ActivityList from './ActivityList'
import { useStore } from './../../../app/stores/store';
import { observer } from 'mobx-react-lite'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import ActivityFilters from './ActivityFilters';

const ActivityDashboard = () => {
    const { activityStore } = useStore();
    const { loadActivities, activityRegistry } = activityStore;

    useEffect(() => {
        if (activityRegistry.size === 0) loadActivities();
    }, [activityRegistry.size, loadActivities])


    if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <GridColumn width='6'>
                <ActivityFilters />
            </GridColumn>
        </Grid>
    )
}

export default observer(ActivityDashboard)